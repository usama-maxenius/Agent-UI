import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RangeSlider from '../components/rangeSlider';

const FieldConfiguration = () => {
  let navigate = useNavigate();
  const [value, setValue] = useState(30);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="px-[84px] pt-[85px] bg-midGray w-screen h-[768px] flex flex-row items-center justify-center">
      <div className="">
        <div className="w-[675px] rounded-box bg-white px-[26px] h-[387px] no-scrollbar pb-10 flex flex-col items-center justify-center">
          <div className="flex flex-col justify-between items-center">
            <div className="font-Poppin text-cta text-blue font-semibold flex flex-row items-center mb-12">
              Importing CSV into Cap Management
            </div>
            <RangeSlider
              handleSliderChange={handleSliderChange}
              value={value}
            />
            <p className="font-Poppin font-semibold text-xs mt-4">
              Importing row {value} of 256
            </p>
          </div>
        </div>

        <div className="button mt-4 flex flex-row items-center justify-end">
          <button
            className="bg-black text-white w-28 h-10 text-base font-Poppin font-medium border border-blue rounded-3xl outline-none hover:shadow-[0px_3px_10px_#00000029]"
            onClick={(e) => {
              e.preventDefault();
              navigate('/connector/layout/dragFiles');
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FieldConfiguration;
