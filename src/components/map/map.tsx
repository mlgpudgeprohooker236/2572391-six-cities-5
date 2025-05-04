import { useRef, useEffect } from 'react';
import { Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { defaultCustomIcon, currentCustomIcon } from './icons';
import 'leaflet/dist/leaflet.css';
import { City } from '../../types/city';
import { Point, Points } from '../../types/point';

type MapProps = {
  className: string;
  city: City;
  points: Points;
  selectedPoint?: Point;
};

export default function Map(props: MapProps) {
  const { className, city, points, selectedPoint } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

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
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return (<section className={`${className}__map map`} ref={mapRef} />);
}
