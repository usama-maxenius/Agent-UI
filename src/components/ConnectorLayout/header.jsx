import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useContextCustom } from '../../store/context';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
const HeaderWrapper = styled(Paper)(() => ({
  backgroundColor: '#FFFFFF',
  textAlign: 'center',
  color: '#161616',
  width: '100%',
  height: '63px',
  borderRadius: 0,
  paddingLeft: 281,
  paddingRight: 84,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2,
  boxShadow: 'none',
}));

const Header = () => {
  let expand = useContextCustom().state.expand;

  return (
    <HeaderWrapper expand={expand}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <p className="font-Poppin text-cta font-semibold text-blue flex flex-row items-center ">
            <img
              className="w-7 h-7 rounded-full mr-1.5"
              src={require('../../assets/images/avatar.png')}
              alt="Rounded avatar"
            />
            Peter Parker
          </p>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <div className="flex flex-row items-center justify-end">
            <div className="iconInput p-0.5 border border-[#2541B240] rounded-box w-[144px] flex flex-row items-center">
              <input
                type="text"
                className="outline-none ml-2 w-[100px] border-none text-small"
              />
              <SearchRoundedIcon className="text-[#8a8a8a]" />
            </div>
            <button className="ml-[30px]">
              <ManageAccountsRoundedIcon className="text-[#8a8a8a]" />
            </button>
            <button className="ml-[30px]">
              <LogoutRoundedIcon className="text-[#8a8a8a]" />
            </button>
          </div>
        </Grid>
      </Grid>
    </HeaderWrapper>
  );
};

export default Header;
