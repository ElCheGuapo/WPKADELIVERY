// Translation data
const translations = {
    en: {
        navHome: "Home",
        navServices: "Services",
        navAbout: "About",
        navContact: "Contact",
        heroTitle: "Fast & Reliable Delivery Across Canada",
        heroTypingBase: " Delivery",
        heroTypingWords: ["Fast", "Reliable", "Professional", "Eco-friendly"],
        heroSubtitle: "Delivery, designed as an extension of your brand.",
        btnGetQuote: "Get a Quote",
        btnOurServices: "Our Services",
        servicesTitle: "Our Services",
        servicesSubtitle: "Delivery solutions built for today’s businesses.",
        service1Title: "Turnkey Service",
        service1Desc: "From pickup to your customer’s door, we manage every delivery with rigor, clarity, and the same level of care—no matter the volume.",
        service1Body: `
            <p>KA Delivery takes care of all your deliveries, from pickup to your customer’s door.</p>
            <p>This service is designed for businesses that want to delegate delivery while maintaining reliability, clarity, and consistency.</p>

            <h3>What we manage for you</h3>
            <ul>
                <li>End-to-end delivery coordination</li>
                <li>Volume management, regardless of size</li>
                <li>Clear tracking and smooth communication</li>
                <li>A single point of contact</li>
            </ul>

            <h3>A solution that adapts to your reality</h3>
            <p>Whether your needs are occasional or recurring, we adapt our organization to ensure reliable, consistent execution.</p>

            <h3>Who is it for?</h3>
            <ul>
                <li>SMEs and growing brands</li>
                <li>Companies looking to outsource their delivery</li>
                <li>Organizations seeking a simple, structured solution</li>
            </ul>
        `,
        service2Title: "Business Solutions",
        service2Desc: "Operational support when you need to deliver a package, an order, or a specific volume—without mobilizing internal resources.",
        service2Body: `
            <p>KA Delivery provides operational support when you need to deliver a package, an order, or a specific volume—without mobilizing internal resources.</p>
            <p>This service is designed for companies that already deliver, but need fast and flexible support.</p>

            <h3>What we do</h3>
            <ul>
                <li>One-off delivery from point A to point B</li>
                <li>Urgent or last-minute delivery</li>
                <li>Transport of single parcels</li>
                <li>Temporary support for your operations</li>
            </ul>

            <h3>Who is it for?</h3>
            <ul>
                <li>Retailers</li>
                <li>Companies with occasional deliveries</li>
                <li>Urgent or unexpected needs</li>
            </ul>
        `,
        service3Title: "Subcontracting",
        service3Desc: "KA Delivery supports logistics companies as an on-the-ground subcontracting partner, built to strengthen daily operations.",
        service3Body: `
            <p>KA Delivery supports logistics companies as an on-the-ground subcontracting partner, built to support your day-to-day operations.</p>
            <p>We step in to strengthen your capacity, absorb volume, and meet your standards.</p>

            <h3>Operational partners</h3>
            <p>KA Delivery collaborates with recognized delivery networks—including Nationex, Intelcom, and Obibox—to ensure reliable, structured operations aligned with expected standards.</p>

            <h3>What we take care of</h3>
            <ul>
                <li>On-the-ground operational reinforcement</li>
                <li>Management of one-off or recurring volume</li>
                <li>Dedicated routes or targeted missions</li>
                <li>On-time performance and process compliance</li>
            </ul>

            <h3>Simple integration into your operations</h3>
            <p>Our teams integrate quickly into your existing processes to ensure smooth, reliable execution.</p>

            <h3>Who is it for?</h3>
            <ul>
                <li>Logistics and distribution companies</li>
                <li>Organizations with volume peaks</li>
                <li>Teams that need additional on-the-ground capacity</li>
            </ul>
        `,
        aboutTitle: "About KA Delivery",
        aboutP1: "KA Delivery is a last-mile delivery company that supports businesses, brands, and logistics players in their delivery operations.",
        aboutP2: "We operate both as a subcontracting partner for established logistics companies and as a turnkey delivery solution for SMEs and growing brands.",
        aboutP3: "<strong>Our approach is simple:</strong><br><strong>Delivery is the last impression your customer has of you.</strong>",
        aboutP4: "That’s why we focus on reliability, meeting deadlines, and consistent execution—no matter the volume.",
        aboutP5: "<strong>As part of a responsible approach,</strong><br>KA Delivery operates with a 100% electric fleet.",
        feature1Label: "Daily Deliveries",
        feature2Label: "Countries Served",
        feature3Label: "On-Time Rate",
        contactTitle: "Get In Touch",
        contactCtaTitle: "Ready to deliver at the level your brand deserves?",
        contactCtaText: "Let’s talk about your needs and see how KA Delivery can support you.",
        contactCtaButton: "Contact Us",
        preContactLine1: "Every delivery deserves the same attention.",
        preContactLine2: "No matter the volume or context.",
        homeScrollLine1: "Delivery is good.",
        homeScrollLine2: "Connecting is better.",
        homeScrollLine3: "At KA Delivery we do both.",
        partnersTitle: "Our Partners",
        subcontractingPartnersTitle: "Operational partners",
        contactAddress: "Address",
        contactEmail: "Email",
        contactPhone: "Phone",
        contactHours: "Business Hours",
        contactHoursText: "7 Days a Week: 6:00 to 17:00",
        formName: "Name",
        formEmail: "Email",
        formPhone: "Phone",
        formMessage: "Message",
        btnSendMessage: "Send Message",
        footerTagline: "Your trusted delivery partner across Canada and Europe.",
        footerQuickLinks: "Quick Links",
        footerServices: "Services",
        footerPackageDelivery: "Turnkey Service",
        footerBusinessSolutions: "Business Solutions",
        footerSameDayDelivery: "Subcontracting",
        footerCopyright: "© 2024 KA Delivery. All rights reserved.",

        missionValuesTitle: "Mission & Values",
        missionTitle: "Mission",
        missionBody: "<span class=\"mv-mission-lead\"><strong>Our goal is simple:</strong></span> Deliver <strong>reliable</strong> and <strong>consistent</strong> service, designed as an extension of the <strong>customer experience</strong>, so businesses can <strong>protect</strong> their <strong>brand image</strong> all the way to the customer’s door.",
        valuesTitle: "Values",
        valuesBody: `
            <div class="values-grid">
                <div class="value">
                    <div class="value-title">Reliability</div>
                    <div class="value-text">Keep our commitments, meet deadlines, and deliver consistent execution—every day.</div>
                </div>
                <div class="value">
                    <div class="value-title">High Standards</div>
                    <div class="value-text">Apply the same quality standards to every delivery, no matter the volume or context.</div>
                </div>
                <div class="value">
                    <div class="value-title">Responsibility</div>
                    <div class="value-text">Operate thoughtfully, with a 100% electric fleet,<br>and practices adapted to urban realities.</div>
                </div>
            </div>
        `,

        mapTitle: "Service Areas",
        mapSubtitle: "Wherever your customers are, we deliver.",
        mapCityQuebec: "Quebec City",
        mapCityMontreal: "Montreal",
        mapCityOttawa: "Ottawa",
        mapCityAmsterdam: "Amsterdam",
        mapCityRotterdam: "Rotterdam",
        mapServiceAvailable: "Service available",
        mapFallback: "Map failed to load. Please check your internet connection."
    },
    fr: {
        navHome: "Accueil",
        navServices: "Services",
        navAbout: "À propos",
        navContact: "Contact",
        heroTitle: "Livraison Rapide et Fiable à Travers le Canada",
        heroTypingBase: "Livraison",
        heroTypingWords: ["Rapide", "Fiable", "Professionelle", "Durable"],
        heroSubtitle: "La livraison, pensée comme une extension de votre marque.",
        btnGetQuote: "Obtenir un Devis",
        btnOurServices: "Nos Services",
        servicesTitle: "Nos Services",
        servicesSubtitle: "Des solutions de livraison adaptées aux réalités des entreprises d’aujourd’hui.",
        service1Title: "Service Clé en Mains",
        service1Desc: "KA Delivery prend en charge l’ensemble de vos livraisons, de la prise en charge jusqu’à la porte du client.",
        service1Body: `
            <p>KA Delivery prend en charge l’ensemble de vos livraisons,de la prise en charge jusqu’à la porte du client.</p>
            <p>Ce service est conçu pour les entreprises qui souhaitent déléguer leur livraison<br>tout en conservant fiabilité, clarté et constance.</p>

            <h3>Ce que nous gérons pour vous</h3>
            <ul>
                <li>Coordination complète des livraisons</li>
                <li>Gestion des volumes, peu importe la taille</li>
                <li>Suivi clair et communication fluide</li>
                <li>Un seul point de contact</li>
            </ul>

            <h3>Une solution qui s’adapte à votre réalité</h3>
            <p>Que vos besoins soient ponctuels ou récurrents, nous adaptons notre organisation pour assurer une exécution fiable et constante.</p>

            <h3>Pour qui ?</h3>
            <ul>
                <li>PME et marques en croissance</li>
                <li>Entreprises souhaitant externaliser leur livraison</li>
                <li>Organisations cherchant une solution simple et structurée</li>
            </ul>
        `,
        service2Title: "Solutions D'Entreprises",
        service2Desc: "KA Delivery intervient en soutien opérationnel,lorsque vous avez besoin de livrer un colis, une commande ou un volume précis, sans mobiliser vos ressources internes.",
        service2Body: `
            <p>KA Delivery intervient en soutien opérationnel,lorsque vous avez besoin de livrer un colis, une commande ou un volume précis, sans mobiliser vos ressources internes.</p>
            <p>Ce service est conçu pour les entreprises<br>qui livrent déjà, mais ont besoin<br>d’un appui rapide et flexible.</p>

            <h3>Ce que nous faisons</h3>
            <ul>
                <li>Livraison ponctuelle du point A au point B</li>
                <li>Livraison urgente ou de dernière minute</li>
                <li>Transport de colis isolés</li>
                <li>Soutien temporaire à vos opérations</li>
            </ul>

            <h3>Pour qui ?</h3>
            <ul>
                <li>Commerces</li>
                <li>Entreprises avec livraisons occasionnelles</li>
                <li>Besoins urgents ou imprévus</li>
            </ul>
        `,
        service3Title: "Sous-Traitance",
        service3Desc: "KA Delivery accompagne les entreprises de logistique en tant que partenaire de sous-traitance terrain, capable de soutenir vos opérations au quotidien.",
        service3Body: `
            <p>KA Delivery accompagne les entreprises de logistique en tant que partenaire de sous-traitance terrain, capable de soutenir vos opérations au quotidien.</p>
            <p>Nous intervenons pour renforcer votre capacité,absorber des volumes et respecter vos standards.</p>

            <h3>Partenaires opérationnels</h3>
            <p>KA Delivery collabore avec des réseaux de livraison reconnus,dont Nationex, Intelcom et Obibox,afin d’assurer des opérations fiables, structurées<br>et conformes aux standards attendus.</p>

            <h3>Ce que nous prenons en charge</h3>
            <ul>
                <li>Renfort opérationnel terrain</li>
                <li>Gestion de volumes ponctuels ou récurrents</li>
                <li>Routes dédiées ou missions ciblées</li>
                <li>Respect des délais et des procédures</li>
            </ul>

            <h3>Une intégration simple à vos opérations</h3>
            <p>Nos équipes s’intègrent rapidement<br>à vos processus existants<br>pour assurer une exécution fluide et fiable.</p>

            <h3>Pour qui ?</h3>
            <ul>
                <li>Entreprises de logistique et de distribution</li>
                <li>Acteurs ayant des pics de volume</li>
                <li>Organisations nécessitant un renfort terrain</li>
            </ul>
        `,
        aboutTitle: "À Propos de KA Delivery",
        aboutP1: "KA Delivery est une entreprise de livraison spécialisée dans la livraison du dernier kilomètre, qui accompagne les entreprises, marques et acteurs logistiques dans leurs opérations de livraison.",
        aboutP2: "Nous intervenons à la fois comme partenaire de sous-traitance pour des entreprises de logistique établies, et comme solution de livraison clé en main pour des PME et marques en croissance.",
        aboutP3: "<strong>Notre approche est simple :</strong><br><strong>La livraison est la dernière impression que votre client garde de vous.</strong>",
        aboutP4: "C’est pourquoi nous misons sur la fiabilité, le respect des délais et une exécution constante, peu importe le volume.",
        aboutP5: "<strong>Dans une démarche responsable,</strong><br>KA Delivery opère avec une flotte 100 % électrique.",
        feature1Label: "Livraisons Quotidiennes",
        feature2Label: "Pays Desservis",
        feature3Label: "Taux de Ponctualité",
        contactTitle: "Contactez-Nous",
        contactCtaTitle: "Prêt à livrer à la hauteur de votre image ?",
        contactCtaText: "Parlons de vos besoins et voyons comment KA Delivery peut vous accompagner.",
        contactCtaButton: "Contactez Nous",
        preContactLine1: "Chaque livraison mérite la même attention.",
        preContactLine2: "Peu importe le volume ou le contexte.",
        homeScrollLine1: "Livrer c'est bien.",
        homeScrollLine2: "Connecter c'est mieux.",
        homeScrollLine3: "Chez KA Delivery, on fait les deux.",
        partnersTitle: "Nos partenaires",
        subcontractingPartnersTitle: "Partenaires opérationnels",
        contactAddress: "Adresse",
        contactEmail: "Courriel",
        contactPhone: "Téléphone",
        contactHours: "Heures d'Ouverture",
        contactHoursText: "7 jours sur 7 : 6 h 00 à 17 h 00",
        formName: "Nom",
        formEmail: "Courriel",
        formPhone: "Téléphone",
        formMessage: "Message",
        btnSendMessage: "Envoyer le Message",
        footerTagline: "Votre partenaire de livraison de confiance au Canada et en Europe.",
        footerQuickLinks: "Liens Rapides",
        footerServices: "Services",
        footerPackageDelivery: "Service Clé en Mains",
        footerBusinessSolutions: "Solutions D'Entreprises",
        footerSameDayDelivery: "Sous-Traitance",
        footerCopyright: "© 2024 KA Delivery. Tous droits réservés.",

        missionValuesTitle: "Mission & Valeurs",
        missionTitle: "Mission",
        missionBody: "<span class=\"mv-mission-lead\"><strong>Notre objectif est simple :</strong></span> offrir une livraison <strong>fiable</strong> et <strong>cohérente</strong>, pensée comme une extension de l’<strong>expérience client</strong>, afin d’aider les entreprises à <strong>protéger</strong> leur <strong>image</strong> jusqu’à la porte du client.",
        valuesTitle: "Valeurs",
        valuesBody: `
            <div class="values-grid">
                <div class="value">
                    <div class="value-title">Fiabilité</div>
                    <div class="value-text">Tenir nos engagements, respecter les délais et assurer une exécution constante, chaque jour.</div>
                </div>
                <div class="value">
                    <div class="value-title">Exigence</div>
                    <div class="value-text">Appliquer les mêmes standards de qualité<br>à chaque livraison, peu importe le volume ou le contexte.</div>
                </div>
                <div class="value">
                    <div class="value-title">Responsabilité</div>
                    <div class="value-text">Opérer de manière consciente, avec une flotte 100 % électrique,<br>et des pratiques adaptées aux réalités urbaines.</div>
                </div>
            </div>
        `,

        mapTitle: "Zones desservies",
        mapSubtitle: "Là où vos clients sont, nous livrons.",
        mapCityQuebec: "Ville de Québec",
        mapCityMontreal: "Montréal",
        mapCityOttawa: "Ottawa",
        mapCityAmsterdam: "Amsterdam",
        mapCityRotterdam: "Rotterdam",
        mapServiceAvailable: "Service disponible",
        mapFallback: "Impossible de charger la carte. Veuillez vérifier votre connexion internet."
    }
};

// Language management
let currentLang = localStorage.getItem('language') || 'en';

// Function to set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updateTranslations();
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// Function to update all translations
function updateTranslations() {
    const langData = translations[currentLang];
    
    // Update navigation
    document.querySelectorAll('[data-translate="navHome"]').forEach(el => el.textContent = langData.navHome);
    document.querySelectorAll('[data-translate="navServices"]').forEach(el => el.textContent = langData.navServices);
    document.querySelectorAll('[data-translate="navAbout"]').forEach(el => el.textContent = langData.navAbout);
    document.querySelectorAll('[data-translate="navContact"]').forEach(el => el.textContent = langData.navContact);
    
    // Update hero section
    // Note: hero title is handled by the typing effect in script.js (EN/FR), so we don't overwrite it here.
    document.querySelectorAll('[data-translate="heroSubtitle"]').forEach(el => el.innerHTML = langData.heroSubtitle);
    document.querySelectorAll('[data-translate="btnGetQuote"]').forEach(el => el.textContent = langData.btnGetQuote);
    document.querySelectorAll('[data-translate="btnOurServices"]').forEach(el => el.textContent = langData.btnOurServices);
    
    // Update services
    document.querySelectorAll('[data-translate="servicesTitle"]').forEach(el => el.textContent = langData.servicesTitle);
    document.querySelectorAll('[data-translate="servicesSubtitle"]').forEach(el => el.textContent = langData.servicesSubtitle);
    document.querySelectorAll('[data-translate="service1Title"]').forEach(el => el.textContent = langData.service1Title);
    document.querySelectorAll('[data-translate="service1Desc"]').forEach(el => el.textContent = langData.service1Desc);
    document.querySelectorAll('[data-translate="service1Body"]').forEach(el => el.innerHTML = langData.service1Body);
    document.querySelectorAll('[data-translate="service2Title"]').forEach(el => el.textContent = langData.service2Title);
    document.querySelectorAll('[data-translate="service2Desc"]').forEach(el => el.textContent = langData.service2Desc);
    document.querySelectorAll('[data-translate="service2Body"]').forEach(el => el.innerHTML = langData.service2Body);
    document.querySelectorAll('[data-translate="service3Title"]').forEach(el => el.textContent = langData.service3Title);
    document.querySelectorAll('[data-translate="service3Desc"]').forEach(el => el.textContent = langData.service3Desc);
    document.querySelectorAll('[data-translate="service3Body"]').forEach(el => el.innerHTML = langData.service3Body);

    // Mission & Values
    document.querySelectorAll('[data-translate="missionValuesTitle"]').forEach(el => el.textContent = langData.missionValuesTitle);
    document.querySelectorAll('[data-translate="missionTitle"]').forEach(el => el.textContent = langData.missionTitle);
    document.querySelectorAll('[data-translate="valuesTitle"]').forEach(el => el.textContent = langData.valuesTitle);
    document.querySelectorAll('[data-translate="missionBody"]').forEach(el => el.innerHTML = langData.missionBody);
    document.querySelectorAll('[data-translate="valuesBody"]').forEach(el => el.innerHTML = langData.valuesBody);
    document.querySelectorAll('[data-translate="service4Title"]').forEach(el => el.textContent = langData.service4Title);
    document.querySelectorAll('[data-translate="service4Desc"]').forEach(el => el.textContent = langData.service4Desc);
    document.querySelectorAll('[data-translate="service5Title"]').forEach(el => el.textContent = langData.service5Title);
    document.querySelectorAll('[data-translate="service5Desc"]').forEach(el => el.textContent = langData.service5Desc);
    document.querySelectorAll('[data-translate="service6Title"]').forEach(el => el.textContent = langData.service6Title);
    document.querySelectorAll('[data-translate="service6Desc"]').forEach(el => el.textContent = langData.service6Desc);
    
    // Update about section
    document.querySelectorAll('[data-translate="aboutTitle"]').forEach(el => el.textContent = langData.aboutTitle);
    document.querySelectorAll('[data-translate="aboutP1"]').forEach(el => el.textContent = langData.aboutP1);
    document.querySelectorAll('[data-translate="aboutP2"]').forEach(el => el.textContent = langData.aboutP2);
    document.querySelectorAll('[data-translate="aboutP3"]').forEach(el => el.innerHTML = langData.aboutP3);
    document.querySelectorAll('[data-translate="aboutP4"]').forEach(el => el.textContent = langData.aboutP4);
    document.querySelectorAll('[data-translate="aboutP5"]').forEach(el => el.innerHTML = langData.aboutP5);
    document.querySelectorAll('[data-translate="feature1Label"]').forEach(el => el.textContent = langData.feature1Label);
    document.querySelectorAll('[data-translate="feature2Label"]').forEach(el => el.textContent = langData.feature2Label);
    document.querySelectorAll('[data-translate="feature3Label"]').forEach(el => el.textContent = langData.feature3Label);
    
    // Update contact section
    document.querySelectorAll('[data-translate="contactTitle"]').forEach(el => el.textContent = langData.contactTitle);
    document.querySelectorAll('[data-translate="contactCtaTitle"]').forEach(el => el.textContent = langData.contactCtaTitle);
    document.querySelectorAll('[data-translate="contactCtaText"]').forEach(el => el.textContent = langData.contactCtaText);
    document.querySelectorAll('[data-translate="contactCtaButton"]').forEach(el => el.textContent = langData.contactCtaButton);
    document.querySelectorAll('[data-translate="preContactLine1"]').forEach(el => el.textContent = langData.preContactLine1);
    document.querySelectorAll('[data-translate="preContactLine2"]').forEach(el => el.textContent = langData.preContactLine2);
    document.querySelectorAll('[data-translate="homeScrollLine1"]').forEach(el => el.textContent = langData.homeScrollLine1);
    document.querySelectorAll('[data-translate="homeScrollLine2"]').forEach(el => el.textContent = langData.homeScrollLine2);
    document.querySelectorAll('[data-translate="homeScrollLine3"]').forEach(el => el.textContent = langData.homeScrollLine3);
    document.querySelectorAll('[data-translate="partnersTitle"]').forEach(el => el.textContent = langData.partnersTitle);
    document.querySelectorAll('[data-translate="subcontractingPartnersTitle"]').forEach(el => el.textContent = langData.subcontractingPartnersTitle);
    document.querySelectorAll('[data-translate="contactAddress"]').forEach(el => el.textContent = langData.contactAddress);
    document.querySelectorAll('[data-translate="contactEmail"]').forEach(el => el.textContent = langData.contactEmail);
    document.querySelectorAll('[data-translate="contactPhone"]').forEach(el => el.textContent = langData.contactPhone);
    document.querySelectorAll('[data-translate="contactHours"]').forEach(el => el.textContent = langData.contactHours);
    document.querySelectorAll('[data-translate="contactHoursText"]').forEach(el => el.innerHTML = langData.contactHoursText);
    document.querySelectorAll('[data-translate="formName"]').forEach(el => el.textContent = langData.formName);
    document.querySelectorAll('[data-translate="formEmail"]').forEach(el => el.textContent = langData.formEmail);
    document.querySelectorAll('[data-translate="formPhone"]').forEach(el => el.textContent = langData.formPhone);
    document.querySelectorAll('[data-translate="formMessage"]').forEach(el => el.textContent = langData.formMessage);
    document.querySelectorAll('[data-translate="btnSendMessage"]').forEach(el => el.textContent = langData.btnSendMessage);
    
    // Update footer
    document.querySelectorAll('[data-translate="footerTagline"]').forEach(el => el.textContent = langData.footerTagline);
    document.querySelectorAll('[data-translate="footerQuickLinks"]').forEach(el => el.textContent = langData.footerQuickLinks);
    document.querySelectorAll('[data-translate="footerServices"]').forEach(el => el.textContent = langData.footerServices);
    document.querySelectorAll('[data-translate="footerPackageDelivery"]').forEach(el => el.textContent = langData.footerPackageDelivery);
    document.querySelectorAll('[data-translate="footerExpressShipping"]').forEach(el => el.textContent = langData.footerExpressShipping);
    document.querySelectorAll('[data-translate="footerBusinessSolutions"]').forEach(el => el.textContent = langData.footerBusinessSolutions);
    document.querySelectorAll('[data-translate="footerSameDayDelivery"]').forEach(el => el.textContent = langData.footerSameDayDelivery);
    document.querySelectorAll('[data-translate="footerCopyright"]').forEach(el => el.textContent = langData.footerCopyright);

    // Update map section
    document.querySelectorAll('[data-translate="mapTitle"]').forEach(el => el.textContent = langData.mapTitle);
    document.querySelectorAll('[data-translate="mapSubtitle"]').forEach(el => el.textContent = langData.mapSubtitle);
    
    // Update language button (show target language, not current)
    const nextLang = currentLang === 'en' ? 'fr' : 'en';
    document.getElementById('currentLang').textContent = nextLang.toUpperCase();
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    
    // Language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'fr' : 'en';
            setLanguage(newLang);
        });
    }
});

