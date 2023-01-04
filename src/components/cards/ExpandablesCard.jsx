/* eslint-disable no-unused-vars */
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';

import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';

import { MediumPoppin16, MediumPoppin22 } from '../styled/commonDesign';
import Dropdown from '../dropdown/index';
import { schoolSelectionToggle } from '../../helper/offersFilteration';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ExpandMore = styled((props) => {
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

const ExpandablesCard = ({
  keyName,
  state,
  school,
  selected,
  updateOffersHandler,
  updatePopupHandler,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [programQuestions, setProgramQuestions] = React.useState([]);

  // Filtering Questions on the basis of IsVisible property
  React.useEffect(() => {
    const selected_program = school.selected_program;
    if (selected_program?.questions) {
      const filterVisibleQuestions = selected_program?.questions?.filter(
        (qest) => qest.IsVisible
      );
      return setProgramQuestions(filterVisibleQuestions);
    }
  }, [school.selected_program]);

  // Select program handler
  const programsHandler = React.useCallback((prog) => {
    const updateSelectedProgram = state?.map((st) => {
      if (st.schoolid === school.schoolid) {
        st.required = false;
        st.selected_program = {
          ...prog,
          questions: st.questions,
        };
        return st;
      }
      return st;
    });

    return updateOffersHandler(updateSelectedProgram);
  }, []);

  // Select question handler
  const questionsHandler = React.useCallback((selectedOption, question) => {
    const updatedAnswers = state?.map((sch) => {
      const res = sch.selected_program?.questions?.map((qest) => {
        if (qest.QuestionFieldName === question.QuestionFieldName) {
          qest.value = selectedOption;
          qest.required = false;
          return qest;
        }
        return qest;
      });
      return {
        ...sch,
        selected_program: {
          ...sch.selected_program,
          questions: res,
        },
      };
    });
    return updateOffersHandler(updatedAnswers);
  }, []);

  // Toggle selected schools
  const selectSchoolHandler = React.useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (keyName === 'transfer' && !school.selected_program) {
      const alreadSelected = state?.find((school) => school.selected);
      if (alreadSelected) {
        return updatePopupHandler(true);
      } else {
        const res = await schoolSelectionToggle(
          state,
          school,
          setProgramQuestions
        );
        await updateOffersHandler(res);
        return;
      }
    } else {
      const res = await schoolSelectionToggle(
        state,
        school,
        setProgramQuestions
      );
      await updateOffersHandler(res);
      return;
    }
  }, []);

  const selectedClass = school.required
    ? 'text-red'
    : school.selected_program
    ? 'text-blue'
    : 'text-gray';

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
            onClick={selectSchoolHandler}
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
            <img src={school.logo} alt="some here" className=" w-20 " />
            <ExpandMore
              expand={expanded}
              onClick={() => setExpanded(!expanded)}
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
            {school.school}
          </MediumPoppin22>
        }
        subheader={
          <MediumPoppin16 color={selected ? 'white' : '#2541b2'}>
            {school.brand_name}
          </MediumPoppin16>
        }
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className="w-[518px] bg-lightGray p-4 mx-auto mb-4 font-Poppin text-base rounded-[8px]">
          <p
            className="w-[450px] font-Poppin text-base rounded-[8px]"
            dangerouslySetInnerHTML={{ __html: school.consent }}
          ></p>
        </div>
      </Collapse>

      <div className="mx-auto w-[calc(95% - 32px)] mb-4 mx-[16px]">
        <Dropdown
          Icon={
            <SchoolRoundedIcon className={classNames('mr-3', selectedClass)} />
          }
          school={school}
          question={undefined}
          colorClass={
            school.required
              ? 'error'
              : school?.selected_program
              ? 'success'
              : 'default'
          }
          placeholder="Select a program"
          options={school.programs}
          clickHandler={programsHandler}
        />
      </div>

      {programQuestions &&
        programQuestions?.map((question, key) => {
          return (
            <div
              className="mx-auto w-[calc(95% - 32px)] mb-4 mx-[16px]"
              key={key}
            >
              <Dropdown
                Icon={
                  <QuizRoundedIcon
                    className={classNames(
                      `mr-3 ${
                        question?.required
                          ? 'text-red'
                          : question?.value?.OptionLabel
                          ? 'text-blue'
                          : 'text-gray'
                      }`
                    )}
                  />
                }
                school={school}
                question={question}
                colorClass={
                  question?.required
                    ? 'error'
                    : question?.value?.OptionLabel
                    ? 'success'
                    : 'default'
                }
                options={question?.QuestionOptions}
                placeholder="Additional Question One?"
                clickHandler={questionsHandler}
              />
            </div>
          );
        })}
      {/* {pingResult && (
        <div
          className={classNames(
            'mx-auto w-[calc(95% - 32px)]  md:mx-[16px]',
            selected ? 'text-white' : 'text-blue'
          )}
        >
          {pingResult.ping_messages}
        </div>
      )} */}

      <CardContent>
        <div className="flex flex-row items-center text-blue">
          {school.online && (
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
            {school.distance_miles} miles
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
              'flex flex-row text-small items-center mr-7 ml-5 font-Poppin',
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
};
export default React.memo(ExpandablesCard);
