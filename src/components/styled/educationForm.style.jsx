/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  padding-left: ${(props) => (props.rightDrawerCaller ? '0px' : '29px')};
  padding-top: 10px;
  flex-direction: column;
  height: calc(100% - 10px);
  width: 595px;
  overflow-y: ${(props) => (props.rightDrawerCaller ? 'hidden' : 'scroll')};
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const MediumPoppin = styled.span`
  color: ${(props) => (props.color ? props.color : '#2541b2')};
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 22px;
`;
const FormHeader = styled.div`
  font: normal normal 600 22px/30px IBM Plex Sans;
  margin-top: 22px;
  padding-left: 20px;
`;
const IconWrapper = styled.div`
  margin-top: 22px;
  text-align: right;
  // position:fixed;
`;
const IconButton = styled.button`
  &:hover {
    color: #2541b2;
  }
  margin-left: 10px;
  background: none;
  border: none;
  outline: none;
`;

export { MainWrapper, MediumPoppin, FormHeader, IconWrapper, IconButton };
