/* eslint-disable no-empty */
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import { useState } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const DragFiles = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
    }
  };
  const changeHandler = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.target.files && e.target.files[0]) {
    }
  };

  return (
    <div className="px-[84px] pt-[85px] bg-midGray w-screen h-[768px] flex flex-row items-center justify-center">
      <div className="">
        <form onDragEnter={handleDrag}>
          <div
            className="w-[675px] rounded-box bg-white h-[387px] no-scrollbar  "
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <label htmlFor="fileUpload" className="w-full h-[387px] ">
              <div className="text-center py-[110px] ">
                <FileOpenOutlinedIcon sx={{ fontSize: 68, color: '#2541B2' }} />
                <div className="font-Poppin text-4xl text-blue font-semibold mt-4">
                  {dragActive ? 'Drop ' : 'Drag '} CSV here
                </div>

                <p className="font-Poppin font-normal text-base mt-4">
                  or click to browse (4mb max)
                </p>
              </div>
            </label>
          </div>
          <input
            type="file"
            name="file"
            id="fileUpload"
            className="hidden"
            onChange={changeHandler}
          />
        </form>

        <div className="button mt-4 flex flex-row items-center">
          <button className="text-black font-IBM_serif bg-none outline-none border-none text-base flex items-center hover:underline">
            <ArrowBackRoundedIcon sx={{ marginRight: '5px', fontSize: 16 }} />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DragFiles;
