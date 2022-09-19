import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import InputWithRightIcon from './inputWithRightIcon';
import DropDownWithIcon from './dropdownWithSearch';
import { useContextCustom } from '../store/context';
import DropdownAndInput from './doubleInput';
import { classNames } from '../helper/classNames';
import FormCard from './Card';

const formItems = [
  {
    id: '1',
    placeholder: 'Male',
    dropdown: true,
  },
  {
    id: '2',
    placeholder: 'Angel',
    dropdown: false,
  },
  {
    id: '3',
    placeholder: 'Rubio',
    dropdown: false,
  },
  {
    id: '4',
    placeholder: 'Art & Design',
    dropdown: true,
  },
  {
    id: '5',
    placeholder: 'Education',
    dropdown: true,
  },
  {
    id: '32',
    placeholder: 'Education',
    isDouble: true,
  },
  {
    id: '6',
    placeholder: 'Additional area of study',
    dropdown: true,
  },
  {
    id: '7',
    placeholder: '929-205-3200',
    dropdown: false,
  },
  {
    id: '8',
    placeholder: 'Time to contact',
    dropdown: true,
  },
  {
    id: '9',
    placeholder: 'Angel.rubio@gmail.com',
    dropdown: false,
  },
  {
    id: '10',
    placeholder: '10 Hudson Yards',
    dropdown: false,
  },
  {
    id: '11',
    placeholder: 'New York',
    dropdown: true,
  },
  {
    id: '12',
    placeholder: '2002 (year of birth)',
    dropdown: true,
  },
  {
    id: '13',
    placeholder: 'Yes (US Citizen)',
    dropdown: true,
  },
  {
    id: '14',
    placeholder: '2021 (HS Graduation year)',
    dropdown: true,
  },
  {
    id: '15',
    placeholder: 'High School',
    dropdown: true,
  },
  {
    id: '16',
    placeholder: 'No (military association)',
    dropdown: true,
  },
  {
    id: '17',
    placeholder: 'Not in contact with Schools',
    dropdown: true,
  },
  {
    id: '18',
    placeholder: 'Yes (internet access)',
    dropdown: true,
  },
  {
    id: '19',
    placeholder: 'Online & campus',
    dropdown: true,
  },
  {
    id: '20',
    placeholder: 'Enrolment timeline',
    dropdown: true,
  },
  {
    id: '21',
    placeholder: 'Enrolment timeline',
    doubleHalf: true,
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
                                <DropdownAndInput width={true} />
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
