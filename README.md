[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/tjd-dev/midcentury-icons)](https://github.com/tjd-dev/midcentury-icons/releases/latest)
[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]
![GitHub file size in bytes](https://img.shields.io/github/size/tjd-dev/midcentury-icons/dist/midcentury-icons.js?label=plugin%20size)
![GitHub last commit](https://img.shields.io/github/last-commit/tjd-dev/midcentury-icons)

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

# Midcentury Icons

A curated collection of midcentury modern design icons for Home Assistant

#### Midcentury icons use the prefix `mci:`
#### Append Name (of the icon) after `mci:`
- Example: `mci:arco-lamp` ![Preview](/icon-svg/arco-lamp.svg)

# Icon Requests

Want an icon? Open an [icon request](https://github.com/tjd-dev/midcentury-icons/issues/new) or contribute to the project.
-  Provide a **svg file** of your request along with the name of the icon.
-  For those who made their own icons, open pull requests on the **[main branch](https://github.com/tjd-dev/midcentury-icons/pulls)**.

## Available Icons

To view all the available icons you can browse the icon-svg directory.

# Installation Methods

#### HACS (Recommended)

1. Go to HACS → Integrations
2. Click the 3 dots menu → Custom repositories  
3. Add repository: `https://github.com/tjd-dev/midcentury-icons`
4. Category: **Integration**
5. Click Add and install the integration
6. Restart Home Assistant

**No additional configuration needed!** The integration automatically registers the icons.

#### Manual Installation

1. Download this repository
2. Copy the entire `midcentury_icons` folder to your `config/custom_components/` directory
3. Restart Home Assistant

---

# User Manual

#### Midcentury icons use the prefix `mci:`
#### Append Name (of the icon) after `mci:`
- Example: `mci:arco-lamp` ![Preview](/icon-svg/arco-lamp.svg)

Example of midcentury icons in a lovelace card:

```yaml
entities:
  - entity: light.arco_lamp
    icon: 'mci:arco-lamp'
    name: Arco Floor Lamp
show_header_toggle: false
title: Midcentury Icons
type: entities
```

---

# Don't see the icon?

### Clear Cache
- Hard reload browser by holding CTRL and pressing F5
- For Mac, hold ⌘ CMD and ⇧ SHIFT, then press R

### Check Integration
1. Go to Settings → Devices & Services
2. Look for "Midcentury Icons" in the integrations list
3. If not there, restart Home Assistant

### Redownload Integration
1. From HACS → Integrations
2. Find "Midcentury Icons"
3. Click the 3 dots → Redownload
4. Restart Home Assistant

---

# Developer Workflow

### Make your own `svg` icon

- To make an icon in svg format you can use different programs starting from illustrator, inkview, or [Inkscape](https://inkscape.org/).
- Verify `svg` icons are set properly by using text editor of your choice ([Notepad++](https://notepad-plus-plus.org/), Notepad, or Visual Studio Code).
- The size of the icons must be **24px by 24px**.
- The `svg` code must contain **viewbox**. No transform, translate, or scale.
- Make sure to add color: **#44739e**. Every midcentury icon uses this color.
- Once done, add the svg file in the folder `icon-svg` found in the root of the repo.

Example svg file below:

```svg
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<!-- path d="..." is unique for each icon -->

<svg
   width="24"
   height="24"
   viewBox="0 0 24 24"
   version="1.1"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
   <path
     style="fill:#44739e"
     d="..."
    \>
  </svg>
```

### Modify `midcentury-icons.js` file

Add the following entry to the `var icons` variable (list) of the `midcentury-icons.js` file

Example entry:

```js
"arco-lamp": [0, 0, 24.0, 24.0, "string"]
```

- `arco-lamp` = svg icon name used for `mci:`
- `0, 0, 24.0, 24.0` = this data can be recovered from the svg file `viewBox="0 0 24 24"`
  -  ***If this data is not present, you can leave the one indicated by me.***
- `string` = this data can be recovered from the svg file `<path d="M21,12.5 C21,13.33 18.76,...."` In particular you will have to enter only the part of the vector code `"M21,12.5 C21,13.33 18.76"`. 
  - For an example, take a look at the icons already inserted.

### Contributions and Pull Requests
After adding your svg icon in `icon-svg`, modifying `midcentury-icons.js`, and updating `README.md.`
Open pull requests on the **[main branch](https://github.com/tjd-dev/midcentury-icons/pulls)**.
