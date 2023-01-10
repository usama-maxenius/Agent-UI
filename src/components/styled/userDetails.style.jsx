import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100%-52px);
  margin-top: 42px;
`;
const RegularPoppin = styled.div`
  color: ${(props) => (props.title == 'true' ? '#161616' : '#2541B2')};
  color: ${(props) => props.blue && '#2541B2'};
  font-family: 'Poppins';
  font-weight: 400;
  text-transform: ${(props) =>
    props.values == 'true' ? 'lowercase' : 'capitalize'};
  font-size: ${(props) => (props.title ? '10px' : '16px')};
`;
const MediumPoppin = styled.span`
  color: #2541b2;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  margin-right: 10px;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* height: 64px; */}
  padding: 15px 0 0;
  line-break: anywhere;
  &:hover {
    cursor: pointer;
  }
`;

export { MainWrapper, RegularPoppin, ItemWrapper, MediumPoppin };
