import { FC, ReactNode, useState, useRef } from 'react';
import useOnClickOutside from './useOnClickOutside';
import { SelectContext } from './select-context';
import { Icon } from '..';
import cn from 'classnames';

import type { OptionType } from './select-context';

export const Select: FC<{
  children: ReactNode | ReactNode[];
  defaultOption?: OptionType;
  placeholder?: string;
}> = ({ children, defaultValue, placeholder = 'Choose an option' }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [showDropdown, setShowDropdown] = useState(false);

  const showDropdownHandler = () => setShowDropdown(!showDropdown);

  const selectContainerRef = useRef(null);

  const clickOutsideHandler = () => setShowDropdown(false);

  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const updateSelectedOption = (option: OptionType) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <SelectContext.Provider
      value={{ selectedOption, changeSelectedOption: updateSelectedOption }}
    >
      <div className="select-container" ref={selectContainerRef}>
        <div
          className="p-3 text-default-text bg-default-background shadow-inner w-full flex"
          onClick={showDropdownHandler}
        >
          <div className="flex-grow">
            {selectedOption ? selectedOption.label : placeholder}
          </div>
          <div className="full-current h-4">
            <Icon name={showDropdown ? 'chevron-up' : 'chevron-down'} />
          </div>
        </div>
        <ul
          className={cn('list-reset', 'bg-default-background', {
            hidden: !showDropdown,
          })}
        >
          {children}
        </ul>
      </div>
    </SelectContext.Provider>
  );
};
