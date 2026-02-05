# KA Delivery Website

A modern, responsive website for KA Delivery, a delivery company based in Canada.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Sections Included**:
  - Hero section with call-to-action buttons
  - Services showcase
  - About section with company information
  - Contact form and information
  - Footer with quick links

## Getting Started

Simply open `index.html` in your web browser to view the website. No build process or dependencies required!

## File Structure

```
Site Chris/
├── index.html      # Main HTML file
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Customization

### Colors
Edit the CSS variables in `styles.css` to change the color scheme:
```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    --secondary-color: #10b981;
    /* ... */
}
```

### Content
- Edit text content directly in `index.html`
- Update contact information in the contact section
- Modify service descriptions as needed

### Contact Form
The contact form currently shows an alert on submission. To connect it to a backend:
1. Set up a server endpoint to handle form submissions
2. Update the form submission handler in `script.js`
3. Add proper error handling and success messaging

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 KA Delivery. All rights reserved.

