import * as React from 'react';
import styled from 'styled-components';
import DoneIcon from '@mui/icons-material/Done';
import PropTypes from 'prop-types';

const Input = styled.input`
  width: ${(props) => (props.isDouble ? '90%' : '84%')};
  height: 48px;
  background: white;
  color: #2541b2;
  font-size: 20px;
  background: #fafafa 0% 0% no-repeat padding-box;
  outline: none;
  margin-top: 26px;
  border: 1px solid #2541b2;
  border-radius: 8px;
  padding-right: 30px;
  padding-left: 10px;
`;
const Wrapper = styled.div`
  margin-left: ${(props) => props.isDouble && '20px'};
`;
let icon = {
  color: '#2541B2',
  position: 'relative',
  fontSize: '28px',
  top: '-5px',
  left: '-40px',
};
InputIcon.propTypes = {
  isDouble: PropTypes.bool,
};
export default function InputIcon({ isDouble }) {
  return (
    <Wrapper isDouble={isDouble}>
      <Input isDouble={isDouble} />
      <DoneIcon sx={icon} />
    </Wrapper>
  );
}
