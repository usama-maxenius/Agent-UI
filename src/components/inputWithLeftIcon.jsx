import { HomeRounded } from '@mui/icons-material';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Input = styled.input`
  width: ${(props) => (props.widthControl ? '82%' : `99%`)};
  height: 50px;
  background: white;
  color: #16161640;
  padding-left: 42px;
  margin-top: 10px;
  font-size: 20px;
  background: #fafafa 0% 0% no-repeat padding-box;
  outline: none;

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
export default function InputIcon({
  item,
  setState,
  state,
  name,
  widthControl,
}) {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <span>
        <HomeRounded sx={leftIconStyle} />
        <Input
          widthControl={widthControl}
          placeholder={item.placeholder}
          name={name}
          onChange={(e) => {
            dispatch({
              type: 'USER_DETAILS',
              payload: {
                ...state,
                [e.target.name]: e.target.value,
              },
            });
            setState({
              ...state,
              [e.target.name]: e.target.value,
            });
          }}
        />
      </span>
    </React.Fragment>
  );
}
