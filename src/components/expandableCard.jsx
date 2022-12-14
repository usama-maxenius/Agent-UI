/* eslint-disable no-unused-vars */
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { useDispatch } from 'react-redux';
import SearchDropDown from './dropdownWithSearch';
import { MediumPoppin16, MediumPoppin22 } from './styled/commonDesign';
import { useNavigate, useSearchParams, redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ExpandMore = styled((props) => {
  console.log('props', props);
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

let cardRoot = { maxWidth: '574px', overflow: 'unset' };
export default function ExpandableCard({
  setPopUp,
  selectCard,
  ind,
  selected,
  programs,
  updateOffers,
  selected_program,
  program,
  pingResult,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProgram, setSelectedProgram] = React.useState({});

  let dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedSchools } = useSelector((store) => store.InitReducer);
  console.log({ selected_program });
  const handleExpandClick = () => setExpanded(!expanded);

  const selectProgramHandler = (obj) => {
    const updatedPrograms = selectedSchools.map(
      (selected) =>
        (selected.selected_program = {
          ...obj,
          questions: selected.questions,
        })
    );
    dispatch({
      type: 'SELECTED_SCHOOLS',
      payload: updatedPrograms,
    });
    setSelectedProgram(program);
    dispatch({
      type: 'PROGRAM_SELECTED',
      payload: obj,
    });
  };

  const copyPrograms = [...programs];
  const programOptions = copyPrograms?.map((prog) => {
    return {
      ...prog,
      OptionLabel: prog.program,
      OptionValue: prog.program,
    };
  });

  return (
    <Card
      sx={[
        cardRoot,
        {
          bgcolor: selected ? '#2541B2' : 'white',
          boxShadow: '0px 3px 10px #00000029',
        },
      ]}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: selected ? '#2541B2' : '#F5F5F5',
              border: selected ? '1px solid white' : '1px solid #16161640',
            }}
            className={classNames(
              'cursor-pointer  ',
              selected ? 'hover:border-white' : 'hover:border-blue  '
            )}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // program.selected = !program.selected;
              selectCard(ind);

              // if (!selected) {
              //   navigate(
              //     `/school/matches/transfer?search=${searchParams.get(
              //       'search'
              //     )}`
              //   );
              // }
              // setSearchParams({
              //   search: searchParams.get('search'),
              // });
            }}
          >
            <DoneRoundedIcon
              className={classNames(
                selected ? 'text-white' : 'text-gray',
                selected ? '' : 'hover:border-blue  '
              )}
            />
          </Avatar>
        }
        action={
          <div className="flex flex-row items-center ">
            <img src={ind.logo} alt="some here" className=" w-20 " />
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              className="hover:bg-none"
            >
              <ExpandMoreIcon sx={{ color: selected ? 'white' : '#2541b2' }} />
            </ExpandMore>
          </div>
        }
        title={
          <MediumPoppin22 color={selected ? 'white' : '#2541b2'}>
            {ind.school}
          </MediumPoppin22>
        }
        subheader={
          <MediumPoppin16 color={selected ? 'white' : '#2541b2'}>
            {ind.brand_name}
          </MediumPoppin16>
        }
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className="w-[518px] bg-lightGray p-4 mx-auto mb-4 font-Poppin text-base rounded-[8px]">
          <p
            className="w-[450px] font-Poppin text-base rounded-[8px]"
            dangerouslySetInnerHTML={{ __html: ind.consent }}
          ></p>
        </div>
      </Collapse>

      <div className="mx-auto w-[calc(95% - 32px)] mb-4 mx-[16px]">
        <SearchDropDown
          Icon={
            <SchoolRoundedIcon
              className={classNames(
                ' mr-3',
                program == true ? 'text-red' : 'text-gray  '
              )}
            />
          }
          program={ind}
          placeholder="Select a program"
          options={programOptions}
          selectProgramHandler={() => selectProgramHandler(ind)}
        />
      </div>

      {/* {
         selected_program.questions?.map((item, key) => {
            return (
              <div
                className="mx-auto w-[calc(95% - 32px)] mb-4 mx-[16px]"
                key={key}
              >
                <SearchDropDown
                  Icon={<QuizRoundedIcon className="text-gray mr-3" />}
                  placeholder={item.QuestionLabel}
                  question={item}
                  options={item.QuestionOptions}
                  programSelected={() => selectCard(item)}
                />
              </div>
            );
          })
        : ''} */}
      {pingResult && (
        <div
          className={classNames(
            'mx-auto w-[calc(95% - 32px)]  md:mx-[16px]',
            selected ? 'text-white' : 'text-blue'
          )}
        >
          {pingResult.ping_messages}
        </div>
      )}

      <CardContent>
        <div className="flex flex-row items-center text-blue">
          {ind.online && (
            <div
              className={classNames(
                'flex flex-row text-small items-center mr-7 font-Poppin',
                selected ? 'text-white' : 'text-blue'
              )}
            >
              <LaptopRoundedIcon className="mr-1" /> Online
            </div>
          )}

          <div
            className={classNames(
              'flex flex-row text-small items-center mr-7 font-Poppin',
              selected ? 'text-white' : 'text-blue'
            )}
          >
            <NavigationRoundedIcon className="rotate-45" />
            {ind.distance_miles} miles
          </div>
          <div
            className={classNames(
              'flex flex-row text-small items-center ml-5 mr-7 font-Poppin',
              selected ? 'text-white' : 'text-blue'
            )}
          >
            <DirectionsCarRoundedIcon className="mr-2" />
            27 hr
          </div>
          <div
            className={classNames(
              'flex flex-row text-small items-center ml-5 mr-7 ml-5 font-Poppin',
              selected ? 'text-white' : 'text-blue'
            )}
          >
            <LocationOnRoundedIcon className="mr-2" />
            view in maps
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
