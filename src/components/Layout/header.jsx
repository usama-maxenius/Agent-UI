/* eslint-disable no-unused-vars */
import {
  CallEndRounded,
  ExpandMoreRounded,
  MicOffRounded,
  PhonePausedRounded,
} from '@mui/icons-material';
import TtyIcon from '@mui/icons-material/Tty';
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
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useContextCustom } from '../../store/context';
import { useAuth0 } from '@auth0/auth0-react';

const HeaderWrapper = styled(Paper)(({ expand }) => ({
  backgroundColor: '#FFFFFF',
  textAlign: 'center',
  color: '#161616',
  width: '100%',
  height: '63px',
  borderRadius: 0,
  paddingLeft: expand ? 160 : 87,
  paddingRight: '5%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2,
  boxShadow: 'none',
}));
const TitleWrapper = styled(Box)((props) => ({
  color: '#161616',
  display: 'flex',
  flexDirection: props.row == 'true' ? 'row' : 'column',
  alignItems: props.flexstart === 'true' ? 'flex-start' : 'center',
  justifyContent: props.spacebetween == 'true' ? 'space-between' : 'center',
  marginTop: props.marginTop == 'true' ? '5px' : 0,
  borderBottom:
    props.active == 'true' ? '2px solid #3D885B' : '2px solid transparent',
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
  height: 42,
  width: 42,
  borderRadius: 50,
  background: '#F5F5F5 0% 0% no-repeat padding-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 16,
}));
const SwitchLabel = styled(Typography)(({ left, checked }) => ({
  marginRight: left ? 6 : 0,
  fontSize: '12px',
  color: checked ? '#2541B2' : '#AFAFAF',
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
}));
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 65,
  height: 31,
  padding: 0,
  borderRadius: 100,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 1,
    transitionDuration: '300ms',
    '&:hover': {
      marginLeft: 3,
    },
    '&.Mui-checked': {
      transform: 'translateX(29px)',
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
    width: 31,
    height: 31,
    color: '#2541B2',
    border: '2px solid #FFFFFF',
    marginLeft: 1,
    marginTop: -1,
    borderRadius: 100,
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
  iconStyle: {
    fontSize: 22,
    '&:hover': {
      color: '#2541B2',
    },
  },
  micIcon: {
    fontSize: 24,
    '&:hover': {
      color: '#2541B2',
    },
  },
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
  let [switchChecked, setSwitchChecked] = useState(false);
  let { mode } = useSelector((store) => store.InitReducer);
  let dispatch = useDispatch();
  let expand = useContextCustom().state.expand;
  const { isAuthenticated, logout, user } = useAuth0();

  let [callerTime, setCallerTime] = useState(0);
  let [isTimer, setIsTimer] = useState(false);
  let [callStarted, setCallStarted] = useState(false);

  useEffect(() => {
    const interval =
      isTimer &&
      setInterval(() => {
        setCallerTime((seconds) => seconds + 1);
      }, 1000);
    return () => clearInterval(interval);
  }, [isTimer]);

  const startTimer = (e) => {
    setCallerTime(0);
    setIsTimer(true);
    setCallStarted(true);
  };

  const stopTimer = (e) => {
    setIsTimer(!isTimer);
  };

  const endTimer = () => {
    setCallerTime(0);
    setIsTimer(false);
    setCallStarted(false);
  };

  const getCallTime = (time) => {
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    return minutes + ':' + seconds;
  };

  return (
    <HeaderWrapper expand={expand}>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <TitleWrapper row="true" spacebetween="true" marginTop="true">
            {data.map((item, idx) => (
              <TitleWrapper flexstart="true" key={idx}>
                <Typography component="p" style={style.title}>
                  {item.title}
                </Typography>
                <Typography component="p" style={style.subTitle}>
                  {item.title === 'Current Call'
                    ? getCallTime(callerTime)
                    : item.title === 'Caller Name'
                    ? isAuthenticated
                      ? user.name.includes('@')
                        ? user.nickname
                        : user.name
                      : 'None'
                    : item.subTitle}
                </Typography>
                {item.active ? (
                  <Divider sx={style.divider} />
                ) : (
                  <Divider sx={style.transparent} />
                )}
              </TitleWrapper>
            ))}
          </TitleWrapper>
        </Grid>
        <Grid item xs={2.5}>
          <IconWrapper>
            <IconButton>
              <MicOffRounded sx={style.iconStyle} />
            </IconButton>
            {callStarted && (
              <>
                <IconButton>
                  <PhonePausedRounded
                    sx={style.iconStyle}
                    onClick={stopTimer}
                  />
                </IconButton>
                <IconButton>
                  <CallEndRounded sx={style.micIcon} onClick={endTimer} />
                </IconButton>
              </>
            )}
            {!callStarted && (
              <IconButton>
                <TtyIcon sx={style.iconStyle} onClick={startTimer} />
              </IconButton>
            )}
          </IconWrapper>
        </Grid>
        <Grid item xs={2.5}>
          <SwitchWrapper>
            <SwitchLabel left checked={!mode ? true : false}>
              Beginner
            </SwitchLabel>
            <FormControlLabel
              control={
                <IOSSwitch
                  sx={{ my: 1 }}
                  onChange={(e) => {
                    setSwitchChecked(e.target.checked);
                    dispatch({
                      type: 'CHANGE_MODE',
                    });
                  }}
                  defaultChecked={mode}
                />
              }
              sx={{ ml: 0, marginRight: '6px' }}
            />
            <SwitchLabel checked={mode ? true : false}>Pro</SwitchLabel>
          </SwitchWrapper>
        </Grid>
        <Grid
          item
          xs={4}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <TitleWrapper row="true" spacebetween="true" marginTop="true">
            {/* {data2.map((item, idx) => (
              <>
                <TitleWrapper flexstart key={idx}>
                  <Typography component="p" style={style.title}>
                    {item.title}
                  </Typography>
                  <Typography component="p" style={style.subTitle}>
                    {item.subTitle}
                  </Typography>
                  {item.subTitle !== '-' && (
                    <Divider sx={[style.divider, item.style]} />
                  )}
                </TitleWrapper>
              </>
            ))}
            <Typography component="p" style={style.headerDropDown}>
              Today <ExpandMoreRounded />
            </Typography> */}
            {isAuthenticated && (
              <Typography
                component="p"
                sx={{ fontWeight: 'bold', cursor: 'pointer' }}
                style={style.headerDropDown}
                onClick={() => {
                  if (isAuthenticated) {
                    localStorage.removeItem('url');
                    logout({ returnTo: window.location.origin });
                  }
                }}
              >
                Logout
              </Typography>
            )}
          </TitleWrapper>
        </Grid>
      </Grid>
    </HeaderWrapper>
  );
};

export default Header;
