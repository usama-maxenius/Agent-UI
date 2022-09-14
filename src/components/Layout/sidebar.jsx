import {
  BarChartRounded,
  ExpandMoreRounded,
  HeadsetMicRounded,
  HomeRounded,
  MicRounded,
  SettingsRounded,
  StarRounded,
} from '@mui/icons-material';
import { Divider, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useContextCustom } from '../../store/context';

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
  expand: { fontSize: 24, rotate: '270deg' },
  iconStyle: { fontSize: 24, '&:hover': { transform: 'scale(1.2)' } },
  divider: { backgroundColor: 'white', width: 20 },
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SideBar = () => {
  let { state, dispatch } = useContextCustom();
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
        className={classNames(
          ' h-[46px] w-[46px] mt-[25px] mb-[29px] flex flex-row justify-center items-center transition ease-in-out duration-75',
          'hover:shadow-[0px_3px_6px_#00000029] hover:rounded-3xl',
          expand && 'ml-auto mr-2 rotate-180 -mb-6 mt-6'
        )}
      >
        <ExpandMoreRounded sx={style.expand} />
      </button>
      <Divider
        variant="middle"
        sx={[style.divider, expand && { width: '80px' }]}
      />
      <div
        className={classNames(
          'flex flex-row items-center mt-[26px] w-[24px] mb-[30px]',
          expand ? 'justify-start' : 'mr-[16px] ml-[16px]'
        )}
      >
        <HomeRounded
          sx={[style.iconStyle, expand && { marginRight: '10px' }]}
        />{' '}
        {expand && 'Home'}
      </div>
      <div
        className={classNames(
          'flex flex-row items-center mb-[30px] w-[24px]',
          expand ? 'justify-start' : 'mr-[16px] ml-[16px]'
        )}
      >
        <StarRounded
          sx={[style.iconStyle, expand && { marginRight: '10px' }]}
        />{' '}
        {expand && 'Favourite'}
      </div>
      <div
        className={classNames(
          'flex flex-row items-center mb-[30px] w-[24px]',
          expand ? 'justify-start' : 'mr-[16px] ml-[16px]'
        )}
      >
        <BarChartRounded
          sx={[style.iconStyle, expand && { marginRight: '10px' }]}
        />{' '}
        {expand && 'Analytics'}
      </div>
      <div
        className={classNames(
          'flex flex-row items-center mb-[30px] w-[24px]',
          expand ? 'justify-start' : 'mr-[16px] ml-[16px]'
        )}
      >
        <MicRounded sx={[style.iconStyle, expand && { marginRight: '10px' }]} />{' '}
        {expand && 'Speak'}
      </div>
      <div
        className={classNames(
          'flex flex-row items-center mb-[30px] w-[24px]',
          expand ? 'justify-start' : 'mr-[16px] ml-[16px]'
        )}
      >
        <HeadsetMicRounded
          sx={[style.iconStyle, expand && { marginRight: '10px' }]}
        />{' '}
        {expand && 'Listen'}
      </div>
      <div
        className={classNames(
          'flex flex-row items-center w-[24px]',
          expand ? 'justify-start' : 'mr-[16px] ml-[16px]'
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
