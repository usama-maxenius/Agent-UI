import * as React from 'react';
import styled from 'styled-components';
import SchoolIcon from '@mui/icons-material/School';
import PropTypes from 'prop-types';

const Select = styled.select`
  width: ${(props) => (props.width ? '135px' : '83%')};
  height: 52px;
  background: white;
  color: ${(props) => (props.selected ? '#2541B2' : 'gray')};
  padding-left: ${(props) => (props.selected ? '10px' : '35px')};
  font-size: 14px;
  background: #fafafa 0% 0% no-repeat padding-box;
  outline: none;
  margin-top: 26px;
  margin-left: -25px;
  border: ${(props) =>
    props.width ? '1px solid #2541B2' : '1px solid #16161640'};
  border-radius: 8px;
  width: ${(props) => props.center && '100%'};
  margin-top: ${(props) => props.center && '0px'};
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
const DropdownWrapper = styled.div`
  width: ${(props) => props.center && '95%'};
  margin: ${(props) => props.center && 'auto'};
`;
let icon = {
  color: '#16161680',
  position: 'relative',

  left: '4px',
  width: '25px',
};
let display = {
  visibility: 'hidden',
  width: '25px',
};

Dropdown.propTypes = {
  item: PropTypes.object,
  width: PropTypes.number,
  center: PropTypes.bool,
};
export default function Dropdown({ item, width, center }) {
  let [selected, setSelected] = React.useState(false);

  return (
    <DropdownWrapper center={center}>
      <SchoolIcon sx={!selected ? icon : [display, icon]} />
      <Select
        selected={selected}
        onChange={(e) => setSelected(e.target.value)}
        width={width}
        center={center}
      >
        {item.options.map((ele, idx) => {
          return (
            <option value={ele.value} hidden key={idx}>
              {ele.name}
            </option>
          );
        })}
      </Select>
    </DropdownWrapper>
  );
}
