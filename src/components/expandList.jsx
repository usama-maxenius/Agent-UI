import React, { useState } from 'react';
import { classNames } from '../helper/classNames';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

function ExpandList({ item, key }) {
  let { icon, name, list } = item;
  let [expand, setExpand] = useState(false);
  return (
    <div className="flex flex-col group">
      <div
        className={classNames(
          'flex flex-row items-center mt-[27px] justify-between'
        )}
        key={key}
      >
        <p className="m-0 flex flex-row items-center ">
          {icon}
          <p className="ml-1.5 font-Poppin text-base font-normal hover:font-semibold">
            {name}
          </p>
        </p>
        {list && (
          <button
            className="icon relative transition ease-in-out group-hover:translate-y-1"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
          </button>
        )}
      </div>
      {expand &&
        list.length > 0 &&
        list.map((ele, idx) => {
          return (
            <div
              className="expand px-1 h-auto text-left text-sm font-Poppin font-normal mt-4"
              key={idx}
            >
              {ele.name}
            </div>
          );
        })}
    </div>
  );
}

export default ExpandList;
