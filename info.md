[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration) 
[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

# Midcentury Icons

A curated collection of midcentury modern furniture and design icons for Home Assistant.

## Installation

1. Open **HACS**
2. Click 3 dots (⋮) → **Custom repositories**
3. Add: `https://github.com/tjd-dev/midcentury-icons`
4. Category: **Dashboard**
5. Click **Add**, then download "Midcentury Icons"
6. **Restart Home Assistant**
7. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

## Usage

Use icons with the `mci:` prefix:

```yaml
entities:
  - entity: light.living_room
    icon: mci:arco-lamp
    name: Arco Floor Lamp
type: entities
```

## Available Icons

| Icon | Name |
|------|------|
| arco-lamp | `mci:arco-lamp` |

See full list on [GitHub](https://github.com/tjd-dev/midcentury-icons).
