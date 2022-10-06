import React from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '../helper/classNames';
import Dropdown from './dropdown';
import InputIcon from './inputWithRightIcon';

function DropdownAndInput({ width, item, setState, state }) {
  let { cities } = useSelector((store) => store.InitReducer);

  return (
    <div
      className={classNames(
        'flex flex-row justify-between',
        width ? 'w-[118%]' : 'w-[91%]'
      )}
    >
      <div className="border-blue w-7/12">
        <Dropdown
          item={item}
          setState={setState}
          state={state}
          name={item ? item.name1 : ''}
          options={cities}
          noIcon={true}
        />
      </div>
      <div className="border-blue w-7/12 -ml-7">
        <InputIcon
          item={item}
          setState={setState}
          state={state}
          name={item ? item.name2 : ''}
          placeholder={item ? item.placeholderZip : ''}
          inputType={item ? item.typeZip : ''}
        />
      </div>
    </div>
  );
}

export default DropdownAndInput;
