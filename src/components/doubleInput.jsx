import React from 'react';
import { classNames } from '../helper/classNames';
import Dropdown from './dropdown';
import InputIcon from './inputWithRightIcon';

let item = {
  options: [
    { name: 'Area of study', value: '1' },
    { name: '2022', value: '2' },
  ],
  isDouble: true,
};
function DropdownAndInput({ width }) {
  return (
    <div
      className={classNames(
        'flex flex-row justify-between',
        width ? 'w-[118%]' : 'w-[91%]'
      )}
    >
      <div className="border-blue w-7/12">
        <Dropdown item={item} />
      </div>
      <div className="border-blue w-7/12 -ml-7">
        <InputIcon item={item} />
      </div>
    </div>
  );
}

export default DropdownAndInput;
