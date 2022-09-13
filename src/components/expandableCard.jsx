/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

import { MediumPoppin22, MediumPoppin16 } from './styled/commonDesign';
import SearchDropDown from './dropdownWithSearch';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';

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

let cardRoot = { maxWidth: '100%', overflow: 'unset' };
export default function ExpandableCard({
  setPopUp,
  selectCard,
  ind,
  selected,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(selected);

  return (
    <Card
      sx={[
        cardRoot,
        {
          bgcolor: selected ? '#2541B2' : 'white',
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
            aria-label="recipe"
            className={classNames(
              'cursor-pointer  ',
              selected ? 'hover:border-white' : 'hover:border-blue  '
            )}
            onClick={() => {
              selectCard(ind);
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
            <img
              src={
                ind == 2
                  ? require('../assets/images/south.png')
                  : require('../assets/images/logos.png')
              }
              alt="some here"
              className=" w-20 "
            />
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
            {ind == 2
              ? 'South University Online'
              : 'Colorado Technical University'}
          </MediumPoppin22>
        }
        subheader={
          <MediumPoppin16 color={selected ? 'white' : '#2541b2'}>
            {ind == 2 ? 'Online' : 'Colorado Springs, CO'}
          </MediumPoppin16>
        }
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className="w-[606px] bg-lightGray p-4 mx-auto mb-4 font-Poppin text-base rounded-[8px]">
          <Typography paragraph>
            The University of Colorado Colorado Springs is a public institution
            that was founded in 1965. It has a total undergraduate enrollment of
            10,119 (fall 2020), its setting is urban, and the campus size is 550
            acres. It utilizes a semester-based academic calendar. University of
            Colorado Colorado Springs’ ranking in the 2022 edition of Best
            Colleges is National Universities, #299-391. Its in-state tuition
            and fees are $10,480; out-of-state tuition and fees are $25,600.
          </Typography>
        </div>
      </Collapse>
      {ind == 3 ? (
        [1, 2, 3, 4].map((item, key) => {
          return (
            <div className="mx-auto w-[606px] mb-4" key={key}>
              <SearchDropDown
                Icon={
                  item < 2 ? (
                    <SchoolRoundedIcon className="text-gray mr-3" />
                  ) : (
                    <QuizRoundedIcon className="text-gray mr-3" />
                  )
                }
                placeholder={
                  item > 1 ? 'Additional Question one' : 'Select a program'
                }
              />
            </div>
          );
        })
      ) : (
        <div className="mx-auto w-[606px] mb-4">
          <SearchDropDown
            Icon={<SchoolRoundedIcon className="text-gray mr-3" />}
            placeholder="Select a program"
          />
        </div>
      )}
      <CardContent>
        <div className="flex flex-row items-center text-blue">
          {ind == 2 ? (
            <div className="flex flex-row text-small items-center mr-7">
              <LaptopRoundedIcon
                className={classNames(selected ? 'text-white' : 'text-blue')}
              />
            </div>
          ) : (
            <>
              <div
                className={classNames(
                  'flex flex-row text-small items-center mr-7',
                  selected ? 'text-white' : 'text-blue'
                )}
              >
                <NavigationRoundedIcon className="rotate-45" />
                1,789 miles
              </div>
              <div
                className={classNames(
                  'flex flex-row text-small items-center ml-5 mr-7',
                  selected ? 'text-white' : 'text-blue'
                )}
              >
                <DirectionsCarRoundedIcon className="mr-2" />
                27 hr
              </div>
              <div
                className={classNames(
                  'flex flex-row text-small items-center ml-5 mr-7 ml-5',
                  selected ? 'text-white' : 'text-blue'
                )}
              >
                <LocationOnRoundedIcon className="mr-2" />
                view in maps
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
