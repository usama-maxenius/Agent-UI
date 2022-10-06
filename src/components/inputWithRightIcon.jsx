import * as React from 'react';
import styled from 'styled-components';
import DoneIcon from '@mui/icons-material/Done';
import PropTypes from 'prop-types';

const Input = styled.input`
  width: ${(props) =>
    props.isDouble ? '90%' : props.width ? props.width : '83%'};
  height: 52px;
  background: white;
  color: #2541b2;
  background: #fafafa 0% 0% no-repeat padding-box;
  outline: none;
  margin-top: 26px;
  border: 1px solid #2541b2;
  border-radius: 8px;
  padding-right: 30px;
  padding-left: 10px;
  font-size: ${(props) => (props.callerID ? '16px' : '20px')};
  font-family: ${(props) => props.callerID && 'Poppins'};
  font-weight: ${(props) => props.callerID && '400'};
  ::placeholder {
    font-size: 16px;
    font-family: Poppins;
    font-weight: 400;
  }
`;
const Wrapper = styled.div`
  margin-left: ${(props) => props.isDouble && '20px'};
  width: ${(props) => props.isDouble && '316px'};
`;
InputIcon.propTypes = {
  isDouble: PropTypes.bool,
};
export default function InputIcon({
  isDouble,
  callerID,
  placeholder,
  width,
  Icon,
  setState,
  state,
  name,
  inputType,
}) {
  let icon = {
    color: '#2541B2',
    position: 'relative',
    fontSize: callerID ? '24px' : '28px',
    top: '-5px',
    left: callerID ? '-30px' : '-40px',
  };

  return (
    <Wrapper isDouble={isDouble}>
      <Input
        isDouble={isDouble}
        placeholder={placeholder ? placeholder : 'Your First Name'}
        callerID={callerID}
        width={width}
        name={name}
        type={inputType ? inputType : 'text'}
        onChange={(e) => {
          setState({
            ...state,
            [e.target.name]: e.target.value,
          });
        }}
      />
      {Icon ? Icon : <DoneIcon sx={icon} />}
    </Wrapper>
  );
}
