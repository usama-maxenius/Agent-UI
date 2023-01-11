import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DoubleHalfWidth from './doubleInput';
import Dropdown from './dropdown';
import InputLeftIcon from './inputWithLeftIcon';
import InputRightIcon from './inputWithRightIcon';
import { MediumPoppin, RegularPoppin } from './styled/userDetails.style';

const DoubleInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -15px;
`;
const BottomLine = styled.div`
  width: 100%;
  margin-top: 15px;
`;

let cardStyle = {
  width: 570,
  marginTop: '16px',
  overflow: 'unset',
  boxShadow: 'none',
};

let title = {
  color: '#161616',
  fontFamily: 'Poppins',
  fontWeight: 400,
  fontSize: '16px',
  marginTop: '15px',
};

function FormCard({ item, myKey, setState, state }) {
  return (
    <Card
      sx={[
        cardStyle,
        item.noPad && { padding: 0, paddingBottom: '0 !important' },
        item.noBackground && { backgroundColor: 'transparent' },
      ]}
      key={myKey}
    >
      <CardContent
        sx={
          item.noPad && {
            padding: 0,
            paddingBottom: '0 !important',
          }
        }
      >
        {item.title && <Typography sx={title}>{item.title}</Typography>}

        <div className={item?.styleClasses + ' ' + item?.styleHeight}>
          {item.ticked && (
            <InputRightIcon
              setState={setState}
              state={state}
              name={item.name}
              placeholder={item.placeholder}
            />
          )}
          {item.HomeIcon && (
            <InputLeftIcon
              item={item}
              setState={setState}
              state={state}
              widthControl={true}
              name={item.HomeIconName}
            />
          )}

          {item.dropdown && (
            <Dropdown
              item={item}
              setState={setState}
              state={state}
              name={item.name}
              options={false}
              Icon={item.Icon}
            />
          )}
          {item.isDouble && (
            <DoubleInput>
              <Dropdown
                item={item}
                width={50}
                setState={setState}
                state={state}
                name={item.name1}
                noIcon={item.noIcon}
                removeClockIcon={item.iconHidden}
              />
              <InputRightIcon
                isDouble={item.isDouble}
                setState={setState}
                state={state}
                name={item.name2}
                placeholder={item.placeholder}
              />
            </DoubleInput>
          )}
          {item.doubleHalf && (
            <DoubleHalfWidth
              setState={setState}
              state={state}
              item={item}
              placeholder={item.placeholder}
            />
          )}
        </div>
        {item.bottomLine && (
          <BottomLine>
            <RegularPoppin title="true" blue>
              If the line is bad or you just need to check, you can check the
              spelling using phonetics
            </RegularPoppin>
            <MediumPoppin> Romeo</MediumPoppin>
            <MediumPoppin> Uniform</MediumPoppin>
            <MediumPoppin> Bravo</MediumPoppin>
            <MediumPoppin> India</MediumPoppin>
            <MediumPoppin> Oscar</MediumPoppin>
          </BottomLine>
        )}
      </CardContent>
    </Card>
  );
}
FormCard.propTypes = {
  item: PropTypes.object,
  key: PropTypes.number,
};

export default FormCard;
