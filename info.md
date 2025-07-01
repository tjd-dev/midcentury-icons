[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs) 
[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]
[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
# Midcentury Icons
A curated collection of midcentury modern design icons for Home Assistant

# Install

Install through HACS as a custom integration. No additional configuration needed!

1. Go to HACS → Integrations
2. Click the 3 dots menu → Custom repositories
3. Add repository: `https://github.com/tjd-dev/midcentury-icons`
4. Category: Integration
5. Install the integration
6. Restart Home Assistant

# Use
You can use icons by entering the prefix `mci:`

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

No manual configuration.yaml setup required - the integration handles everything automatically!

# Icons Available
See the full list on [Github](https://github.com/tjd-dev/midcentury-icons#icons-available).
