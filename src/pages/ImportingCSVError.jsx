import { useNavigate } from 'react-router-dom';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import WestRoundedIcon from '@mui/icons-material/WestRounded';

let rows = [
  'Row 7 - CPL Is not a number',
  'Row 145 - Something else has happened and didn’t go',
  'Row 12 - End date is before start date',
  'Row 12 - End date is before start date',
  'Row 12 - End date is before start date',
  'Row 7 - CPL Is not a number',
  'Row 7 - CPL Is not a number',
  'Row 7 - CPL Is not a number',
  'Row 7 - CPL Is not a number',
  'Row 7 - CPL Is not a number',
  'Row 145 - Something else has happened and didn’t go',
  'Row 12 - End date is before start date',
  'Row 12 - End date is before start date',
  'Row 12 - End date is before start date',
  'Row 7 - CPL Is not a number',
  'Row 7 - CPL Is not a number',
  'Row 7 - CPL Is not a number',
  'Row 7 - CPL Is not a number',
  'Row 7 - CPL Is not a number',
  'Row 145 - Something else has happened and didn’t go',
  'Row 12 - End date is before start date',
  'Row 12 - End date is before start date',
  'Row 12 - End date is before start date',
  'Row 7 - CPL Is not a number',
  'Row 7 - CPL Is not a number',
  'Row 7 - CPL Is not a number',
  'Row 7 - CPL Is not a number',
  'Row 7 - CPL Is not a number',
  'Row 145 - Something else has happened and didn’t go',
  'Row 12 - End date is before start date',
  'Row 12 - End date is before start date',
  'Row 12 - End date is before start date',
  'Row 7 - CPL Is not a number',
  'Row 7 - CPL Is not a number',
  'Row 7 - CPL Is not a number',
  'Row 7 - CPL Is not a number',
];
const ImportingCSVError = () => {
  let navigate = useNavigate();

  return (
    <div className="px-[84px] pt-[65px] bg-midGray w-screen h-[768px] flex flex-row  justify-center">
      <div className="mt-[80px]">
        <div className="w-[370px] flex flex-col items-center justify-center">
          <div className="text-blue text-center pt-2.5 w-24 h-24 border-4 border-blue rounded-full">
            <DoneRoundedIcon sx={{ fontSize: 70 }} />
          </div>
          <div className="font-Poppin text-cta text-blue font-semibold flex flex-row items-center mt-5">
            2245 rows successfully uploaded
          </div>
        </div>
        <div className="bg-white pl-4 pt-4 rounded-box w-[370px] h-[260px] overflow-y-scroll no-scrollbar mt-8">
          <div className="font-darkBlack font-Poppin text-base font-medium">
            Rows not uploaded
          </div>
          <div className="overflow-y-scroll no-scrollbar w-[331px] h-[203px] text-lightGray100 text-xs font-Poppin font-semibold flex flex-col ">
            {rows.map((item, idx) => (
              <span className="mt-2.5" key={idx}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="button mt-4 flex flex-row items-center justify-between">
          <button
            className="bg-lightGray100 text-white w-36 h-10 text-base font-Poppin font-medium border border-lightGray100 rounded-3xl outline-none hover:shadow-[0px_3px_10px_#00000029]"
            onClick={(e) => {
              e.preventDefault();
              navigate('/connector/layout/importingCSV');
            }}
          >
            <WestRoundedIcon sx={{ marginRight: '10px', fontSize: 18 }} /> Try
            again
          </button>
          <button
            className="bg-blue text-white w-36 h-10 text-base font-Poppin font-medium border border-blue rounded-3xl outline-none hover:shadow-[0px_3px_10px_#00000029]"
            onClick={(e) => {
              e.preventDefault();
              navigate('/connector/layout/importingCSV');
            }}
          >
            Continue{' '}
            <EastRoundedIcon sx={{ marginLeft: '10px', fontSize: 18 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportingCSVError;
