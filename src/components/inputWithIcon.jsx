import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DoneIcon from '@mui/icons-material/Done';
import { HomeRounded } from '@mui/icons-material';

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : '75%')};
  height: 48px;
  background: white;
  color: ${(props) => (props.leftIcon ? '#16161640' : '#2541b2')};
  padding-left: ${(props) => (props.leftIcon ? '42px' : '10px')};
  font-size: 20px;
  background: #fafafa 0% 0% no-repeat padding-box;
  outline: none;
  margin-top: 26px;
  border: ${(props) =>
    props.leftIcon ? '1px solid #16161640' : '1px solid #2541b2'};
  border-radius: 8px;
  padding-right: ${(props) => (props.leftIcon ? '0px' : '30px')};
  margin-left: ${(props) => props.leftIcon && '-21px'};
  margin-left: ${(props) => props.ml && props.ml};
`;
let icon = {
  color: '#2541B2',
  position: 'relative',
  fontSize: '28px',
  top: '7px',
  left: '-40px',
};
let leftIconStyle = {
  color: '#16161640',
  position: 'relative',
  fontSize: '22px',
  top: '5px',
  left: '10px',
};

InputIcon.propTypes = {
  leftIcon: PropTypes.bool,
  ml: PropTypes.string,
};
export default function InputIcon({ leftIcon, width, ml }) {
  return (
    <React.Fragment>
      {leftIcon ? (
        <>
          <HomeRounded sx={leftIconStyle} />
          <Input leftIcon />
        </>
      ) : (
        <>
          <Input width={width} ml={ml} />
          <DoneIcon sx={icon} />
        </>
      )}
    </React.Fragment>
  );
}
