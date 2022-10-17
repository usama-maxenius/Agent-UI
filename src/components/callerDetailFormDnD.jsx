/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import InputWithRightIcon from './inputWithRightIcon';
import DropDownWithIcon from './dropdownWithSearch';
import { useContextCustom } from '../store/context';
import DropdownAndInput from './doubleInput';
import { classNames } from '../helper/classNames';
import FormCard from './Card';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import InputIcon from './inputWithLeftIcon';
import { useSelector } from 'react-redux';

function generateArrayOfYears() {
  var max = new Date().getFullYear();
  var min = max - 47;
  var years = [];

  for (var i = max; i >= min; i--) {
    years.push({ OptionLabel: i, OptionValue: i });
  }
  return years;
}

let data = [
  {
    id: '1',
    placeholder: 'High School Graduation year',
    options: generateArrayOfYears(),
    dropdown: true,
    name: 'hsyear',
    Icon: (
      <SchoolOutlinedIcon
        className="text-gray mr-3"
        sx={{ fontSize: '1.6rem' }}
      />
    ),
  },
  {
    id: '2',
    placeholder: 'Graduated in the US?',
    options: [
      { OptionLabel: 'Yes', OptionValue: 'yes' },
      { OptionLabel: 'No', OptionValue: 'no' },
    ],
    dropdown: true,
    name: 'graduated_in_us',
    Icon: (
      <SchoolOutlinedIcon
        className="text-gray mr-3"
        sx={{ fontSize: '1.6rem' }}
      />
    ),
  },
  {
    id: '3',
    placeholder: 'US Citizen?',
    options: [
      { OptionLabel: 'Yes', OptionValue: 'yes' },
      { OptionLabel: 'No', OptionValue: 'no' },
    ],
    dropdown: true,
    name: 'us_citizen',
    Icon: (
      <SchoolOutlinedIcon
        className="text-gray mr-3"
        sx={{ fontSize: '1.6rem' }}
      />
    ),
  },
  {
    id: '4',
    placeholder: 'Highest level of education',
    options: [
      { OptionLabel: 'Doctoral', OptionValue: 'Doctoral' },
      { OptionLabel: 'Masters', OptionValue: 'Masters' },
      { OptionLabel: 'Bachelors', OptionValue: 'Bachelors' },
      { OptionLabel: 'Associates', OptionValue: 'Associates' },
      {
        OptionLabel: 'Some College 31-60 Credits',
        OptionValue: 'Some College 31-60 Credits',
      },
      {
        OptionLabel: 'Some College 11-30 Credits',
        OptionValue: 'Some College 11-30 Credits',
      },
      {
        OptionLabel: 'Some College 1-10 Credits',
        OptionValue: 'Some College 1-10 Credits',
      },
      {
        OptionLabel: 'High School Diploma',
        OptionValue: 'High School Diploma',
      },
      { OptionLabel: 'GED', OptionValue: 'GED' },
      {
        OptionLabel: 'No High School Diploma or GED',
        OptionValue: 'No High School Diploma or GED',
      },
    ],
    dropdown: true,
    name: 'current_education_level',
    Icon: (
      <SchoolOutlinedIcon
        className="text-gray mr-3"
        sx={{ fontSize: '1.6rem' }}
      />
    ),
  },
  {
    id: '5',
    placeholder: 'Internet access?',
    options: [
      { OptionLabel: 'Yes', OptionValue: 'yes' },
      { OptionLabel: 'No', OptionValue: 'no' },
    ],
    dropdown: true,
    name: 'computer_internet_access',
    Icon: (
      <WifiOutlinedIcon
        className="text-gray mr-3"
        sx={{ fontSize: '1.6rem' }}
      />
    ),
  },

  {
    id: '6',
    placeholder: 'Birth Year',
    options: generateArrayOfYears(),
    dropdown: true,
    name: 'age',
    iconCalendar: true,
    Icon: (
      <CalendarMonthRoundedIcon
        className="text-gray mr-3"
        sx={{ fontSize: '1.6rem' }}
      />
    ),
  },
  {
    id: '7',
    placeholder: 'Military association',
    options: [
      { OptionLabel: 'Yes', OptionValue: 'yes' },
      { OptionLabel: 'No', OptionValue: 'no' },
    ],
    dropdown: true,
    name: 'military_status',
    Icon: (
      <MilitaryTechOutlinedIcon
        className="text-gray mr-3"
        sx={{ fontSize: '1.6rem' }}
      />
    ),
  },
  {
    id: '8',
    placeholder: 'In contact with schools?',
    options: [
      { OptionLabel: 'Yes', OptionValue: '0' },
      { OptionLabel: 'No', OptionValue: '1' },
    ],
    name: 'is_contacted_by_school',
    dropdown: true,
    Icon: (
      <SchoolOutlinedIcon
        className="text-gray mr-3"
        sx={{ fontSize: '1.6rem' }}
      />
    ),
  },

  {
    id: '9',
    placeholder: 'Area of study',
    options: [
      { OptionLabel: 'Art & Design', OptionValue: 'Art & Design' },
      { OptionLabel: 'Business', OptionValue: 'Business' },
      {
        OptionLabel: 'Computers & Technology',
        OptionValue: 'Computers & Technology',
      },
      { OptionLabel: 'Criminal Justice', OptionValue: 'Criminal Justice' },
      { OptionLabel: 'Culinary', OptionValue: 'Culinary' },
      {
        OptionLabel: 'Education & Teaching',
        OptionValue: 'Education & Teaching',
      },
      { OptionLabel: 'Entertainment', OptionValue: 'Entertainment' },
      { OptionLabel: 'Health & Wellness', OptionValue: 'Health & Wellness' },
      { OptionLabel: 'Hospitality', OptionValue: 'Hospitality' },
      { OptionLabel: 'Language', OptionValue: 'Language' },
      { OptionLabel: 'Legal & Paralegal', OptionValue: 'Legal & Paralegal' },
      { OptionLabel: 'Liberal Arts', OptionValue: 'Liberal Arts' },
      {
        name: 'Massage And Physical Therapy',
        OptionValue: 'Massage And Physical Therapy',
      },
      { OptionLabel: 'Nursing', OptionValue: 'Nursing' },
      {
        OptionLabel: 'Psychology And Counseling',
        OptionValue: 'Psychology And Counseling',
      },
      { OptionLabel: 'Religious Studies', OptionValue: 'Religious Studies' },
      {
        OptionLabel: 'Science & Engineering',
        OptionValue: 'Science & Engineering',
      },
      { OptionLabel: 'Trade & Vo-Tech', OptionValue: 'Trade & Vo-Tech' },
    ],
    dropdown: true,
    name: 'areas_of_interest',
    Icon: (
      <SchoolOutlinedIcon
        className="text-gray mr-3"
        sx={{ fontSize: '1.6rem' }}
      />
    ),
  },
  {
    id: '10',
    placeholder: 'Area of study',
    options: [
      { OptionLabel: 'Art & Design', OptionValue: 'Art & Design' },
      { OptionLabel: 'Business', OptionValue: 'Business' },
      {
        OptionLabel: 'Computers & Technology',
        OptionValue: 'Computers & Technology',
      },
      { OptionLabel: 'Criminal Justice', OptionValue: 'Criminal Justice' },
      { OptionLabel: 'Culinary', OptionValue: 'Culinary' },
      {
        OptionLabel: 'Education & Teaching',
        OptionValue: 'Education & Teaching',
      },
      { OptionLabel: 'Entertainment', OptionValue: 'Entertainment' },
      { OptionLabel: 'Health & Wellness', OptionValue: 'Health & Wellness' },
      { OptionLabel: 'Hospitality', OptionValue: 'Hospitality' },
      { OptionLabel: 'Language', OptionValue: 'Language' },
      { OptionLabel: 'Legal & Paralegal', OptionValue: 'Legal & Paralegal' },
      { OptionLabel: 'Liberal Arts', OptionValue: 'Liberal Arts' },
      {
        name: 'Massage And Physical Therapy',
        OptionValue: 'Massage And Physical Therapy',
      },
      { OptionLabel: 'Nursing', OptionValue: 'Nursing' },
      {
        OptionLabel: 'Psychology And Counseling',
        OptionValue: 'Psychology And Counseling',
      },
      { OptionLabel: 'Religious Studies', OptionValue: 'Religious Studies' },
      {
        OptionLabel: 'Science & Engineering',
        OptionValue: 'Science & Engineering',
      },
      { OptionLabel: 'Trade & Vo-Tech', OptionValue: 'Trade & Vo-Tech' },
    ],
    dropdown: true,
    name: 'another_areas_of_interest',
    Icon: (
      <SchoolOutlinedIcon
        className="text-gray mr-3"
        sx={{ fontSize: '1.6rem' }}
      />
    ),
  },
  {
    id: '11',
    placeholder: 'Area of study',
    options: [
      { OptionLabel: 'Art & Design', OptionValue: 'Art & Design' },
      { OptionLabel: 'Business', OptionValue: 'Business' },
      {
        OptionLabel: 'Computers & Technology',
        OptionValue: 'Computers & Technology',
      },
      { OptionLabel: 'Criminal Justice', OptionValue: 'Criminal Justice' },
      { OptionLabel: 'Culinary', OptionValue: 'Culinary' },
      {
        OptionLabel: 'Education & Teaching',
        OptionValue: 'Education & Teaching',
      },
      { OptionLabel: 'Entertainment', OptionValue: 'Entertainment' },
      { OptionLabel: 'Health & Wellness', OptionValue: 'Health & Wellness' },
      { OptionLabel: 'Hospitality', OptionValue: 'Hospitality' },
      { OptionLabel: 'Language', OptionValue: 'Language' },
      { OptionLabel: 'Legal & Paralegal', OptionValue: 'Legal & Paralegal' },
      { OptionLabel: 'Liberal Arts', OptionValue: 'Liberal Arts' },
      {
        name: 'Massage And Physical Therapy',
        OptionValue: 'Massage And Physical Therapy',
      },
      { OptionLabel: 'Nursing', OptionValue: 'Nursing' },
      {
        OptionLabel: 'Psychology And Counseling',
        OptionValue: 'Psychology And Counseling',
      },
      { OptionLabel: 'Religious Studies', OptionValue: 'Religious Studies' },
      {
        OptionLabel: 'Science & Engineering',
        OptionValue: 'Science & Engineering',
      },
      { OptionLabel: 'Trade & Vo-Tech', OptionValue: 'Trade & Vo-Tech' },
    ],
    dropdown: true,
    name: 'any_other_areas_of_interest',
    Icon: (
      <SchoolOutlinedIcon
        className="text-gray mr-3"
        sx={{ fontSize: '1.6rem' }}
      />
    ),
  },
  {
    id: '12',
    placeholder: 'Location preference',
    options: [
      { OptionLabel: 'Either', OptionValue: 'either' },
      { OptionLabel: 'Online', OptionValue: 'Online' },
      { OptionLabel: 'Campus', OptionValue: 'Campus' },
    ],
    dropdown: true,
    name: 'online_or_campus',
    Icon: (
      <SchoolOutlinedIcon
        className="text-gray mr-3"
        sx={{ fontSize: '1.6rem' }}
      />
    ),
  },
  {
    id: '13',
    placeholder: 'Enrolment timeline',
    options: [
      { OptionLabel: 'Yes', OptionValue: 'yes' },
      { OptionLabel: 'No', OptionValue: 'no' },
    ],
    dropdown: true,
    name: 'can_complete_enrollment',
    iconCalendar: true,
    Icon: (
      <CalendarMonthRoundedIcon
        className="text-gray mr-3"
        sx={{ fontSize: '1.6rem' }}
      />
    ),
  },

  {
    id: '14',
    placeholder: 'First name',
    options: [
      { name: 'Gender', value: '1' },
      { name: 'Male', value: 'm' },
      { name: 'Female', value: 'f' },
    ],
    isDouble: true,
    name1: 'gender',
    name2: 'first_name',
    iconHidden: true,
    noPad: true,
  },
  {
    id: '15',
    placeholder: 'Just to check how your last name is spelled',
    ticked: true,
    bottomLine: true,
    name: 'last_name',
    titleName: 'Your last name',
  },
  {
    id: '16',
    placeholder:
      'In case we get disconnected is this the correct number so that I can call you back?',
    ticked: true,
    name: 'phone',
    titleName: 'Your phone number',
  },
  {
    id: '17',
    placeholder: 'Time to contact',
    options: [
      { OptionLabel: 'Morning', OptionValue: 'morning' },
      { OptionLabel: 'Noon', OptionValue: 'noon' },
      { OptionLabel: 'Afternoon', OptionValue: 'afternoon' },
      { OptionLabel: 'Evening', OptionValue: 'evening' },
    ],
    dropdown: true,
    name: 'time_to_call',
    iconClock: true,
    Icon: (
      <AccessTimeOutlinedIcon
        className="text-gray mr-3"
        sx={{ fontSize: '1.6rem' }}
      />
    ),
  },
  {
    id: '18',
    placeholder:
      'Great, now, before we get to the schools, is this your best email address?',
    ticked: true,
    name: 'email',
    titleName: 'Your email',
  },
  {
    id: '19',
    placeholder: 'Street Address',
    name: 'address_line1',
    homeIcon: true,
    Icon: (
      <AccessTimeOutlinedIcon
        className="text-gray mr-3"
        sx={{ fontSize: '1.6rem' }}
      />
    ),
  },
  {
    id: '20',
    placeholder: 'Select Your State',
    dropdown: true,
    name: 'state',
  },
  {
    id: '21',
    placeholder: 'Great, and lastly is what is your address?',
    doubleHalf: true,
    titleName: 'Street address',
    name: 'zip_code',
    HomeIconName: 'address_line1',
    name1: 'city',
    name2: 'zip_code',
    iconHidden: true,
    placeholderZip: 'Zip code',
    typeZip: 'number',
  },
];

let item = {
  options: [
    { name: 'Gender', value: '1' },
    { name: 'Male', value: 'm' },
    { name: 'Female', value: 'f' },
  ],
  isDouble: true,
  noPad: true,
  name: 'city',
  name1: 'city',
  name2: 'first_name',
  iconHidden: true,
};

function App() {
  const [dndItems, setDND] = useState(data);
  const [value, setValue] = useState();
  const { state } = useContextCustom();
  const { states, cities } = useSelector((state) => state.InitReducer);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(dndItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setDND(items);
  }
  console.log(value);

  const onChangeHandler = (prop) => {
    console.log(prop);
  };

  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="dndItems">
            {(provided) => (
              <ul
                className="dndItems"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {dndItems.map((element, index) => {
                  let {
                    id,
                    dropdown,
                    placeholder,
                    doubleHalf,
                    isDouble,
                    options,
                    Icon,
                    name,
                    homeIcon,
                  } = element;
                  if (name == 'state') {
                    options = states.states;
                  }
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {dropdown ? (
                            <div className="w-[477px] mt-4 flex flex-row justify-between items-center ml-[26px]">
                              {state.isDraggable && (
                                <ReorderRoundedIcon className="hover:text-blue text-base  mr-[13px]" />
                              )}
                              <div className="w-[443px]">
                                <DropDownWithIcon
                                  placeholder={placeholder}
                                  callerID={true}
                                  options={options ? options : states.states}
                                  recommendedIcon={false}
                                  Icon={Icon}
                                  setCallerState={setValue}
                                  callerState={value}
                                  name={name}
                                />
                              </div>
                            </div>
                          ) : doubleHalf ? (
                            <div
                              className={classNames(
                                'flex flex-row justify-between items-center ml-[26px]',
                                state.isDraggable ? 'w-[520px]' : 'w-[487px] '
                              )}
                            >
                              {state.isDraggable && (
                                <ReorderRoundedIcon className="hover:text-blue text-base  mr-[13px] mt-[26px]" />
                              )}
                              <DropdownAndInput
                                width={true}
                                setState={setValue}
                                state={value}
                                item={element}
                                name={name}
                              />
                            </div>
                          ) : homeIcon ? (
                            <div
                              className={classNames(
                                'flex flex-row justify-between items-center ml-[26px]',
                                state.isDraggable ? 'w-[520px]' : 'w-[487px] '
                              )}
                            >
                              {state.isDraggable && (
                                <ReorderRoundedIcon className="hover:text-blue text-base  mr-[13px] mt-[26px]" />
                              )}
                              <div
                                className={classNames(
                                  state.isDraggable
                                    ? '[&>input]:w-11/12 w-[482px]'
                                    : '[&>input]:w-11/12 w-[482px] '
                                )}
                              >
                                <InputIcon
                                  setState={setValue}
                                  state={value}
                                  name={name}
                                  item={{ placeholder }}
                                />
                              </div>
                            </div>
                          ) : isDouble ? (
                            <div
                              className={classNames(
                                'flex flex-row justify-between items-center ml-[26px]',
                                state.isDraggable ? 'w-[508px]' : 'w-[487px] '
                              )}
                            >
                              {state.isDraggable && (
                                <ReorderRoundedIcon className="hover:text-blue text-base  mr-[13px] mt-[26px]" />
                              )}
                              <FormCard
                                item={element}
                                key={id}
                                setState={setValue}
                                state={value}
                              />
                            </div>
                          ) : (
                            <div className="w-[560px] -mt-2.5 flex flex-row justify-between items-center ml-[26px]">
                              {state.isDraggable && (
                                <ReorderRoundedIcon className="hover:text-blue text-base mt-[26px] mr-[13px]" />
                              )}
                              <div className="w-[527px]">
                                <InputWithRightIcon
                                  callerID={true}
                                  placeholder={placeholder}
                                  width="84%"
                                  setState={setValue}
                                  state={value}
                                  name={name}
                                />
                              </div>
                            </div>
                          )}
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
