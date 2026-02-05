# Assets Folder Structure

This folder contains all assets used in the KA Delivery website.

## Folder Structure

### `public/`
Public assets that are directly referenced in the website and accessible to users.
- **ka-delivery-navbar.svg** - Company logo used in navigation
- **logo-light.svg** - Company logo used in footer (light variant)
- **k.svg** - Favicon used across the website
- **images/** - Public website images (jpg/png/svg/webp, etc.)
- **video/** - Public website videos (e.g., `.webm` hero/background video)

### `private/`
Private assets for internal use, build processes, or assets not directly served to users.
- Use this folder for source files, development assets, or assets that require processing before being used
- **images/** - Source/editing image files (raw exports, design files)
- **video/** - Source/editing video files (raw exports, project files, high-bitrate masters)

## Adding New Assets

- **Images for the website** (photos, icons, graphics): Place in `public/`
- **Source files, raw assets, or development-only files**: Place in `private/`
- Always use relative paths when referencing assets in HTML/CSS (e.g., `assets/public/ka-delivery-navbar.svg`)

