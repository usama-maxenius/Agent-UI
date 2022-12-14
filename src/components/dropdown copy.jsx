/* eslint-disable no-unused-vars */
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getAllCities } from '../store/action';

const Select = styled.select`
  width: ${(props) =>
    props.width ? '130px' : props.specificWidth ? '99%' : '83%'};
  margin-right: 10px;
  height: 52px;
  background: white;
  color: ${(props) => (props.selected ? '#2541B2' : 'gray')};
  padding-left: ${(props) => (props.selected ? '10px' : '35px')};
  font-size: 14px;
  background: #fafafa 0% 0% no-repeat padding-box;
  outline: none;
  margin-top: 2px;
  margin-left: 0px;
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
  left: '30px',
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
export default function Dropdown({
  item,
  width,
  center,
  setState,
  state,
  name,
  options,
  noIcon,
  removeClockIcon,
}) {
  let [selected, setSelected] = React.useState(false);
  let { states, search_identifier } = useSelector((store) => store.InitReducer);
  let dispatch = useDispatch();
  React.useEffect(() => {
    if (selected) {
      if (name == 'state') {
        dispatch(getAllCities(selected));
      }
    }
  }, [selected]);
  return (
    <DropdownWrapper style={{ border: '2px solid red' }} center={center}>
      {item.iconWifi ? (
        <WifiRoundedIcon sx={!selected ? icon : [display, icon]} />
      ) : item.iconCalendar ? (
        <CalendarMonthRoundedIcon sx={!selected ? icon : [display, icon]} />
      ) : item.iconMilitary ? (
        <MilitaryTechOutlinedIcon sx={!selected ? icon : [display, icon]} />
      ) : item.iconClock ? (
        <QueryBuilderRoundedIcon sx={!selected ? icon : [display, icon]} />
      ) : noIcon ? (
        <QueryBuilderRoundedIcon sx={[icon]} />
      ) : removeClockIcon ? (
        <></>
      ) : (
        <SchoolOutlinedIcon sx={!selected ? icon : [display, icon]} />
      )}
      <Select
        selected={selected}
        name={name}
        onChange={(e) => {
          setSelected(e.target.value);
          dispatch({
            type: 'USER_DETAILS',
            payload: { ...state, [e.target.name]: e.target.value },
          });
          setState({
            ...state,
            [e.target.name]: e.target.value,
          });
        }}
        width={width}
        center={center}
      >
        {!['state', 'city'].includes(name) &&
          item.options.map((ele, idx) => {
            return (
              <option value={ele.value} hidden key={idx}>
                {ele.name}
              </option>
            );
          })}
        {name === 'state' &&
          states &&
          states.states.map((ele, idx) => {
            return (
              <option value={ele.name} hidden key={idx}>
                {ele.name}
              </option>
            );
          })}
        {name == 'city' &&
          options &&
          (options.length > 0 ? (
            options.map((ele, idx) => {
              return (
                <option value={ele} hidden key={idx}>
                  {ele}
                </option>
              );
            })
          ) : (
            <option>Selected State has 0 City</option>
          ))}
      </Select>
    </DropdownWrapper>
  );
}
