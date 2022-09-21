import * as React from 'react';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

const AirbnbSlider = styled(Slider)(() => ({
  color: '#2541B2',
  height: 16,
  padding: '0px !important',
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#2541B2',
    border: '1px solid currentColor',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },

    marginLeft: -10,
  },
  '& .MuiSlider-track': {
    height: 14,
  },
  '& .MuiSlider-rail': {
    color: '#bfbfbf',
    height: 16,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children} <DoneRoundedIcon sx={{ color: 'white', fontSize: 18 }} />{' '}
    </SliderThumb>
  );
}

export default function RangeSlider({ handleSliderChange, value }) {
  return (
    <Box sx={{ width: 335 }}>
      <AirbnbSlider
        components={{ Thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) =>
          index === 0 ? 'Minimum price' : 'Maximum price'
        }
        defaultValue={value}
        min={0}
        max={256}
        onChange={handleSliderChange}
      />
    </Box>
  );
}
