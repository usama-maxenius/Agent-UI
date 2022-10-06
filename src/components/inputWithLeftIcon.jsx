import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HomeRounded } from '@mui/icons-material';

const Input = styled.input`
  width: 83%;
  height: 50px;
  background: white;
  color: #16161640;
  padding-left: 42px;
  font-size: 20px;
  background: #fafafa 0% 0% no-repeat padding-box;
  outline: none;
  margin-top: 26px;
  border: 1px solid #16161640;
  border-radius: 8px;
  padding-right: 0px;
  margin-left: -21px;
  &::placeholder {
    color: #161616;
    font-size: 14px;
    opacity: 0.5;
    font-family: 'Poppins';
    font-weight: 400;
  }
`;

let leftIconStyle = {
  color: '#16161640',
  position: 'relative',
  fontSize: '22px',
  top: '-3px',
  left: '10px',
};

InputIcon.propTypes = {
  item: PropTypes.object,
};
export default function InputIcon({ item, setState, state, name }) {
  return (
    <React.Fragment>
      <HomeRounded sx={leftIconStyle} />
      <Input
        placeholder={item.placeholder}
        name={name}
        onChange={(e) => {
          setState({
            ...state,
            [e.target.name]: e.target.value,
          });
        }}
      />
    </React.Fragment>
  );
}
