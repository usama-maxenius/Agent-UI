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
import Dropdown from './dropdown';

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

export default function ExpandableCard({ setPopUp }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={cardRoot}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: '#F5F5F5', border: '1px solid #16161640' }}
            aria-label="recipe"
            className={classNames('cursor-pointer  ', 'hover:border-blue  ')}
            onClick={() => {
              if (setPopUp) {
                setPopUp(true);
              }
            }}
          >
            <DoneRoundedIcon
              className={classNames('text-gray', 'hover:text-blue ')}
            />
          </Avatar>
        }
        action={
          <div className="flex flex-row items-center">
            <img
              src={require('../assets/images/logos.png')}
              alt="some here"
              className=" h-6 w-20 "
            />
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon sx={{ color: '#2541b2' }} />
            </ExpandMore>
          </div>
        }
        title={<MediumPoppin22>Colorado Technical University</MediumPoppin22>}
        subheader={<MediumPoppin16>Colorado Springs, CO</MediumPoppin16>}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className="w-11/12 bg-lightGray p-4 mx-auto mb-4 font-Poppin text-base rounded-[8px]">
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
      <div className="mx-auto w-11/12">
        <SearchDropDown />
      </div>
      <CardContent>
        <div className="flex flex-row items-center text-blue">
          <div className="flex flex-row text-small items-center mr-7">
            <NavigationRoundedIcon className=" rotate-45" />
            1,789 miles
          </div>
          <div className="flex flex-row text-small items-center ml-5 mr-7">
            <DirectionsCarRoundedIcon className="mr-2" />
            27 hr
          </div>
          <div className="flex flex-row text-small items-center ml-5 ">
            <LocationOnRoundedIcon className="mr-2" />
            view in maps
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
