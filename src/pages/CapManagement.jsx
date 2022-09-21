import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import DatePicker from '../components/datePicker';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import AddIcon from '@mui/icons-material/Add';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { useNavigate } from 'react-router-dom';

const CapManagement = () => {
  let navigate = useNavigate();
  return (
    <div className="pl-[250px] pt-[65px] pr-[84px] bg-midGray">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12}>
            <div className="mt-[18px] pl-[31px] bg-midGray h-[calc(768px-83px)]">
              <div className="out w-full border-b flex flex-row justify-between">
                <div className="wrapper w-[399px] h-[52px] group hover:bg-white">
                  <div className="group-hover:h-[320px] group-hover:bg-white pt-2 group-hover:border group-hover:border-gray group-hover:rounded-box ">
                    <div className="text-blue font-Poppin text-cta font-normal pl-[16px] flex flex-row group-hover:justify-between items-center">
                      Cap management{' '}
                      <ExpandMoreRoundedIcon className="text-blue ml-2" />
                    </div>
                    <div className="absolute z-40 hidden transition ease-in-out group-hover:block group-hover:rounded-box group-hover:bg-white pl-[16px] ">
                      <p className="text-darkblack font-Poppin text-cta mt-[16px] mb-[16px]">
                        Lead Supplier Revenue Report
                      </p>
                      <p className="text-darkblack font-Poppin text-cta mb-[16px]">
                        College Pacing Report
                      </p>
                      <p className="text-darkblack font-Poppin text-cta mb-[16px]">
                        Another Report
                      </p>
                      <p className="text-darkblack font-Poppin text-cta mb-[16px]">
                        One More Report
                      </p>
                      <p className="text-darkblack font-Poppin text-cta mb-[16px]">
                        Two More Report
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center ">
                  <div className="dropdown_calander mr-[28px] flex flex-row">
                    <EventRoundedIcon className="mr-2" />
                    <DatePicker />
                    <ExpandMoreRoundedIcon />
                  </div>
                  <button className="icon">
                    <TuneRoundedIcon />
                  </button>
                </div>
              </div>
              <div className="content mt-[27px] flex flex-row items-center justify-between">
                <div className="content-buttons ">
                  <button className="border rounded-full flex flex-row justify-center items-center py-1 px-3.5">
                    <AddIcon sx={{ fontSize: 20 }} /> Add Filter
                  </button>
                </div>
                <div className="content-buttons flex flex-row items-center justify-between">
                  <button className="border rounded-full flex flex-row justify-center items-center py-1 px-3.5">
                    <FileUploadRoundedIcon sx={{ fontSize: 20 }} /> Upload
                  </button>
                  <div className="mid flex flex-row mx-6">
                    <button className="border rounded-full flex flex-row justify-center items-center py-1 px-3.5 rounded-r-none border-r-0">
                      <DownloadRoundedIcon sx={{ fontSize: 20 }} /> Export
                    </button>
                    <button className="border rounded-full flex flex-row justify-center items-center py-1 px-3.5 rounded-l-none">
                      CSV
                    </button>
                  </div>
                  <button
                    className="border rounded-full flex flex-row justify-center items-center py-1 px-3.5"
                    onClick={() => {
                      navigate('/connector/layout/fieldConfiguration');
                    }}
                  >
                    <StarRoundedIcon sx={{ fontSize: 20 }} /> Save Report
                  </button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CapManagement;
