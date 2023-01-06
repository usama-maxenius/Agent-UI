/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '../helper/classNames';
import Dropdown from './dropdown';
import InputIcon from './inputWithRightIcon';

function DropdownAndInput({
  specificWidth,
  width,
  item,
  setState,
  state,
  fromDND,
}) {
  let { cities } = useSelector((store) => store.InitReducer);

  return (
    <div
      className={classNames(
        'flex flex-row justify-between',
        width ? 'w-[100%]' : 'w-[82%]',
        specificWidth
      )}
    >
      <div className="border-blue w-7/12">
        <Dropdown
          item={item}
          setState={setState}
          state={state}
          name={item ? item.name1 : ''}
          options={[]}
          // noIcon={true}
          removeClockIcon={true}
        />
      </div>
      <div className="border-blue w-7/12 -ml-7 mt-1">
        <InputIcon
          item={item}
          setState={setState}
          state={state}
          name={item ? item.name2 : ''}
          placeholder={item ? item.placeholderZip : ''}
          inputType={item ? item.typeZip : ''}
          fromDND={fromDND}
        />
      </div>
    </div>
  );
}

export default DropdownAndInput;
