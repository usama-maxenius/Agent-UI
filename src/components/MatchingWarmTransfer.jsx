import { useState } from 'react';
import { Tab } from '@headlessui/react';
import ExpandableCard from './expandableCard';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  // clearPingTransfer,
  PingAPI,
  TransferAPI,
} from '../store/action/searchAPI';
import { useSearchParams, useLocation } from 'react-router-dom';
import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SchoolCards({ setPopUp }) {
  // useNavigate();
  const { state } = useLocation();

  const [selectedTab, setSelectedTab] = useState(state?.selectedTab ?? 0);

  let { schoolsList, pingResult, search_identifier_details, selectedSchools } =
    useSelector((store) => store.InitReducer);

  const categories = {
    ' Warm transfers': [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    ' Direct offers': [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    ' External transfers': [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  };

  let dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  // Methods for Tab 1
  const [selected, setSelected] = useState([]);
  const selectCard = (ind) => {
    let ele = ind;
    // if (
    //   selected.find(
    //     (item1) => item1?.result_identifier === ele?.result_identifier && ele
    //   )
    // ) {
    //   const removeItem = selected.filter(
    //     (item1) => item1?.result_identifier !== ele?.result_identifier
    //   );
    //   setSelected(removeItem);
    //   dispatch(clearPingTransfer());
    // }
    // if (
    // !selected.find(
    //     (item1) => item1?.result_identifier === ele?.result_identifier && ele
    //   )
    // ) {
    // if (selected.length < 1) {
    setSelected([...selected, ele]);
    dispatch(TransferAPI(ind, searchParams.get('search')));
    dispatch(PingAPI(ind, searchParams.get('search')));
    dispatch({
      type: 'SELECTED_SCHOOLS',
      payload: ind,
    });
    // }
  };

  // console.log(
  //   '🚀 ~ file: MatchingWarmTransfer.jsx:122 ~ //useEffect ~ selectedSchools',
  //   selectedSchools,
  //   search_identifier_details
  // );
  // useEffect(() => {

  // else
  // useEffect(() => {
  // setSelected(selectedSchools);
  if (selectedSchools.length && search_identifier_details) {
    // navigate(
    //   `/school/matches/submitMatch/?search=${search_identifier_details}`,
    //   {
    //     state: { selectedTab },
    //   }
    // );
  }
  // }, [selectedSchools]);

  // Methods for Tab2
  // const [program, setProgram] = useState(null);

  // const selectProgram = (prop) => {
  //   if (prop) {
  //     setProgram(prop);
  //     return;
  //   }
  //   if (!program) {
  //     setProgram(true);
  //   }
  // };

  const warmTransferOffers = schoolsList?.filter(
    (item) => item.result_type === 'transfer' && item
  );

  const externalOffers = schoolsList?.filter(
    (item) =>
      item.result_type !== 'lead' && item.result_type !== 'transfer' && item
  );

  // Write down offers related code --start
  /** Lead type offers */
  /** 1. filter lead type offers */
  const directOffers = schoolsList?.filter(
    (item) => item.result_type === 'lead' && item
  );

  /** 2. Merge Each school programs and generate array which showings schools and programs list in one object  */

  const uniqueSchoolsOfDirectOffers =
    directOffers &&
    Object.values(
      directOffers.reduce((acc, curr) => {
        curr.programs = []; // add new programs prop
        curr.programs.push({
          questions: curr.questions,
          name: curr.program,
        });
        if (!acc[curr.schoolid]) {
          acc[curr.schoolid] = [{ ...curr }];
        } else {
          const currentSize = acc[curr.schoolid].length;

          if (currentSize === 1) {
            const alreadyExist = acc[curr.schoolid][0]?.programs?.find(
              (exist) => exist.name === curr.program
            );
            if (!alreadyExist) {
              acc[curr.schoolid][0].programs.push({
                questions: curr.questions,
                name: curr.program,
              });
            }
          }
        }
        return acc;
      }, {})
    ).flat();

  /** 3. Get questions of selected program  */

  /** 3. Take answer of questions and  sending submit request  */

  return (
    <div className="w-full px-2 py-4 sm:px-0">
      <Tab.Group defaultIndex={selectedTab}>
        <Tab.List className="flex justify-between space-x-1 rounded-xl p-1">
          {Object.keys(categories).map((category, key) => (
            <Tab
              key={category}
              onClick={() => setSelectedTab(key)}
              className={({ selected }) =>
                classNames(
                  'w-40 rounded-lg py-2.5 mx-4.5 text-md font-Poppin leading-5 text-gray font-medium text-lg ',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                  'hover:text-blue',
                  selected
                    ? ' border-b-2 border-blue rounded-none text-blue'
                    : 'text-blue-100 '
                )
              }
            >
              {key === 0 &&
                `${
                  warmTransferOffers?.length !== undefined
                    ? warmTransferOffers?.length
                    : 0
                } ${category}`}
              {key === 1 &&
                `${
                  uniqueSchoolsOfDirectOffers?.length !== undefined
                    ? uniqueSchoolsOfDirectOffers?.length
                    : 0
                } ${category}`}
              {key === 2 &&
                `${
                  externalOffers?.length !== undefined
                    ? externalOffers?.length
                    : 0
                } ${category}`}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-4">
          <Tab.Panel className="outline-none">
            <div className="overflow-y-scroll h-[calc(100vh-120px)] no-scrollbar pb-5">
              {warmTransferOffers?.map((item, key) => (
                <div className="mt-5" key={key}>
                  <ExpandableCard
                    setPopUp={setPopUp}
                    ind={item}
                    selectCard={selectCard}
                    selected={selected?.find(
                      (item1) =>
                        item1?.result_identifier === item?.result_identifier &&
                        item
                    )}
                    pingResult={pingResult}
                  />
                </div>
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel className="outline-none">
            <div className="overflow-y-scroll h-[calc(100vh-120px)] no-scrollbar pb-5">
              {uniqueSchoolsOfDirectOffers?.map((item, key) => (
                <div className="mt-5" key={key}>
                  <ExpandableCard
                    setPopUp={setPopUp}
                    ind={item}
                    programs={item.programs}
                    selectCard={selectCard}
                    selected={selectedSchools?.find(
                      (item1) =>
                        item1?.result_identifier === item?.result_identifier &&
                        item
                    )}
                  />
                </div>
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel className="outline-none">
            <div className="mt-[244px] w-[100%] flex flex-row justify-center items-center text-gray100 font-Poppin text-[22px] mx-auto text-center">
              The caller hasn’t matched with any Schools for external transfer
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
