import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import DatePicker from '../components/datePicker';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
// import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
// import { styled } from '@mui/material/styles';

// const LeftContentWrapper = styled('div')(() => ({
//   paddingLeft: 31,
//   paddingTop: '18px',
//   backgroundColor: '#F5F5F5',
//   height: '768px',
// }));
const Home = () => {
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
                    <div className="absolute z-40 hidden group-hover:block group-hover:bg-white pl-[16px] ">
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
              <div className="content">
                <div className="content-buttons">
                  <button className="border rounded-full">Filter</button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
