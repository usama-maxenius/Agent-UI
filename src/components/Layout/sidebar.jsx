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
import { useExpand } from '../../store/context';

const SideBarWrapper = styled(Paper)((props) => ({
  backgroundColor: '#2541B2',
  textAlign: props.expand ? 'left' : 'center',
  color: 'white',
  width: props.expand ? 130 : 60,
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 4,
  borderRadius: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: props.expand ? 'flex-start' : 'center',
  paddingLeft: props.expand && '15px',
}));

const style = {
  expand: { fontSize: 24, rotate: '270deg', marginTop: '25px' },
  iconStyle: { fontSize: 25 },
  divider: { backgroundColor: 'white', marginTop: '35px', width: 20 },
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SideBar = () => {
  let { state, dispatch } = useExpand();
  let expand = state.expand;
  const expandHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'EXPAND',
    });
  };

  return (
    <SideBarWrapper expand={expand}>
      <button
        onClick={expandHandler}
        className={expand && 'ml-auto mr-2 rotate-180 -mb-6 mt-6  '}
      >
        <ExpandMoreRounded sx={style.expand} />
      </button>
      <Divider
        variant="middle"
        sx={[style.divider, expand && { width: '80px' }]}
      />
      <div
        className={classNames(
          'flex flex-row items-center mt-5 w-11/12',
          expand ? 'justify-start' : 'justify-center'
        )}
      >
        <HomeRounded
          sx={[style.iconStyle, expand && { marginRight: '10px' }]}
        />{' '}
        {expand && 'Home'}
      </div>
      <div
        className={classNames(
          'flex flex-row items-center mt-5 w-11/12',
          expand ? 'justify-start' : 'justify-center'
        )}
      >
        <StarRounded
          sx={[style.iconStyle, expand && { marginRight: '10px' }]}
        />{' '}
        {expand && 'Favourite'}
      </div>
      <div
        className={classNames(
          'flex flex-row items-center mt-5 w-11/12',
          expand ? 'justify-start' : 'justify-center'
        )}
      >
        <BarChartRounded
          sx={[style.iconStyle, expand && { marginRight: '10px' }]}
        />{' '}
        {expand && 'Analytics'}
      </div>
      <div
        className={classNames(
          'flex flex-row items-center mt-5 w-11/12',
          expand ? 'justify-start' : 'justify-center'
        )}
      >
        <MicRounded sx={[style.iconStyle, expand && { marginRight: '10px' }]} />{' '}
        {expand && 'Speak'}
      </div>
      <div
        className={classNames(
          'flex flex-row items-center mt-5 w-11/12',
          expand ? 'justify-start' : 'justify-center'
        )}
      >
        <HeadsetMicRounded
          sx={[style.iconStyle, expand && { marginRight: '10px' }]}
        />{' '}
        {expand && 'Listen'}
      </div>
      <div
        className={classNames(
          'flex flex-row items-center mt-5 w-11/12',
          expand ? 'justify-start' : 'justify-center'
        )}
      >
        <SettingsRounded
          sx={[style.iconStyle, expand && { marginRight: '10px' }]}
        />{' '}
        {expand && 'Setting'}
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;
