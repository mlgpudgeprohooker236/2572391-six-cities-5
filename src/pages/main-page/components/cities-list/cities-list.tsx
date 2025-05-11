import { Link } from 'react-router-dom';
import { City } from '../../../../types/city';

type CitiesListProps = {
  cities: City[];
  selectedCity: City;
  onSelectChange: (city: City) => void;
}

export default function CitiesList({ cities, selectedCity, onSelectChange }: CitiesListProps): JSX.Element {
  return (
    <section className="locations container" >
      <ul className="locations__list tabs__list">
        {
          cities.map((city) => (
            <li className="locations__item" key={city.name}>
              <Link
                className={`locations__item-link tabs__item ${city === selectedCity ? 'tabs__item--active' : ''}`}
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectChange(city);
                }}
              >
                <span>{city.name}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
