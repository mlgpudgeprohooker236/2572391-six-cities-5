import { useRef, useEffect } from 'react';
import { Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { defaultCustomIcon, currentCustomIcon } from './icons';
import 'leaflet/dist/leaflet.css';
import { Points } from '../../types/point';
import { Location } from '../../types/location';

type MapProps = {
  className: string;
  cityLocation: Location;
  points: Points;
  selectedPointId?: string | null;
};

export default function Map(props: MapProps) {
  const { className, cityLocation, points, selectedPointId } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });
        marker
          .setIcon(
            selectedPointId !== null && point.id === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPointId]);

  return (<section className={`${className}__map map`} ref={mapRef} />);
}
