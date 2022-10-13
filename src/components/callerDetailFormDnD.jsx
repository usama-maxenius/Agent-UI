import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import InputWithRightIcon from './inputWithRightIcon';
import DropDownWithIcon from './dropdownWithSearch';
import { useContextCustom } from '../store/context';
import DropdownAndInput from './doubleInput';
import { classNames } from '../helper/classNames';
import FormCard from './Card';

function generateArrayOfYears(firstString) {
  var max = new Date().getFullYear();
  var min = max - 47;
  var years = [{ name: firstString, value: '0' }];

  for (var i = max; i >= min; i--) {
    years.push({ name: i, value: i });
  }
  return years;
}

let data = [
  {
    id: '1',
    placeholder: 'Firstly, what year did you graduate from high school?',
    options: generateArrayOfYears('High School Graduation year'),
    dropdown: true,
    name: 'hsyear',
  },
  {
    id: '2',
    placeholder: 'And that was in the US?',
    options: [
      { name: 'Graduated in the US?', value: '0' },
      { name: 'Yes', value: 'yes' },
      { name: 'No', value: 'no' },
    ],
    dropdown: true,
    name: 'graduated_in_us',
  },
  {
    id: '3',
    placeholder: 'And just to check, you are a US Citizen?',
    options: [
      { name: 'US Citizen?', value: '0' },
      { name: 'Yes', value: 'yes' },
      { name: 'No', value: 'no' },
    ],
    dropdown: true,
    name: 'us_citizen',
  },
  {
    id: '4',
    placeholder:
      'Great, can I ask is high school the highest level of education you’ve completed?',
    options: [
      { name: 'Highest level of education', value: '0' },
      { name: 'Doctoral', value: 'Doctoral' },
      { name: 'Masters', value: 'Masters' },
      { name: 'Bachelors', value: 'Bachelors' },
      { name: 'Associates', value: 'Associates' },
      {
        name: 'Some College 31-60 Credits',
        value: 'Some College 31-60 Credits',
      },
      {
        name: 'Some College 11-30 Credits',
        value: 'Some College 11-30 Credits',
      },
      { name: 'Some College 1-10 Credits', value: 'Some College 1-10 Credits' },
      { name: 'High School Diploma', value: 'High School Diploma' },
      { name: 'GED', value: 'GED' },
      {
        name: 'No High School Diploma or GED',
        value: 'No High School Diploma or GED',
      },
    ],
    dropdown: true,
    name: 'current_education_level',
  },
  {
    id: '5',
    placeholder: 'Do you have unrestricted access to a computer and internet?',
    options: [
      { name: 'Internet access?', value: '0' },
      { name: 'Yes', value: 'yes' },
      { name: 'No', value: 'no' },
    ],
    dropdown: true,
    name: 'computer_internet_access',
    iconWifi: true,
  },

  {
    id: '6',
    placeholder: 'And what year were you born?',
    options: generateArrayOfYears('Birth Year'),
    dropdown: true,
    name: 'age',
    iconCalendar: true,
  },
  {
    id: '7',
    placeholder: 'Are you associated with the military at all?',
    options: [
      { name: 'Military association', value: '0' },
      { name: 'Yes', value: 'yes' },
      { name: 'No', value: 'no' },
    ],
    dropdown: true,
    name: 'military_status',
    iconMilitary: true,
  },
  {
    id: '8',
    placeholder:
      'Okay, and have you been in contact with any Schools in the past 6 months?',
    options: [
      { name: 'In contact with schools?', value: '2' },
      { name: 'Yes', value: '0' },
      { name: 'No', value: '1' },
    ],
    name: 'is_contacted_by_school',
    dropdown: true,
  },

  {
    id: '9',
    placeholder: 'Please tell me the area of study you’re interested in:',
    options: [
      { name: 'Area of study', value: 'Area of study' },
      { name: 'Art & Design', value: 'Art & Design' },
      { name: 'Business', value: 'Business' },
      { name: 'Computers & Technology', value: 'Computers & Technology' },
      { name: 'Criminal Justice', value: 'Criminal Justice' },
      { name: 'Culinary', value: 'Culinary' },
      { name: 'Education & Teaching', value: 'Education & Teaching' },
      { name: 'Entertainment', value: 'Entertainment' },
      { name: 'Health & Wellness', value: 'Health & Wellness' },
      { name: 'Hospitality', value: 'Hospitality' },
      { name: 'Language', value: 'Language' },
      { name: 'Legal & Paralegal', value: 'Legal & Paralegal' },
      { name: 'Liberal Arts', value: 'Liberal Arts' },
      {
        name: 'Massage And Physical Therapy',
        value: 'Massage And Physical Therapy',
      },
      { name: 'Nursing', value: 'Nursing' },
      { name: 'Psychology And Counseling', value: 'Psychology And Counseling' },
      { name: 'Religious Studies', value: 'Religious Studies' },
      { name: 'Science & Engineering', value: 'Science & Engineering' },
      { name: 'Trade & Vo-Tech', value: 'Trade & Vo-Tech' },
    ],
    dropdown: true,
    name: 'areas_of_interest',
  },
  {
    id: '10',
    placeholder:
      'Aside from <interest> is there another area of study you’re interested in?',
    options: [
      { name: 'Area of study', value: 'Area of study' },
      { name: 'Art & Design', value: 'Art & Design' },
      { name: 'Business', value: 'Business' },
      { name: 'Computers & Technology', value: 'Computers & Technology' },
      { name: 'Criminal Justice', value: 'Criminal Justice' },
      { name: 'Culinary', value: 'Culinary' },
      { name: 'Education & Teaching', value: 'Education & Teaching' },
      { name: 'Entertainment', value: 'Entertainment' },
      { name: 'Health & Wellness', value: 'Health & Wellness' },
      { name: 'Hospitality', value: 'Hospitality' },
      { name: 'Language', value: 'Language' },
      { name: 'Legal & Paralegal', value: 'Legal & Paralegal' },
      { name: 'Liberal Arts', value: 'Liberal Arts' },
      {
        name: 'Massage And Physical Therapy',
        value: 'Massage And Physical Therapy',
      },
      { name: 'Nursing', value: 'Nursing' },
      { name: 'Psychology And Counseling', value: 'Psychology And Counseling' },
      { name: 'Religious Studies', value: 'Religious Studies' },
      { name: 'Science & Engineering', value: 'Science & Engineering' },
      { name: 'Trade & Vo-Tech', value: 'Trade & Vo-Tech' },
    ],
    dropdown: true,
    name: 'another_areas_of_interest',
  },
  {
    id: '11',
    placeholder: 'Any other area of study?',
    options: [
      { name: 'Area of study', value: 'Area of study' },
      { name: 'Art & Design', value: 'Art & Design' },
      { name: 'Business', value: 'Business' },
      { name: 'Computers & Technology', value: 'Computers & Technology' },
      { name: 'Criminal Justice', value: 'Criminal Justice' },
      { name: 'Culinary', value: 'Culinary' },
      { name: 'Education & Teaching', value: 'Education & Teaching' },
      { name: 'Entertainment', value: 'Entertainment' },
      { name: 'Health & Wellness', value: 'Health & Wellness' },
      { name: 'Hospitality', value: 'Hospitality' },
      { name: 'Language', value: 'Language' },
      { name: 'Legal & Paralegal', value: 'Legal & Paralegal' },
      { name: 'Liberal Arts', value: 'Liberal Arts' },
      {
        name: 'Massage And Physical Therapy',
        value: 'Massage And Physical Therapy',
      },
      { name: 'Nursing', value: 'Nursing' },
      { name: 'Psychology And Counseling', value: 'Psychology And Counseling' },
      { name: 'Religious Studies', value: 'Religious Studies' },
      { name: 'Science & Engineering', value: 'Science & Engineering' },
      { name: 'Trade & Vo-Tech', value: 'Trade & Vo-Tech' },
    ],
    dropdown: true,
    name: 'any_other_areas_of_interest',
  },
  {
    id: '12',
    placeholder:
      'Wow, great! And when you go back to school, are you looking for campus, online, or would you consider both options?',
    options: [
      { name: 'Location preference', value: '0' },
      { name: 'Either', value: 'either' },
      { name: 'Online', value: 'Online' },
      { name: 'Campus', value: 'Campus' },
    ],
    dropdown: true,
    name: 'online_or_campus',
  },
  {
    id: '13',
    placeholder:
      'If you found the right school and program, would you be ready within 3 months?',
    options: [
      { name: 'Enrolment timeline', value: '0' },
      { name: 'Yes', value: 'yes' },
      { name: 'No', value: 'no' },
    ],
    dropdown: true,
    name: 'can_complete_enrollment',
    iconCalendar: true,
  },

  {
    id: '14',
    options: [
      { name: 'Gender', value: '1' },
      { name: 'Male', value: 'm' },
      { name: 'Female', value: 'f' },
    ],
    isDouble: true,
    name1: 'gender',
    name2: 'first_name',
    iconHidden: true,
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
    placeholder:
      'Perfect, and when would be the best time for you to receive a call?',
    options: [
      { name: 'Time to contact', value: '1' },
      { name: 'Morning', value: 'morning' },
      { name: 'Noon', value: 'noon' },
      { name: 'Afternoon', value: 'afternoon' },
      { name: 'Evening', value: 'evening' },
    ],
    dropdown: true,
    name: 'time_to_call',
    iconClock: true,
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
    placeholder: 'Great, and lastly is what is your address?',
    dropdown: true,
    HomeIcon: true,
    isDouble: false,
    doubleHalf: true,
    titleName: 'Street address',
    name: 'state',
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
    { name: 'Area of study', value: '1' },
    { name: '2022', value: '2' },
  ],
  isDouble: true,
  noPad: true,
};

function App() {
  const [dndItems, setDND] = useState(data);
  const [value, setValue] = useState();
  const { state } = useContextCustom();

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(dndItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setDND(items);
  }

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
                {dndItems.map(
                  (
                    { id, dropdown, placeholder, doubleHalf, isDouble },
                    index
                  ) => {
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
                                    options={[]}
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
                                  name={''}
                                />
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
                                <FormCard item={item} key={id} />
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
                                  />
                                </div>
                              </div>
                            )}
                          </li>
                        )}
                      </Draggable>
                    );
                  }
                )}
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
