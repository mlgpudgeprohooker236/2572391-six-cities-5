import { useRef, useEffect } from 'react';
import { Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { defaultCustomIcon, currentCustomIcon } from './icons';
import 'leaflet/dist/leaflet.css';
import { City } from '../../types/city';
import { Point, Points } from '../../types/point';

type MapProps = {
  city: City;
  points: Points;
  selectedPoint: Point | undefined;
};

export default function Map(props: MapProps) {
  const { city, points, selectedPoint } = props;
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
            selectedPoint !== undefined && point.title === selectedPoint.title
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

  return (<section className="cities__map map" ref={mapRef} />);
}
