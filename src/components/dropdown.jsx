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
  border: ${(props) =>
    props.width ? '1px solid #2541B2' : '1px solid #16161640'};
  border-radius: 8px;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
let icon = {
  color: '#16161680',
  position: 'relative',
  top: '7px',
  left: '-438px',
};

Dropdown.propTypes = {
  item: PropTypes.object,
  width: PropTypes.number,
};
export default function Dropdown({ item, width, small }) {
  let [selected, setSelected] = React.useState(false);

  return (
    <React.Fragment>
      <Select
        selected={selected}
        onChange={(e) => setSelected(e.target.value)}
        width={width}
      >
        {item.options.map((ele, idx) => {
          return (
            <option value={ele.value} hidden key={idx}>
              {ele.name}
            </option>
          );
        })}
      </Select>
      {!selected && <SchoolIcon sx={[icon, small]} />}
    </React.Fragment>
  );
}
