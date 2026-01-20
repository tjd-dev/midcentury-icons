/*! Midcentury Icons v1.0.0 | (c) Tim Dolan | CC BY-NC-SA 4.0 */

const ICONS = {
  "arco-lamp": "M10.289 0.943C5.881 1.316 2.269 4.884 1.784 9.338C1.751 9.636 1.734 12.088 1.734 16.452L1.734 23.110 3.621 23.098L5.508 23.086 5.520 19.535L5.531 15.984 3.841 15.984L2.151 15.984 2.170 12.621C2.191 9.099 2.190 9.121 2.409 8.203C2.971 5.847 4.553 3.757 6.714 2.518C10.918 0.107 16.262 1.481 18.822 5.633L19.028 5.967 18.690 6.081C17.310 6.546 16.547 7.960 16.913 9.375L16.992 9.680 19.528 9.692L22.063 9.704 22.114 9.528C22.622 7.791 21.396 5.953 19.730 5.953L19.512 5.953 19.249 5.514C17.379 2.379 13.952 0.631 10.289 0.943M20.520 6.590C21.472 7.048 22.095 8.355 21.768 9.207C21.743 9.273 21.503 9.281 19.524 9.281L17.309 9.281 17.279 9.135C16.907 7.276 18.821 5.773 20.520 6.590M5.109 19.547L5.109 22.688 3.633 22.688L2.156 22.688 2.156 19.547L2.156 16.406 3.633 16.406L5.109 16.406 5.109 19.547M3.707 17.608C3.482 17.894 3.664 18.248 4.022 18.225C4.539 18.191 4.506 17.484 3.988 17.484C3.845 17.484 3.782 17.512 3.707 17.608"
};

// Icon getter function for Home Assistant
async function getIcon(name) {
  if (!(name in ICONS)) {
    console.warn(`Midcentury Icons: Unknown icon mci:${name}`);
    return null;
  }

  return {
    path: ICONS[name],
    viewBox: "0 0 24 24"
  };
}

// Get list of all available icons (for icon picker support)
async function getIconList() {
  return Object.keys(ICONS).map(icon => ({
    name: icon
  }));
}

// Register the iconset with Home Assistant
window.customIconsets = window.customIconsets || {};
window.customIconsets["mci"] = getIcon;

// Register icon list for icon picker (if supported)
if (window.customIcons) {
  window.customIcons = window.customIcons || {};
  window.customIcons["mci"] = { getIcon, getIconList };
}

// Dispatch event to notify Home Assistant that icons are loaded
window.dispatchEvent(new CustomEvent("iconset-loaded", { detail: "mci" }));

// Log successful load
console.info(
  `%c MIDCENTURY-ICONS %c v1.0.0 loaded with ${Object.keys(ICONS).length} icons `,
  "color: white; background: #44739e; font-weight: 700;",
  "color: #44739e; background: white; font-weight: 700;"
);
