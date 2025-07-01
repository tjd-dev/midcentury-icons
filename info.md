[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs) 
[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]
[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
# Midcentury Icons
A curated collection of midcentury modern design icons for Home Assistant

# Install

 1. Add the following to the `frontend` section of your `configuration.yaml`

  ```yaml
frontend:
  extra_module_url:
    - /local/community/midcentury-icons/midcentury-icons.js
```
2. (optional) Or add the following to your lovelace configuration using the Raw Config editor under Configure UI or ui-lovelace.yaml if using YAML mode.

```yaml
resources:
  - type: js
    url:  /local/community/midcentury-icons/midcentury-icons.js
```

# Use
you can use icons by entering the prefix `mci:`

Example of integration in the card

```yaml
entities:
  - entity: light.arco_lamp
    icon: 'mci:arco-lamp'
    name: Arco Floor Lamp
show_header_toggle: false
title: Midcentury Icons
type: entities
```

A system restart is required after this step

# Icons Available
See the full list on [Github](https://github.com/timothydolan/midcentury-icons#icons-available).
