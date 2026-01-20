# Contributing to Midcentury Icons

Thank you for your interest in contributing to Midcentury Icons!

## Adding a New Icon

### 1. Create the SVG File

Use [Inkscape](https://inkscape.org/), Illustrator, or your preferred vector editor.

**Requirements:**
- Canvas size: **24px × 24px**
- ViewBox: `0 0 24 24`
- Single `<path>` element with `fill="currentColor"`
- No transforms, translates, or scales
- File name: lowercase with hyphens (e.g., `eames-chair.svg`)

**Example SVG:**

```svg
<?xml version="1.0" encoding="UTF-8"?>
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.5 2L5..." fill="currentColor"/>
</svg>
```

### 2. Add the SVG to the Repository

Save your SVG file to the `icon-svg/` directory:

```
icon-svg/your-icon-name.svg
```

### 3. Update `midcentury-icons.js`

Extract the path `d` attribute from your SVG and add it to the `ICONS` object:

```javascript
const ICONS = {
  "arco-lamp": "M10.289...",
  "your-icon-name": "M..."  // Add your path data here
};
```

### 4. Update the README

Add your icon to the "Available Icons" table in `README.md`.

### 5. Submit a Pull Request

Open a pull request on the **[main branch](https://github.com/tjd-dev/midcentury-icons/pulls)** with:
- The new SVG file in `icon-svg/`
- Updated `midcentury-icons.js`
- Updated `README.md` icon table

## Icon Guidelines

Midcentury Icons focuses on **midcentury modern furniture and design**:
- Iconic furniture pieces (Eames, Saarinen, Bertoia, etc.)
- Lighting (Arco lamp, Nelson bubble lamps, etc.)
- Architectural elements
- Design objects from the 1940s-1960s era

## Questions?

Open an [issue](https://github.com/tjd-dev/midcentury-icons/issues) if you have questions or need help!
