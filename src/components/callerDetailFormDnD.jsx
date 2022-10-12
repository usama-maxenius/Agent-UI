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
const formItems = [
  {
    id: '1',
    title: 'Firstly, what year did you graduate from high school?',
    options: generateArrayOfYears('High School Graduation year'),
    dropdown: true,
    name: 'hsyear',
  },
  {
    id: '2',
    title: 'And that was in the US?',
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
    title: 'And just to check, you are a US Citizen?',
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
    title:
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
    title: 'Do you have unrestricted access to a computer and internet?',
    options: [
      { name: 'Internet access?', value: '0' },
      { name: 'Yes', value: 'yes' },
      { name: 'No', value: 'no' },
    ],
    dropdown: true,
    name: 'computer_internet_access',
    iconWifi: true,
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
  const [dndItems, setDND] = useState(formItems);
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
