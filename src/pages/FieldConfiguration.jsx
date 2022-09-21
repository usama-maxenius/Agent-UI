import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import Select from '../components/select';
import { useState } from 'react';
import { classNames } from '../helper/classNames';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { useNavigate } from 'react-router-dom';

let extensions = [
  {
    id: '1',
    label: 'Map to Existing field',
    value: 'png',
  },
  {
    id: '2',
    label: 'Do not import',
    value: 'jpeg',
  },
  {
    id: '3',
    label: 'WEBP',
    value: 'webp',
  },
];
let fields = [
  {
    isConnected: true,
    value: 'Buyer Name',
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: true,
    value: 'Buyer Name',
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: true,
    value: 'Buyer Name',
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: true,
    value: 'Buyer Name',
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: true,
    value: 'Buyer Name',
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: true,
    value: 'Buyer Name',
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: true,
    value: 'Buyer Name',
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: true,
    value: 'Buyer Name',
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: true,
    value: 'Buyer Name',
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
  {
    isConnected: false,
    value: 'Buyer Name',
    options: [
      {
        id: '1',
        label: 'PNG',
        value: 'png',
      },
    ],
  },
];

let rowData = [
  { name: 'Buyer Name', value: 'Buyer A', text: 'blue' },
  { name: 'Bucket', value: 'University A', text: 'blue' },
  { name: 'Status', value: 'Live', text: 'blue' },
  { name: 'CPL', value: 'Not connected', text: 'gray' },
  {
    name: 'Days & Times',
    Timevalue: [
      { name: 'Mon', time: '7:30am - 6:30pm' },
      { name: 'Tues', time: '7:30am - 6:30pm' },
      { name: 'Wed', time: '7:30am - 6:30pm' },
      { name: 'Thur', time: '7:30am - 6:30pm' },
      { name: 'Fri', time: '7:30am - 6:30pm' },
      { name: 'Sat', time: 'Not live' },
      { name: 'Sun', time: 'Not live' },
    ],
    text: 'gray',
  },
  { name: 'Daily Cap', value: '210', text: 'blue' },
  { name: 'Weekly Cap', value: 'Not connected', text: 'gray' },
  { name: 'Monthly Cap', value: 'Not connected', text: 'gray' },
  { name: 'Start date', value: 'May 1 2022', text: 'blue' },
  { name: 'End date', value: 'Dec 1 2022', text: 'blue' },
];

let ConnectInput = ({ key, item }) => {
  return (
    <div className="inputWrapper pt-[26px] w-[230px]" key={key}>
      <div
        className={classNames(
          'icon flex flex-row items-center mb-3',
          !item.isConnected && 'invisible'
        )}
      >
        <FiberManualRecordRoundedIcon sx={{ fontSize: 12, color: '#00913A' }} />
        <p className="font-semibold font-Poppin text-darkBlack text-xs ml-1">
          Connected
        </p>
      </div>

      <input
        type="text"
        className="text-blue border border-blue rounded-box outline-none bg-lightGray text-base py-3.5 px-2 w-[230px] font-medium"
        value={item.value}
      />
    </div>
  );
};
let SelectButton = ({ key, item }) => {
  const temp = extensions.find((ext) => ext.value);

  const [currentExtension, setCurrentExtension] = useState(temp);
  return (
    <div className="inputWrapper pt-[26px] w-[230px]" key={key}>
      <div
        className={classNames(
          'icon flex flex-row items-center mb-3',
          !item.isConnected && 'invisible'
        )}
      >
        <FiberManualRecordRoundedIcon sx={{ fontSize: 12, color: '#00913A' }} />
        <p className="font-semibold font-Poppin text-darkBlack text-xs ml-1">
          Connected
        </p>
      </div>

      <Select
        options={extensions}
        selectedOption={currentExtension}
        handelChange={(event) => {
          console.log('parent', event);
          setCurrentExtension(event);
        }}
        className="h-[52px] border-blue text-blue font-Poppin font-medium"
      />
    </div>
  );
};

const FieldConfiguration = () => {
  let navigate = useNavigate();
  return (
    <div className="px-[84px] pt-[20px] bg-midGray w-screen h-[768px]">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={8}>
            <div className="w-full mt-20">
              <div className="head flex flex-row items-center justify-between">
                <div className="font-Poppin text-cta text-blue font-semibold flex flex-row items-center">
                  <SettingsRoundedIcon sx={{ marginRight: 1 }} /> Field
                  configuration
                </div>
                <div className="font-Poppin flex flex-row items-center">
                  <div className="text flex flex-row items-center">
                    <p className="text-base">Displaying row 2 of 256</p>
                    <ExpandMoreRoundedIcon sx={{ marginLeft: 1 }} />
                  </div>
                  <div className="button">
                    <ChevronLeftRoundedIcon
                      sx={{ marginLeft: 2, backgroundColor: '#ededed' }}
                    />
                    <ChevronRightRoundedIcon
                      sx={{ marginLeft: 1, backgroundColor: '#ededed' }}
                    />
                  </div>
                </div>
              </div>

              <div className="content w-full rounded-box bg-white mt-4 px-[26px] overflow-y-scroll h-[530px] no-scrollbar pb-10">
                <div className="flex flex-row justify-between flex-wrap">
                  {fields.map((item, key) => {
                    if (!item.isConnected) {
                      return <SelectButton key={key} item={item} />;
                    } else {
                      return <ConnectInput key={key} item={item} />;
                    }
                  })}

                  {/* <div className="inputWrapper pt-[26px] w-[230px]">
                    <div className="icon flex flex-row items-center mb-3 invisible">
                      <FiberManualRecordRoundedIcon
                        sx={{ fontSize: 12, color: '#00913A' }}
                      />
                      <p className="font-semibold font-Poppin text-darkBlack text-xs ml-1">
                        Connected
                      </p>
                    </div>
                    <Select
                      options={extensions}
                      selectedOption={currentExtension}
                      handelChange={(event) => {
                        console.log('parent', event);
                        setCurrentExtension(event);
                      }}
                      className="h-[52px] border-blue text-blue font-Poppin font-medium"
                    />
                  </div> */}
                </div>
              </div>

              <div className="button mt-10 flex flex-row items-center">
                <button className="text-black font-IBM_serif bg-none outline-none border-none">
                  <ArrowBackRoundedIcon /> Back
                </button>
              </div>
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <div className="w-full h-10 mt-20">
              <div className="head flex flex-col">
                <div className="font-Poppin text-cta text-gray font-semibold flex flex-row items-center">
                  Row preview
                </div>
                <div className="content w-full rounded-box bg-white mt-4 px-[26px] overflow-y-scroll h-[530px] no-scrollbar py-4">
                  {rowData.map((item, key) => {
                    return (
                      <div className="mt-6" key={key}>
                        <p className="font-Poppin text-darkBlack font-semibold text-xs">
                          {item.name}
                        </p>
                        {item.value && (
                          <p
                            className={classNames(
                              'font-Poppin  font-medium text-base mt-1',
                              'text-' + item.text
                            )}
                          >
                            {item.value}
                          </p>
                        )}
                        {item.Timevalue &&
                          item.Timevalue.map((ele, idx) => {
                            return (
                              <p
                                className={classNames(
                                  'font-Poppin  font-medium text-base mt-1',
                                  'text-blue'
                                )}
                                key={idx}
                              >
                                {ele.name}
                                <p className="font-Poppin text-black font-medium text-xs mb-2">
                                  {ele.time}
                                </p>
                              </p>
                            );
                          })}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="button mt-8 flex flex-row items-center justify-end">
                <button
                  className="bg-blue text-white w-36 h-10 text-base font-Poppin font-medium border border-blue rounded-3xl outline-none hover:shadow-[0px_3px_10px_#00000029]"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/connector/layout/importingCSV');
                  }}
                >
                  Continue{' '}
                  <EastRoundedIcon sx={{ marginLeft: '10px', fontSize: 16 }} />
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default FieldConfiguration;
