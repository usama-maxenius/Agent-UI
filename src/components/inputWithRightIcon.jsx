/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Input = styled.input`
  width: ${(props) =>
    props.isDouble ? '90%' : props.width ? props.width : '83%'};
  height: 52px;
  background: white;
  color: #2541b2;
  background: #fafafa 0% 0% no-repeat padding-box;
  outline: none;
  margin-top: ${(props) => (props.fromDND ? '0px' : '26px')};
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
  width: ${(props) => props.fromDND && '316px'};
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
  fromDND,
}) {
  let icon = {
    color: '#2541B2',
    // position: 'relative',
    fontSize: callerID ? '24px' : '28px',
    // top: '-5px',
    // left: callerID ? '-30px' : '-40px',
    width: '10%',
  };
  const dispatch = useDispatch();
  const [showIcon, setShowIcon] = useState(false);

  return (
    <div className="flex flex-row w-full rounded-box items-center bg-lightGray border border-[#16161640]  px-1.5 text-blue">
      <input
        className="bg-transparent h-[50px] outline-none w-[90%]"
        placeholder={placeholder ? placeholder : 'Your First Name'}
        name={name}
        type={inputType ? inputType : 'text'}
        onChange={(e) => {
          var checkString = /^[A-Za-z\s]+$/;
          // var phoneNo =
          //   /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
          var phoneNo = /^(1|)?(\d{3})(\d{3})(\d{4})$/;
          var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          var zipRegex = /^\d{5}(-\d{4})?$/;

          switch (e.target.name) {
            case 'first_name':
              if (e.target.value.match(checkString)) {
                setShowIcon(true);
              } else {
                setShowIcon(false);
              }
              break;
            case 'last_name':
              if (e.target.value.match(checkString)) {
                setShowIcon(true);
              } else {
                setShowIcon(false);
              }
              break;
            case 'phone':
              if (e.target.value.replace(/\D/g, '').match(phoneNo)) {
                setShowIcon(true);
              } else {
                setShowIcon(false);
              }
              break;
            case 'email':
              if (e.target.value.match(emailRegex)) {
                setShowIcon(true);
              } else {
                setShowIcon(false);
              }
              break;
            case 'zip_code':
              if (e.target.value.match(zipRegex)) {
                setShowIcon(true);
              } else {
                setShowIcon(false);
              }
              break;
          }
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
      {Icon ? Icon : showIcon ? <DoneRoundedIcon sx={icon} /> : ''}
    </div>
    // <Wrapper isDouble={isDouble} fromDND={fromDND}>
    //   <Input
    //     isDouble={isDouble}
    //     placeholder={placeholder ? placeholder : 'Your First Name'}
    //     callerID={callerID}
    //     fromDND={fromDND}
    //     width={width}
    // name={name}
    // type={inputType ? inputType : 'text'}
    // onChange={(e) => {
    //   setState({
    //     ...state,
    //     [e.target.name]: e.target.value,
    //   });
    // }}
    //   />
    //   {Icon ? Icon : <DoneIcon sx={icon} />}
    // </Wrapper>
  );
}
