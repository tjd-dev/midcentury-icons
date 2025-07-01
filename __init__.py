"""Midcentury Icons integration."""
import logging
import os
from homeassistant.core import HomeAssistant
from homeassistant.config_entries import ConfigEntry
from homeassistant.helpers.typing import ConfigType
from homeassistant.components.frontend import add_extra_js_url

_LOGGER = logging.getLogger(__name__)

DOMAIN = "midcentury_icons"

async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Set up Midcentury Icons component."""
    
    # Register the static path for the icon files
    icons_dir = os.path.join(os.path.dirname(__file__), "dist")
    
    hass.http.register_static_path(
        "/local/community/midcentury-icons",
        icons_dir,
        cache_headers=False,
    )
    
    # Add the JavaScript module to frontend
    add_extra_js_url(hass, "/local/community/midcentury-icons/midcentury-icons.js")
    
    _LOGGER.info("Midcentury Icons integration loaded and JavaScript registered")
    return True

async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Midcentury Icons from a config entry."""
    return True

async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    return True 