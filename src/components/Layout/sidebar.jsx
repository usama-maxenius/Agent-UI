import React from 'react';
import { styled } from '@mui/material/styles';
import { Paper, Divider } from '@mui/material';
import {
  ExpandMoreRounded,
  HomeRounded,
  StarRounded,
  BarChartRounded,
  MicRounded,
  HeadsetMicRounded,
  SettingsRounded,
} from '@mui/icons-material';

const SideBarWrapper = styled(Paper)(() => ({
  backgroundColor: '#2541B2',
  textAlign: 'center',
  color: 'white',
  width: 60,
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 4,
  borderRadius: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const style = {
  expand: { fontSize: 24, rotate: '270deg', marginTop: '25px' },
  iconStyle: { fontSize: 25, marginTop: '25px' },
  divider: { backgroundColor: 'white', marginTop: '35px', width: 20 },
};

const SideBar = () => {
  return (
    <SideBarWrapper>
      <ExpandMoreRounded sx={style.expand} />
      <Divider variant="middle" sx={style.divider} />
      <HomeRounded sx={style.iconStyle} />
      <StarRounded sx={style.iconStyle} />
      <BarChartRounded sx={style.iconStyle} />
      <MicRounded sx={style.iconStyle} />
      <HeadsetMicRounded sx={style.iconStyle} />
      <SettingsRounded sx={style.iconStyle} />
    </SideBarWrapper>
  );
};

export default SideBar;
