import { Icon } from 'leaflet';
import { MapSettings } from '../../const';

const defaultCustomIcon = new Icon({
  iconUrl: MapSettings.UrlMarkerDefault,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: MapSettings.UrlMarkerCurrent,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export { defaultCustomIcon, currentCustomIcon };
