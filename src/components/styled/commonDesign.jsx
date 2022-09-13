import styled from 'styled-components';

let ExpandedText = styled.div`
  height: 170px;
  width: 542px;
  background-color: #fafafa;
  color: #161616;
  padding: 16px;
  margin: auto;
  border-radius: 8px;
`;
const MediumPoppin22 = styled.span`
  color: ${(props) => (props.color ? props.color : '#2541b2')};
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 22px;
`;
const MediumPoppin16 = styled.span`
  color: ${(props) => (props.color ? props.color : '#161616')};
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  margin-right: 10px;
`;
const WrappingDropdown = styled.span`
  margin: auto;
  width: 100%;
  margin-left: 20px;
`;

export { ExpandedText, MediumPoppin22, MediumPoppin16, WrappingDropdown };
