import {
  CallEndRounded,
  ExpandMoreRounded,
  MicOffRounded,
  PhonePausedRounded,
} from '@mui/icons-material';
import {
  Box,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
const HeaderWrapper = styled(Paper)(() => ({
  backgroundColor: '#FFFFFF',
  textAlign: 'center',
  color: '#161616',
  width: '90%',
  height: '63px',
  borderRadius: 0,
  paddingLeft: 90,
  paddingRight: '5%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2,
}));
const TitleWrapper = styled(Box)((props) => ({
  color: '#161616',
  display: 'flex',
  flexDirection: props.row ? 'row' : 'column',
  alignItems: props.flexStart ? 'flex-start' : 'center',
  justifyContent: props.spaceBetween ? 'space-between' : 'center',
  marginTop: props.marginTop ? '5px' : 0,
  borderBottom: props.active ? '2px solid #3D885B' : '2px solid transparent',
}));
const IconWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  marginTop: '5px',
}));
const SwitchWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '5px',
}));
const IconButton = styled(Box)(() => ({
  height: 45,
  width: 45,
  borderRadius: 50,
  background: '#F5F5F5 0% 0% no-repeat padding-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 16,
}));
const SwitchLabel = styled(Typography)(({ left, checked }) => ({
  marginRight: left ? 16 : 0,
  fontSize: '12px',
  color: checked ? '#2541B2' : '#AFAFAF',
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
}));
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 1,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(17px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#FFFFFF',
        boxShadow: 'inset 0px 3px 6px #00000029',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 24,
    height: 24,
    color: '#2541B2',
    border: '2px solid #FFFFFF',
    marginLeft: -1,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#FFFFFF',
    opacity: 1,
    boxShadow: 'inset 0px 3px 6px #00000029',
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

let style = {
  title: {
    fontSize: 10,
    fontFamily: "'Poppins', sans-serif",
  },
  subTitle: {
    fontSize: 16,
    fontFamily: "'Poppins', sans-serif",
  },
  headerDropDown: {
    fontSize: 16,
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: '#3D885B',
    width: 16,
    height: '2px',
    borderRadius: 5,
  },
  transparent: {
    backgroundColor: 'transparent',
    height: '2px',
  },
  iconStyle: { fontSize: 18 },
  redDivider: {
    backgroundColor: '#FF0000',
  },
  greenDivider: {
    backgroundColor: '#3D885B',
  },
  orangeDivider: {
    backgroundColor: '#F4B51E',
  },
};

const data = [
  {
    title: 'Current Call',
    subTitle: '01:34',
    active: true,
  },
  {
    title: 'Caller Name',
    subTitle: 'Angel Rubio',
    active: false,
  },
  {
    title: 'Other information',
    subTitle: 'Important',
    active: false,
  },
];
const data2 = [
  {
    title: 'Call Length',
    subTitle: '10:34 avg',
    style: style.redDivider,
  },
  {
    title: 'Calls',
    subTitle: '12',
    style: style.greenDivider,
  },
  {
    title: 'Offers',
    subTitle: '8',
    style: style.orangeDivider,
  },
  {
    title: 'QA Score',
    subTitle: '-',
    style: style.transparent,
  },
];
const Header = () => {
  return (
    <HeaderWrapper>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <TitleWrapper row spaceBetween marginTop>
            {data.map((item, idx) => (
              <>
                <TitleWrapper flexStart key={idx}>
                  <Typography component="p" style={style.title}>
                    {item.title}
                  </Typography>
                  <Typography component="p" style={style.subTitle}>
                    {item.subTitle}
                  </Typography>
                  {item.active ? (
                    <Divider sx={style.divider} />
                  ) : (
                    <Divider sx={style.transparent} />
                  )}
                </TitleWrapper>
              </>
            ))}
          </TitleWrapper>
        </Grid>
        <Grid item xs={2.5}>
          <IconWrapper>
            <IconButton>
              <MicOffRounded sx={style.iconStyle} />
            </IconButton>
            <IconButton>
              <PhonePausedRounded sx={style.iconStyle} />
            </IconButton>
            <IconButton>
              <CallEndRounded sx={style.iconStyle} />
            </IconButton>
          </IconWrapper>
        </Grid>
        <Grid item xs={2.5}>
          <SwitchWrapper>
            <SwitchLabel left checked>
              Beginner
            </SwitchLabel>
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            />
            <SwitchLabel>Pro</SwitchLabel>
          </SwitchWrapper>
        </Grid>
        <Grid item xs={4}>
          <TitleWrapper row spaceBetween marginTop>
            {data2.map((item, idx) => (
              <>
                <TitleWrapper flexStart key={idx}>
                  <Typography component="p" style={style.title}>
                    {item.title}
                  </Typography>
                  <Typography component="p" style={style.subTitle}>
                    {item.subTitle}
                  </Typography>
                  <Divider sx={[style.divider, item.style]} />
                </TitleWrapper>
              </>
            ))}
            <Typography component="p" style={style.headerDropDown}>
              Today <ExpandMoreRounded />
            </Typography>
          </TitleWrapper>
        </Grid>
      </Grid>
    </HeaderWrapper>
  );
};

export default Header;
