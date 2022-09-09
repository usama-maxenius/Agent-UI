import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  padding-left: 29px;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
const Title = styled.h3`
  color: #2541b2;
  font-family: 'Poppins';
  font-weight: 600;
`;
const Description = styled.div`
  color: #161616;
  font-family: 'Poppins';
  width: 519px;
`;
const RegularPoppin = styled.p`
  color: #161616;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
`;
const MediumPoppin = styled.span`
  color: #161616;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  margin: 0px;
`;
const RecordingDisclosed = styled.button`
  width: 388px;
  color: #f5f5f5;
  border-radius: 25px;
  background-color: #2541b2;
  font: normal normal 600 22px/30px IBM Plex Sans;
  text-align: center;
  padding: 11px;
  margin-top: 42px;
  border: 0px;
  outline: 0px;
  cursor: pointer;
`;

export {
  MainWrapper,
  Title,
  Description,
  RegularPoppin,
  MediumPoppin,
  RecordingDisclosed,
};
