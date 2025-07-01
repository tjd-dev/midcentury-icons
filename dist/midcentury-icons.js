const icons = {
  "arco-lamp": "M10.289 0.943 C 5.881 1.316,2.269 4.884,1.784 9.338 C 1.751 9.636,1.734 12.088,1.734 16.452 L 1.734 23.110 3.621 23.098 L 5.508 23.086 5.520 19.535 L 5.531 15.984 3.841 15.984 L 2.151 15.984 2.170 12.621 C 2.191 9.099,2.190 9.121,2.409 8.203 C 2.971 5.847,4.553 3.757,6.714 2.518 C 10.918 0.107,16.262 1.481,18.822 5.633 L 19.028 5.967 18.690 6.081 C 17.310 6.546,16.547 7.960,16.913 9.375 L 16.992 9.680 19.528 9.692 L 22.063 9.704 22.114 9.528 C 22.622 7.791,21.396 5.953,19.730 5.953 L 19.512 5.953 19.249 5.514 C 17.379 2.379,13.952 0.631,10.289 0.943 M20.520 6.590 C 21.472 7.048,22.095 8.355,21.768 9.207 C 21.743 9.273,21.503 9.281,19.524 9.281 L 17.309 9.281 17.279 9.135 C 16.907 7.276,18.821 5.773,20.520 6.590 M5.109 19.547 L 5.109 22.688 3.633 22.688 L 2.156 22.688 2.156 19.547 L 2.156 16.406 3.633 16.406 L 5.109 16.406 5.109 19.547 M3.707 17.608 C 3.482 17.894,3.664 18.248,4.022 18.225 C 4.539 18.191,4.506 17.484,3.988 17.484 C 3.845 17.484,3.782 17.512,3.707 17.608"
};

function getIcon(name) {
  if (name in icons) {
    const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgIcon.setAttribute("viewBox", "0 0 24 24");
    svgIcon.innerHTML = `<path d="${icons[name]}"/>`;
    return Promise.resolve(svgIcon);
  }
  return Promise.resolve(null);
}

// Register with Home Assistant's icon system
if (!window.customIconsets) {
  window.customIconsets = {};
}
window.customIconsets["mci"] = getIcon;

// Also try the alternative registration method
if (window.customElements && window.customElements.get('ha-icon')) {
  console.log('Midcentury Icons: Registering with HA icon system');
  
  // Wait for HA to be ready then register icons
  const registerIcons = () => {
    if (window.customIconsets) {
      window.customIconsets["mci"] = getIcon;
      console.log('Midcentury Icons: Successfully registered mci: iconset');
    } else {
      setTimeout(registerIcons, 100);
    }
  };
  
  registerIcons();
} 