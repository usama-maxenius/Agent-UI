import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Dropdown from './dropdown';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import FormControl from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// import DoneIcon from '@mui/icons-material/Done';
import InputIcon from './inputWithIcon';
import { RegularPoppin, MediumPoppin } from './styled/userDetails.style';

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
  maxWidth: 570,
  marginTop: '16px',
  overflow: 'unset',
};

let title = {
  color: '#161616',
  fontFamily: 'Poppins',
  fontWeight: 400,
  fontSize: '16px',
  marginTop: '15px',
};

function FormCard({ item, key }) {
  //   const [values, setValues] = React.useState({
  //     amount: '',
  //     password: '',
  //     weight: '',
  //     weightRange: '',
  //     showPassword: false,
  //   });
  //   const handleChange = (prop) => (event) => {
  //     setValues({ ...values, [prop]: event.target.value });
  //   };

  return (
    <Card sx={cardStyle} key={key}>
      <CardContent>
        {item.title && <Typography sx={title}>{item.title}</Typography>}

        {item.ticked && <InputIcon />}
        {item.HomeIcon && <InputIcon leftIcon={item.HomeIcon} />}
        {item.dropdown && <Dropdown item={item} />}
        {item.isDouble && (
          <DoubleInput>
            <Dropdown item={item} width={50} small={true} />
            <InputIcon width="48%" ml="10px" />
          </DoubleInput>
        )}
        {item.bottomLine && (
          <BottomLine>
            <RegularPoppin title blue>
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
