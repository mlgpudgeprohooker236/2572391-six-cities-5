import { Icon } from 'leaflet';
import { MapSettings } from '../../const';

const defaultCustomIcon = new Icon({
  iconUrl: MapSettings.UrlMarkerDefault,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: MapSettings.UrlMarkerCurrent,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

export { defaultCustomIcon, currentCustomIcon };
