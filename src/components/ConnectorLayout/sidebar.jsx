import {
  HomeRounded,
  MicRounded,
  SettingsRounded,
  StarRounded,
} from '@mui/icons-material';
import BarChartIcon from '@mui/icons-material/BarChart';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import { Divider, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useContextCustom } from '../../store/context';
import ExpandList from '../expandList';

const SideBarWrapper = styled(Paper)((props) => ({
  backgroundColor: '#2541B2',
  textAlign: props.expand ? 'left' : 'center',
  color: 'white',
  width: 260,
  height: '768px',
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 4,
  borderRadius: 0,
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '21px',
  paddingRight: '16px',
}));

const style = {
  iconStyle: { fontSize: 24, '&:hover': { transform: 'scale(1.2)' } },
  divider: { backgroundColor: 'white', width: 221, margin: 0 },
};

const data = [
  {
    name: 'Dashboard',
    icon: <HomeRounded sx={style.iconStyle} />,
    method: () => {
      console.log('works');
    },
  },
  {
    name: 'Favourites',
    icon: <StarRounded sx={style.iconStyle} />,
    method: () => {
      console.log('works');
    },
    list: [],
  },
  {
    name: 'Order Management',
    icon: <ListRoundedIcon sx={style.iconStyle} />,
    method: () => {
      console.log('works');
    },
    list: [],
  },
  {
    name: 'Reporting',
    icon: <BarChartIcon sx={style.iconStyle} />,
    method: () => {
      console.log('works');
    },
    list: [],
  },
  {
    name: 'Recordings',
    icon: <MicRounded sx={style.iconStyle} />,
    method: () => {
      console.log('works');
    },
    list: [],
  },
  {
    name: 'Data Exports',
    icon: <DownloadRoundedIcon sx={style.iconStyle} />,
    method: () => {
      console.log('works');
    },
    list: [],
  },
  {
    name: 'Leads',
    icon: <GroupRoundedIcon sx={style.iconStyle} />,
    method: () => {
      console.log('works');
    },
    list: [
      {
        name: 'View Lead Status',
        method: () => {
          console.log('works');
        },
      },
      {
        name: 'Lead Reports',
        method: () => {
          console.log('works');
        },
      },
      {
        name: 'Lead Management',
        method: () => {
          console.log('works');
        },
      },
    ],
  },
  {
    name: 'Admin',
    icon: <SettingsRounded sx={style.iconStyle} />,
    method: () => {
      console.log('works');
    },
    list: [],
  },
];

const SideBar = () => {
  let { state } = useContextCustom();
  let expand = state.expand;

  return (
    <SideBarWrapper expand={expand}>
      <button className="outline-none border-none bg-transparent my-6 w-[98px] h-[50px]">
        <img
          src={require('../../assets/images/logo.png')}
          alt=""
          className=""
        />
      </button>
      <Divider variant="middle" sx={style.divider} />
      {data.map((item, idx) => {
        return <ExpandList item={item} key={idx} />;
      })}
    </SideBarWrapper>
  );
};

export default SideBar;
