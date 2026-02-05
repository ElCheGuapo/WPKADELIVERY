// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    
        // Animate hamburger menu
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Simple form validation
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

let lastScrollY = window.pageYOffset || 0;
let scrollTicking = false;

function handleNavbarOnScroll() {
    if (!navbar) return;

    const currentScroll = window.pageYOffset || 0;

    // Keep the existing shadow behavior
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }

    // Always show near the very top
    if (currentScroll < 20) {
        navbar.classList.remove('navbar--hidden');
        lastScrollY = currentScroll;
        return;
    }

    const delta = currentScroll - lastScrollY;

    // Ignore tiny movements to avoid jitter
    if (Math.abs(delta) < 6) return;

    if (delta > 0) {
        // Scrolling down → hide
        navbar.classList.add('navbar--hidden');
    } else {
        // Scrolling up → show
        navbar.classList.remove('navbar--hidden');
    }

    lastScrollY = currentScroll;
}

window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        scrollTicking = true;
        window.requestAnimationFrame(() => {
            handleNavbarOnScroll();
            scrollTicking = false;
        });
    }
});

// Add animation on scroll (simple fade-in effect)
const observerOptions = {
    threshold: [0, 0.12],
    rootMargin: '0px 0px -15% 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);

        // If the map becomes visible, Leaflet sometimes needs a resize tick.
        // Note: avoid animating/transforms on the Leaflet container itself; it can cause marker glitches.
        const isMapArea = entry.target.id === 'serviceMap' || entry.target.classList?.contains('map-container');
        if (entry.isIntersecting && isMapArea && window.__serviceMap?.invalidateSize) {
            setTimeout(() => window.__serviceMap.invalidateSize(), 100);
        }
    });
}, observerOptions);

// Observe service cards and other elements
document.addEventListener('DOMContentLoaded', () => {
    const revealTargets = document.querySelectorAll([
        '.service-card',
        '.map-container',
        '.about-text',
        '.about-features .feature-item',
        '.contact-wrapper',
        '.footer-section',
        '.footer-bottom'
    ].join(','));

    revealTargets.forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    initNavScrollSpy();
    initServiceMap();
    initThemeToggle();
    initScrollMessageLines();
    initMissionValuesSection();

    // Typing effect (FR hero title)
    setupHeroTyping(document.documentElement.lang || 'en');
});

function initMissionValuesSection() {
    const root = document.querySelector('[data-mv]');
    if (!root) return;

    const img = root.querySelector('.mv-image-img');
    const tabs = Array.from(root.querySelectorAll('[data-mv-tab]'));
    const panels = Array.from(root.querySelectorAll('[data-mv-panel]'));
    if (tabs.length === 0 || panels.length === 0) return;

    let hideTimer = null;
    let imageToken = 0;

    const setActive = (key) => {
        if (hideTimer) {
            clearTimeout(hideTimer);
            hideTimer = null;
        }

        const nextPanel = panels.find((p) => p.getAttribute('data-mv-panel') === key);
        const prevPanel = panels.find((p) => p.classList.contains('is-active'));

        if (!nextPanel) return;
        if (prevPanel === nextPanel) return;

        tabs.forEach((t) => {
            const isActive = t.getAttribute('data-mv-tab') === key;
            t.classList.toggle('is-active', isActive);
            t.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        // Start exit transition for current panel (slide out to the right)
        if (prevPanel) {
            prevPanel.hidden = false;
            prevPanel.classList.remove('is-entering');
            prevPanel.classList.add('is-exiting');
            prevPanel.classList.remove('is-active');
        }

        // Prepare next panel to enter from the left
        nextPanel.hidden = false;
        nextPanel.classList.remove('is-exiting');
        nextPanel.classList.remove('is-active');
        nextPanel.classList.add('is-entering');

        // Next frame: trigger enter transition
        window.requestAnimationFrame(() => {
            nextPanel.classList.remove('is-entering');
            nextPanel.classList.add('is-active');
        });

        // After transition: hide all non-active panels and cleanup state classes
        hideTimer = window.setTimeout(() => {
            panels.forEach((p) => {
                const isActive = p === nextPanel;
                p.hidden = !isActive;
                p.classList.toggle('is-active', isActive);
                p.classList.remove('is-entering');
                p.classList.remove('is-exiting');
            });
        }, 260);

        if (img) {
            const src = key === 'values'
                ? img.getAttribute('data-src-values')
                : img.getAttribute('data-src-mission');
            const fallbackSrc = key === 'values'
                ? img.getAttribute('data-fallback-values')
                : img.getAttribute('data-fallback-mission');

            if (src && img.getAttribute('src') !== src) {
                const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                if (reduceMotion) {
                    img.setAttribute('src', src);
                } else {
                    const token = ++imageToken;
                    img.classList.add('is-fading');

                    // Swap while faded out, then fade back in once loaded.
                    window.setTimeout(() => {
                        if (token !== imageToken) return;

                        let triedFallback = false;

                        const finish = () => {
                            if (token !== imageToken) return;
                            window.requestAnimationFrame(() => img.classList.remove('is-fading'));
                        };

                        const attach = () => {
                            img.addEventListener('load', finish, { once: true });
                            img.addEventListener('error', () => {
                                if (token !== imageToken) return;
                                if (!triedFallback && fallbackSrc) {
                                    triedFallback = true;
                                    attach();
                                    img.setAttribute('src', fallbackSrc);
                                    return;
                                }
                                finish();
                            }, { once: true });
                        };

                        attach();
                        img.setAttribute('src', src);

                        // Fallback in case load/error doesn't fire (shouldn't happen, but keep UI responsive)
                        window.setTimeout(finish, 800);
                    }, 160);
                }
            }
        }
    };

    // Default to mission
    setActive('mission');

    tabs.forEach((t) => {
        t.addEventListener('click', () => {
            const key = t.getAttribute('data-mv-tab');
            if (!key) return;
            setActive(key);
        });
    });
}

function initScrollMessageLines() {
    const containers = Array.from(document.querySelectorAll('[data-scroll-lines]'));
    if (containers.length === 0) return;

    // Per-line speed multipliers so the motion feels less "robotic".
    // If there are more lines than defaults, fall back to 1.
    // 1st line: baseline, 2nd line: slightly slower, 3rd line: half travel so it doesn't mirror line 1.
    const defaultSpeeds = [1.0, 0.82, 0.5, 0.9];

    let ticking = false;

    const clamp01 = (n) => Math.max(0, Math.min(1, n));

    const update = () => {
        ticking = false;

        const vh = window.innerHeight || document.documentElement.clientHeight || 0;
        const baseMaxShift = Math.min(90, Math.max(45, window.innerWidth * 0.09));

        for (const container of containers) {
            const lines = Array.from(container.querySelectorAll('.scroll-message-line[data-direction]'));
            if (lines.length === 0) continue;

            const rect = container.getBoundingClientRect();
            const progress = clamp01((vh - rect.top) / (vh + rect.height));

            const mult = Number(container.getAttribute('data-shift-mult') || '');
            const shiftMult = Number.isFinite(mult) && mult > 0 ? mult : 1;

            const shift = (progress - 0.5) * 2 * (baseMaxShift * shiftMult);

            for (let i = 0; i < lines.length; i += 1) {
                const el = lines[i];
                const dir = el.getAttribute('data-direction');
                const speedAttr = Number(el.getAttribute('data-speed') || '');
                const speed = Number.isFinite(speedAttr) && speedAttr > 0 ? speedAttr : (defaultSpeeds[i] ?? 1);
                const x = (dir === 'left' ? -shift : shift) * speed;
                el.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`;
            }
        }
    };

    const onScroll = () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
}

function initThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    const applyTheme = (theme) => {
        document.documentElement.dataset.theme = theme;
        btn.setAttribute('aria-checked', theme === 'dark' ? 'true' : 'false');
        updateHeroVideoForTheme(theme);
        updateServiceIconsForTheme(theme);
        updateNavbarLogoForTheme(theme);
    };

    const getEffectiveTheme = () => {
        const stored = (() => {
            try {
                return localStorage.getItem('theme');
            } catch (_) {
                return null;
            }
        })();

        if (stored === 'dark' || stored === 'light') return stored;

        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    };

    // Sync UI on load (head script sets dataset early; fall back if missing)
    const current = document.documentElement.dataset.theme || getEffectiveTheme();
    applyTheme(current === 'dark' ? 'dark' : 'light');

    btn.addEventListener('click', () => {
        const next = (document.documentElement.dataset.theme === 'dark') ? 'light' : 'dark';
        applyTheme(next);
        try {
            localStorage.setItem('theme', next);
        } catch (_) {}
    });
}

function updateNavbarLogoForTheme(theme) {
    const logo = document.getElementById('navbarLogo') || document.querySelector('.logo-img');
    if (!logo) return;

    const lightSrc = logo.getAttribute('data-src-light');
    const darkSrc = logo.getAttribute('data-src-dark');
    const nextSrc = theme === 'dark' ? darkSrc : lightSrc;
    if (!nextSrc) return;

    const currentSrc = logo.getAttribute('src');
    if (currentSrc === nextSrc) return;

    logo.setAttribute('src', nextSrc);
}

function updateHeroVideoForTheme(theme) {
    const video = document.querySelector('.hero-video');
    const source = document.getElementById('heroVideoSource');
    if (!video || !source) return;

    const lightSrc = source.getAttribute('data-src-light');
    const darkSrc = source.getAttribute('data-src-dark');
    const nextSrc = theme === 'dark' ? darkSrc : lightSrc;
    if (!nextSrc) return;

    const currentSrc = source.getAttribute('src');
    if (currentSrc === nextSrc) return;

    source.setAttribute('src', nextSrc);

    try {
        video.load();
        const p = video.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch (_) {
        // ignore
    }
}

function updateServiceIconsForTheme(theme) {
    const icons = Array.from(document.querySelectorAll('.service-icon-img[data-src-light][data-src-dark]'));
    if (icons.length === 0) return;

    for (const img of icons) {
        const nextSrc = theme === 'dark' ? img.getAttribute('data-src-dark') : img.getAttribute('data-src-light');
        if (!nextSrc) continue;
        if (img.getAttribute('src') === nextSrc) continue;
        img.setAttribute('src', nextSrc);
    }
}

function initNavScrollSpy() {
    const links = Array.from(document.querySelectorAll('.nav-link[href]'));
    if (links.length === 0) return;

    // Map section id -> links that target it (usually 1:1)
    const idToLinks = new Map();
    const idToSection = new Map();

    for (const link of links) {
        const href = link.getAttribute('href') || '';
        if (!href.includes('#')) continue;

        let id = '';
        if (href.startsWith('#')) {
            id = href.slice(1);
        } else {
            // Handle absolute/relative URLs that point to this page with a hash.
            try {
                const url = new URL(href, window.location.href);
                if (url.pathname !== window.location.pathname) continue;
                id = (url.hash || '').replace(/^#/, '');
            } catch (_) {
                continue;
            }
        }

        if (!id) continue;
        const section = document.getElementById(id);
        if (!section) continue;

        idToSection.set(id, section);
        const arr = idToLinks.get(id) || [];
        arr.push(link);
        idToLinks.set(id, arr);
    }

    if (idToSection.size === 0) return; // e.g. service detail pages

    const ratios = new Map();

    const setActive = (activeId) => {
        for (const [id, linkList] of idToLinks.entries()) {
            const isActive = id === activeId;
            for (const a of linkList) {
                a.classList.toggle('is-active', isActive);
                if (isActive) a.setAttribute('aria-current', 'page');
                else a.removeAttribute('aria-current');
            }
        }
    };

    const pickBest = () => {
        let bestId = '';
        let bestRatio = 0;
        for (const [id, ratio] of ratios.entries()) {
            if (ratio > bestRatio) {
                bestRatio = ratio;
                bestId = id;
            }
        }
        if (bestId) setActive(bestId);
    };

    const spyObserver = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                const id = entry.target.id;
                if (!id) continue;
                ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
            }
            pickBest();
        },
        {
            // Treat the section as "active" when it's around the viewport middle.
            root: null,
            rootMargin: '-35% 0px -55% 0px',
            threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1]
        }
    );

    for (const section of idToSection.values()) {
        spyObserver.observe(section);
    }

    // If the user clicks a link, reflect it immediately (scrollspy will follow).
    links.forEach((a) => {
        a.addEventListener('click', () => {
            const href = a.getAttribute('href') || '';
            if (!href.startsWith('#')) return;
            const id = href.slice(1);
            if (idToSection.has(id)) setActive(id);
        });
    });
}

// Run again on full load (external scripts like Leaflet CDN are guaranteed loaded here)
window.addEventListener('load', () => {
    initServiceMap();
    setupHeroTyping(document.documentElement.lang || 'en');
});

// Make sure typing updates even if the map isn't initialized (event is fired from translations.js)
document.addEventListener('languageChanged', (e) => {
    const newLang = e.detail?.lang || document.documentElement.lang || 'en';
    setupHeroTyping(newLang);
});

// --- Hero typing effect (EN/FR) ---
let typingTimer = null;
let typingState = null;

function stopHeroTyping() {
    if (typingTimer) {
        clearTimeout(typingTimer);
        typingTimer = null;
    }
    typingState = null;
}

function setupHeroTyping(lang) {
    const heroTitleEl = document.getElementById('heroTitle') || document.querySelector('.hero-title');
    if (!heroTitleEl) return;

    const data = (typeof translations !== 'undefined')
        ? (translations[lang] || translations.en)
        : null;

    const baseWord = data?.heroTypingBase || (lang === 'fr' ? 'Livraison ' : 'Delivery');
    const words = data?.heroTypingWords || (lang === 'fr'
        ? ['Rapide', 'Fiable', 'Professionelle', 'Durable']
        : ['Fast', 'Reliable', 'Professional', 'Eco-friendly']);

    // Build the DOM structure
    stopHeroTyping();
    if (lang === 'en') {
        // e.g. "Fast Delivery"
        heroTitleEl.innerHTML = `<span class="typing-word" id="typingWord" aria-live="polite"></span><span> ${baseWord}</span>`;
    } else {
        // e.g. "Livraison Rapide"
        heroTitleEl.innerHTML = `${baseWord}<span class="typing-word" id="typingWord" aria-live="polite"></span>`;
    }

    const wordEl = document.getElementById('typingWord');
    if (!wordEl) return;

    typingState = {
        idx: 0,
        char: 0,
        deleting: false
    };

    const typeSpeed = 140;
    const deleteSpeed = 90;
    const pauseAfterType = 1600;
    const pauseAfterDelete = 450;

    const tick = () => {
        if (!typingState) return;

        const current = words[typingState.idx];

        if (!typingState.deleting) {
            typingState.char += 1;
            wordEl.textContent = current.slice(0, typingState.char);
            if (typingState.char >= current.length) {
                typingState.deleting = true;
                typingTimer = setTimeout(tick, pauseAfterType);
                return;
            }
            typingTimer = setTimeout(tick, typeSpeed);
            return;
        }

        // deleting
        typingState.char -= 1;
        wordEl.textContent = current.slice(0, Math.max(0, typingState.char));
        if (typingState.char <= 0) {
            typingState.deleting = false;
            typingState.idx = (typingState.idx + 1) % words.length;
            typingTimer = setTimeout(tick, pauseAfterDelete);
            return;
        }
        typingTimer = setTimeout(tick, deleteSpeed);
    };

    tick();
}

function initServiceMap() {
    const mapEl = document.getElementById('serviceMap');
    if (!mapEl) return;

    const getLangData = () => {
        const lang = document.documentElement.lang || 'en';
        // translations is defined in translations.js (loaded before script.js)
        if (typeof translations === 'undefined') return { lang };
        return { lang, data: translations[lang] || translations.en };
    };

    const renderFallback = () => {
        const { data } = getLangData();
        const msg = data?.mapFallback || 'Map failed to load.';
        mapEl.classList.add('map-fallback');
        mapEl.innerHTML = `<div>${msg}</div>`;
    };

    // Leaflet must be available (loaded via CDN in index.html)
    if (typeof L === 'undefined') {
        renderFallback();
        return;
    }

    // Prevent double-initialization (we call init on DOMContentLoaded and window.load)
    if (mapEl.dataset.mapInitialized === 'true') return;

    // Ensure Leaflet gets a normal container (fallback uses flex and breaks Leaflet layout)
    mapEl.classList.remove('map-fallback');
    mapEl.innerHTML = '';

    let map;
    try {
        map = L.map(mapEl, {
            scrollWheelZoom: false,
            dragging: true,
            tap: false,
            zoomControl: true,
            // Prevent "infinite duplicate worlds" when panning left/right.
            // Without this, tiles wrap but markers don't, so pins appear to disappear.
            worldCopyJump: true
        });
    } catch (e) {
        renderFallback();
        return;
    }

    // Expose for reveal observer to invalidate size when it fades in
    window.__serviceMap = map;

    // Keep required tile/provider attribution, but remove Leaflet "watermark" prefix
    // and move attribution to bottom-left to be less intrusive.
    try {
        map.attributionControl.setPrefix('');
        map.attributionControl.setPosition('bottomleft');
    } catch (_) {
        // ignore
    }

    // Zoom controls (plus/minus) for better navigation
    try {
        map.zoomControl.setPosition('topright');
    } catch (_) {
        // ignore
    }

    // Try multiple tile providers (some networks block specific domains)
    const tileProviders = [
        {
            url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
            options: { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors & CARTO' }
        },
        {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            options: { maxZoom: 18, attribution: '&copy; OpenStreetMap contributors' }
        },
        {
            url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
            options: { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors & CARTO' }
        },
        {
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
            options: { maxZoom: 19, attribution: '&copy; Esri' }
        }
    ];

    function addTileLayerWithFallback(providerIndex = 0) {
        const provider = tileProviders[providerIndex];
        if (!provider) {
            map.remove();
            renderFallback();
            return;
        }

        let tilesLoaded = false;
        let tileErrors = 0;

        const layer = L.tileLayer(provider.url, provider.options).addTo(map);

        layer.on('load', () => {
            tilesLoaded = true;
        });

        layer.on('tileerror', () => {
            tileErrors += 1;
        });

        // If no tiles load shortly after init, try the next provider
        setTimeout(() => {
            if (!tilesLoaded && tileErrors > 0) {
                try {
                    map.removeLayer(layer);
                } catch (_) {
                    // ignore
                }
                addTileLayerWithFallback(providerIndex + 1);
            }
        }, 2500);
    }

    addTileLayerWithFallback(0);

    // Ensure marker icons load even if Leaflet can't auto-detect image paths
    try {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
            iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
        });
    } catch (_) {
        // ignore
    }

    const cities = {
        quebec: { lat: 46.8139, lng: -71.2080 },
        montreal: { lat: 45.5017, lng: -73.5673 },
        ottawa: { lat: 45.4215, lng: -75.6972 },
        amsterdam: { lat: 52.3676, lng: 4.9041 },
        rotterdam: { lat: 51.9244, lng: 4.4777 },
        losangeles: { lat: 34.0522, lng: -118.2437 },
        malaga: { lat: 36.7213, lng: -4.4214 },
        bordeaux: { lat: 44.8378, lng: -0.5792 }
    };

    const cityImages = {
        quebec: [
            'assets/public/placeholders/quebec-1.svg',
            'assets/public/placeholders/quebec-2.svg',
            'assets/public/placeholders/quebec-3.svg'
        ],
        montreal: [
            'assets/public/placeholders/montreal-1.svg',
            'assets/public/placeholders/montreal-2.svg',
            'assets/public/placeholders/montreal-3.svg'
        ],
        ottawa: [
            'assets/public/placeholders/ottawa-1.svg',
            'assets/public/placeholders/ottawa-2.svg',
            'assets/public/placeholders/ottawa-3.svg'
        ],
        amsterdam: [
            'assets/public/placeholders/amsterdam-1.svg',
            'assets/public/placeholders/amsterdam-2.svg',
            'assets/public/placeholders/amsterdam-3.svg'
        ],
        rotterdam: [
            'assets/public/placeholders/rotterdam-1.svg',
            'assets/public/placeholders/rotterdam-2.svg',
            'assets/public/placeholders/rotterdam-3.svg'
        ]
    };

    // Custom green marker icon (matches --primary-color)
    const greenMarkerIcon = L.divIcon({
        className: 'ka-marker',
        html: `
            <svg width="34" height="46" viewBox="0 0 34 46" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M17 0C7.6 0 0 7.6 0 17c0 11.8 17 29 17 29s17-17.2 17-29C34 7.6 26.4 0 17 0z" fill="#79dd2b"/>
                <circle cx="17" cy="17" r="6.5" fill="#1f3040"/>
                <circle cx="17" cy="17" r="3.2" fill="#ffffff" opacity="0.9"/>
            </svg>
        `,
        iconSize: [34, 46],
        iconAnchor: [17, 45],
        popupAnchor: [0, -42]
    });

    // Light blue "fade" marker icon (for Coming Soon cities)
    const lightBlueMarkerIcon = L.divIcon({
        className: 'ka-marker',
        html: `
            <svg width="34" height="46" viewBox="0 0 34 46" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M17 0C7.6 0 0 7.6 0 17c0 11.8 17 29 17 29s17-17.2 17-29C34 7.6 26.4 0 17 0z" fill="#8ecffb" opacity="0.7"/>
                <circle cx="17" cy="17" r="6.5" fill="#1f3040"/>
                <circle cx="17" cy="17" r="3.2" fill="#ffffff" opacity="0.9"/>
            </svg>
        `,
        iconSize: [34, 46],
        iconAnchor: [17, 45],
        popupAnchor: [0, -42]
    });

    const mk = (c) => L.marker([c.lat, c.lng], { icon: greenMarkerIcon }).addTo(map);
    const mkBlue = (c) => L.marker([c.lat, c.lng], { icon: lightBlueMarkerIcon }).addTo(map);

    const markers = {
        quebec: mk(cities.quebec),
        montreal: mk(cities.montreal),
        ottawa: mk(cities.ottawa),
        amsterdam: mk(cities.amsterdam),
        rotterdam: mk(cities.rotterdam),
        losangeles: mkBlue(cities.losangeles),
        malaga: mkBlue(cities.malaga),
        bordeaux: mkBlue(cities.bordeaux)
    };

    const bounds = L.latLngBounds([
        [cities.quebec.lat, cities.quebec.lng],
        [cities.montreal.lat, cities.montreal.lng],
        [cities.ottawa.lat, cities.ottawa.lng],
        [cities.amsterdam.lat, cities.amsterdam.lng],
        [cities.rotterdam.lat, cities.rotterdam.lng],
        [cities.losangeles.lat, cities.losangeles.lng],
        [cities.malaga.lat, cities.malaga.lng],
        [cities.bordeaux.lat, cities.bordeaux.lng]
    ]);
    map.fitBounds(bounds, { padding: [40, 40] });
    // Keep panning within a reasonable envelope (still allows some exploration),
    // and avoids drifting into wrapped copies where markers seem to "vanish".
    try {
        map.setMaxBounds(bounds.pad(0.6));
        map.options.maxBoundsViscosity = 0.85;
    } catch (_) {
        // ignore
    }
    setTimeout(() => map.invalidateSize(), 150);

    function buildComingSoonPopup(title, label = 'COMING SOON') {
        return `
            <div class="map-popup">
                <div class="map-popup-title"><strong>${title}</strong></div>
                <div class="map-popup-sub">${label}</div>
            </div>
        `;
    }

    function buildCarousel(cityKey, title, serviceText) {
        const imgs = cityImages[cityKey] || [];
        const slides = imgs
            .map((src, idx) => `<img class="carousel-slide${idx === 0 ? ' is-active' : ''}" src="${src}" alt="${title} ${idx + 1}" loading="lazy">`)
            .join('');

        const dots = imgs
            .map((_, idx) => `<button class="carousel-dot${idx === 0 ? ' is-active' : ''}" type="button" data-index="${idx}" aria-label="Slide ${idx + 1}"></button>`)
            .join('');

        return `
            <div class="map-popup">
                <div class="map-popup-title"><strong>${title}</strong></div>
                <div class="map-popup-sub">${serviceText}</div>
                <div class="popup-carousel" data-city="${cityKey}" data-index="0">
                    <button class="carousel-btn prev" type="button" data-action="prev" aria-label="Previous">‹</button>
                    <button class="carousel-btn next" type="button" data-action="next" aria-label="Next">›</button>
                    <div class="carousel-slides">${slides}</div>
                    <div class="carousel-dots">${dots}</div>
                </div>
            </div>
        `;
    }

    function updateMapLabels(lang) {
        if (typeof translations === 'undefined') return;
        const data = translations[lang] || translations.en;
        const serviceText = data.mapServiceAvailable || '';

        markers.quebec.bindPopup(buildCarousel('quebec', data.mapCityQuebec || 'Quebec City', serviceText), { className: 'map-popup-wrap' });
        markers.montreal.bindPopup(buildCarousel('montreal', data.mapCityMontreal || 'Montreal', serviceText), { className: 'map-popup-wrap' });
        markers.ottawa.bindPopup(buildCarousel('ottawa', data.mapCityOttawa || 'Ottawa', serviceText), { className: 'map-popup-wrap' });
        markers.amsterdam.bindPopup(buildCarousel('amsterdam', data.mapCityAmsterdam || 'Amsterdam', serviceText), { className: 'map-popup-wrap' });
        markers.rotterdam.bindPopup(buildCarousel('rotterdam', data.mapCityRotterdam || 'Rotterdam', serviceText), { className: 'map-popup-wrap' });
        markers.losangeles.bindPopup(buildComingSoonPopup('Los Angeles', 'COMING SOON'), { className: 'map-popup-wrap' });
        markers.malaga.bindPopup(buildComingSoonPopup('Malaga, Spain', 'COMING SOON'), { className: 'map-popup-wrap' });
        markers.bordeaux.bindPopup(buildComingSoonPopup('Bordeaux, France', 'COMING SOON'), { className: 'map-popup-wrap' });
    }

    updateMapLabels(document.documentElement.lang || 'en');

    document.addEventListener('languageChanged', (e) => {
        const newLang = e.detail?.lang || document.documentElement.lang || 'en';
        updateMapLabels(newLang);
        setupHeroTyping(newLang);
    });

    window.addEventListener('resize', () => {
        map.invalidateSize();
    });

    map.on('popupopen', (e) => {
        const container = e.popup.getElement();
        if (!container) return;
        const carousel = container.querySelector('.popup-carousel');
        if (!carousel) return;

        const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
        const dots = Array.from(carousel.querySelectorAll('.carousel-dot'));
        if (slides.length === 0) return;

        const setIndex = (newIndex) => {
            const max = slides.length;
            const idx = (newIndex + max) % max;
            carousel.dataset.index = String(idx);
            slides.forEach((el, i) => el.classList.toggle('is-active', i === idx));
            dots.forEach((el, i) => el.classList.toggle('is-active', i === idx));
        };

        const onClick = (ev) => {
            const btn = ev.target.closest('button');
            if (!btn) return;
            if (btn.classList.contains('carousel-btn')) {
                const dir = btn.dataset.action;
                const current = Number(carousel.dataset.index || '0');
                setIndex(dir === 'next' ? current + 1 : current - 1);
            }
            if (btn.classList.contains('carousel-dot')) {
                const idx = Number(btn.dataset.index || '0');
                setIndex(idx);
            }
        };

        // Avoid duplicate binding when opening/closing
        if (carousel.dataset.bound === 'true') return;
        carousel.addEventListener('click', onClick);
        carousel.dataset.bound = 'true';
        setIndex(Number(carousel.dataset.index || '0'));
    });

    mapEl.dataset.mapInitialized = 'true';
}

