[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/timothydolan/midcentury-icons)](https://github.com/timothydolan/midcentury-icons/releases/latest)
[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]
![GitHub file size in bytes](https://img.shields.io/github/size/timothydolan/midcentury-icons/dist/midcentury-icons.js?label=plugin%20size)
![GitHub last commit](https://img.shields.io/github/last-commit/timothydolan/midcentury-icons)

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

# Midcentury Icons

A curated collection of midcentury modern design icons for Home Assistant

#### Midcentury icons use the prefix `mci:`
#### Append Name (of the icon) after `mci:`
- Example: `mci:arco-lamp` ![Preview](/icon-svg/arco-lamp.svg)

# Icon Requests

Want an icon? Open an [icon request](https://github.com/timothydolan/midcentury-icons/issues/new) or contribute to the project.
-  Provide a **svg file** of your request along with the name of the icon.
-  For those who made their own icons, open pull requests on the **[main branch](https://github.com/timothydolan/midcentury-icons/pulls)**.

### Make sure to install `midcentury-icons.js` into `configuration.yaml` or `ui-lovelace.yaml`

## Available Icons

To view all the available icons you can browse the icon-svg directory.

# Installation Methods

#### HACS

We recommend installing Midcentury Icons via [Home Assistant Community Store](https://hacs.xyz)

After installing through HACS:
1. Add the following lines to your `configuration.yaml`

    ```yaml
    frontend:
      extra_module_url:
        - /local/community/midcentury-icons/midcentury-icons.js
    ```

2. (Optional) YAML mode users. Add the following to your lovelace configuration using the Raw Config editor under Configure UI or ui-lovelace.yaml.

    ```yaml
    resources:
      - type: js
        url: /local/community/midcentury-icons/midcentury-icons.js
    ```

#### Manual Installation

To add custom repositories please follow [this guide](https://hacs.xyz/docs/faq/custom_repositories/). Set URL to `https://github.com/timothydolan/midcentury-icons` and category to `Lovelace`.

1. Download `midcentury-icons.js` file from the [latest release](/releases/latest).
2. Copy the `midcentury-icons.js` file into `<config>/www/` the directory where your `configuration.yaml` resides.

3. Add the following to the `frontend` section of your `configuration.yaml`

    ```yaml
    frontend:
      extra_module_url:
        - /local/midcentury-icons.js
    ```

4. (Optional) YAML mode users. Add the following to your lovelace configuration using the Raw Config editor under Configure UI or ui-lovelace.yaml.

    ```yaml
    resources:
      - type: js
        url: /local/midcentury-icons.js
    ```

5. Restart Home Assistant.

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

### Cache issue HomeAssistant 2024.1.1

Some addons (including official) have had some cache issues since 2024.1.1, here are a few work arounds to try

1. first go to settings, dashboard and 3 dots click resources, add resource

    ```yaml
    /hacsfiles/midcentury-icons/midcentury-icons.js?hacstag=366862031202420
    ```

2. Add this second resource too
    ```yaml
    /local/community/midcentury-icons/midcentury-icons.js
    ```


#### Hard Reload (browser cache issue)
- Reload browser by holding CTRL and pressing F5.
- For Mac, hold ⌘ CMD and ⇧ SHIFT, then press R.

#### Redownload Integration
1. From left sidebar, select on *HACS*.
2. Select on *Integrations*.
3. From the top header bar (Integrations, Frontend), select *Frontend*.
4. Search *midcentury-icons* on the search bar.
5. Select *Midcentury Icons*.
6. From the top right, select the 3 vertical dots which opens a dropdown menu.
7. Select *Redownload*.
8. **Hard reload** browser.

#### Reinstall Integration
1. Open the dropdown menu from **Step 6** of **Redownload Integration**.
2. Select *Remove*, then select *Remove* again on the popup.
3. This should bring you back to /hacs/frontend
4. From the top right, select the 3 vertical dots which opens a dropdown menu.
5. Select on *Custom repositories*.
6. Find *Midcentury Icons* and select it.
7. On the bottom right, select the big blue *Download* icon.
8. **Hard reload** browser.

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

(Optional) In case you want to create your own prefix you can edit the last line of the `midcentury-icons.js`

```js
window.customIconsets["yourprefix"] = getIcon;
```

### Contributions and Pull Requests
After adding your svg icon in `icon-svg`, modifying `midcentury-icons.js`, and updating `README.md.`
Open pull requests on the **[main branch](https://github.com/timothydolan/midcentury-icons/pulls)**.
