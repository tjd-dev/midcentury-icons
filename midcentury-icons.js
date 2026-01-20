/*! Midcentury Icons v1.0.0 | (c) Tim Dolan | CC BY-NC-SA 4.0 */

const ICONS = {
  "arco-lamp": {
    path: "M10.289 0.943C5.881 1.316 2.269 4.884 1.784 9.338C1.751 9.636 1.734 12.088 1.734 16.452L1.734 23.110 3.621 23.098L5.508 23.086 5.520 19.535L5.531 15.984 3.841 15.984L2.151 15.984 2.170 12.621C2.191 9.099 2.190 9.121 2.409 8.203C2.971 5.847 4.553 3.757 6.714 2.518C10.918 0.107 16.262 1.481 18.822 5.633L19.028 5.967 18.690 6.081C17.310 6.546 16.547 7.960 16.913 9.375L16.992 9.680 19.528 9.692L22.063 9.704 22.114 9.528C22.622 7.791 21.396 5.953 19.730 5.953L19.512 5.953 19.249 5.514C17.379 2.379 13.952 0.631 10.289 0.943M20.520 6.590C21.472 7.048 22.095 8.355 21.768 9.207C21.743 9.273 21.503 9.281 19.524 9.281L17.309 9.281 17.279 9.135C16.907 7.276 18.821 5.773 20.520 6.590M5.109 19.547L5.109 22.688 3.633 22.688L2.156 22.688 2.156 19.547L2.156 16.406 3.633 16.406L5.109 16.406 5.109 19.547M3.707 17.608C3.482 17.894 3.664 18.248 4.022 18.225C4.539 18.191 4.506 17.484 3.988 17.484C3.845 17.484 3.782 17.512 3.707 17.608"
  },
  "nesso-lamp": {
    path: "M801.767 474.898C651.072 474.898 653.396 474.644 500.036 473.666C507.011 542.331 508.655 612.961 520.846 680.894C523.408 695.167 531.812 709.485 543.548 718.002C555.007 726.318 571.16 724.285 584.966 727.426C584.966 742.427 584.966 742.427 584.966 757.428C498.187 757.893 411.406 756.848 324.627 756.339C324.627 742.317 324.627 742.317 324.627 728.294C337.522 726.16 352.852 729.729 363.313 721.892C378.183 710.752 391.068 694.04 394.681 675.814C407.753 609.869 409.329 542.161 412.274 474.644C258.418 474.644 259.51 474.898 105.244 474.898C111.703 439.169 107.993 384.457 124.621 352.181C141.276 319.852 169.291 292.289 200.733 274.015C231.482 256.145 268.868 252.187 304.166 247.834C365.534 240.265 427.595 237.972 489.427 238.41C538.981 238.761 589.138 239.963 637.625 250.197C671.354 257.316 705.206 269.646 733.138 289.849C757.989 307.823 779.069 333.068 791.166 361.251C804.222 391.669 796.843 442.164 801.767 474.898Z",
    viewBox: "0 0 1024 1024"
  }
};

// Default viewBox for icons that don't specify one
const DEFAULT_VIEWBOX = "0 0 24 24";

// Icon getter function for Home Assistant
async function getIcon(name) {
  if (!(name in ICONS)) {
    console.warn(`Midcentury Icons: Unknown icon mci:${name}`);
    return null;
  }

  const icon = ICONS[name];
  
  // Support both old format (string) and new format (object with path/viewBox)
  if (typeof icon === "string") {
    return {
      path: icon,
      viewBox: DEFAULT_VIEWBOX
    };
  }

  return {
    path: icon.path,
    viewBox: icon.viewBox || DEFAULT_VIEWBOX
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
