import { useState } from 'react';
import { SortingOption } from '../../types/sorting-option';

type SortingOptionsProps = {
  currentSortingOption: SortingOption;
  onSortingChange: (option: SortingOption) => void;
}

export default function SortingOptions({ currentSortingOption, onSortingChange }: SortingOptionsProps): JSX.Element {
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false);

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onMouseEnter={() => setOptionsVisible(true)}
      onMouseLeave={() => setOptionsVisible(false)}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSortingOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${optionsVisible ? 'places__options--opened' : ''}`}>
        {
          Object.entries(SortingOption).map(([, option]) => (
            <li
              className={`places__option ${currentSortingOption === option ? 'places__option--active' : ''}`}
              tabIndex={0}
              key={option}
              onClick={() => {
                onSortingChange(option);
                setOptionsVisible(false);
              }}
            >
              {option}
            </li>
          ))
        }
      </ul>
    </form>
  );
}
