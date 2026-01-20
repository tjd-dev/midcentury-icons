# Midcentury Icons

A curated collection of midcentury modern furniture and design icons for Home Assistant.

## Usage

Midcentury icons use the prefix `mci:`

| Icon | Usage |
|------|-------|
| ![arco-lamp](/icon-svg/arco-lamp.svg) | `mci:arco-lamp` |
| ![ceiling-globe](/icon-svg/ceiling-globe.svg) | `mci:ceiling-globe` ⚡ |
| ![nelson-saucer](/icon-svg/nelson-saucer.svg) | `mci:nelson-saucer` |
| ![nesso-lamp](/icon-svg/nesso-lamp.svg) | `mci:nesso-lamp` |

⚡ = Dual-color icon (globe animates with light state)

---

# Installation

## HACS (Recommended)

1. Open HACS in Home Assistant
2. Click the 3 dots menu (⋮) → **Custom repositories**
3. Add this repository URL: `https://github.com/tjd-dev/midcentury-icons`
4. Select category: **Dashboard**
6. Click **Add**
7. Find "Midcentury Icons" in the list and click **Download**
8. **Restart Home Assistant**
9. Clear your browser cache (Ctrl+F5 or Cmd+Shift+R on Mac)

## Manual Installation

1. Download `midcentury-icons.js` from this repository
2. Copy it to your `config/www/` directory
3. Add the resource in Home Assistant:
   - Go to **Settings** → **Dashboards** → **Resources** (3 dots menu)
   - Click **Add Resource**
   - URL: `/local/midcentury-icons.js`
   - Resource type: **JavaScript Module**
4. Restart Home Assistant
5. Clear your browser cache

---

# Using the Icons

Once installed, use icons with the `mci:` prefix in any icon field:

```yaml
# Example entity card
type: entities
entities:
  - entity: light.living_room
    icon: mci:arco-lamp
    name: Arco Floor Lamp
```

```yaml
# Example button card
type: button
entity: light.living_room
icon: mci:arco-lamp
name: Arco Lamp
```

---

# Available Icons

Browse the `icon-svg/` directory to see all available icons.

| Icon | Name |
|------|------|
| ![arco-lamp](/icon-svg/arco-lamp.svg) | `arco-lamp` |
| ![ceiling-globe](/icon-svg/ceiling-globe.svg) | `ceiling-globe` ⚡ |
| ![nelson-saucer](/icon-svg/nelson-saucer.svg) | `nelson-saucer` |
| ![nesso-lamp](/icon-svg/nesso-lamp.svg) | `nesso-lamp` |

⚡ = Dual-color icon (globe animates with light state)
---

# Troubleshooting

## Icons not showing?

### 1. Clear Browser Cache
- **Windows/Linux:** Hold `Ctrl` and press `F5`
- **Mac:** Hold `⌘ Cmd` + `⇧ Shift` and press `R`

### 2. Check Resource is Loaded
1. Open browser Developer Tools (F12)
2. Go to **Console** tab
3. Look for: `MIDCENTURY-ICONS v1.0.0 loaded`
4. If not present, the resource isn't loading

### 3. Verify HACS Installation
1. Go to **HACS** → **Frontend**
2. Confirm "Midcentury Icons" is listed
3. If not, reinstall via HACS

### 4. Check Lovelace Resources
1. Go to **Settings** → **Dashboards**
2. Click 3 dots (⋮) → **Resources**
3. Verify the midcentury-icons.js resource exists
4. If using HACS, the resource path is: `/hacsfiles/midcentury-icons/midcentury-icons.js`

---

# Contributing

## Creating a New Icon

### 1. Create the SVG file

- Use [Inkscape](https://inkscape.org/), Illustrator, or similar
- Canvas size: **24px × 24px**
- ViewBox: `0 0 24 24`
- Single path with `fill="currentColor"` (allows Home Assistant theming)
- No transforms, translates, or scales

Example SVG structure:

```svg
<?xml version="1.0" encoding="UTF-8"?>
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M..." fill="currentColor"/>
</svg>
```

### 2. Add icon to the repository

1. Save your SVG to `icon-svg/your-icon-name.svg`
2. Extract the path `d` attribute from your SVG
3. Add the icon to `midcentury-icons.js`:

```javascript
const ICONS = {
  "arco-lamp": "M10.289...",
  "your-icon-name": "M..."  // Add your path here
};
```

### 3. Submit a Pull Request

Open a PR on the [main branch](https://github.com/tjd-dev/midcentury-icons/pulls) with:
- The new SVG file
- Updated `midcentury-icons.js`
- Updated README icon table

---

# License

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]
