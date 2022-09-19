import React from 'react';
import InputWithRightIcon from './inputWithRightIcon';
import DropDownWithIcon from './dropdownWithSearch';

function DisclosureCallerDetails() {
  return (
    <div className="mt-[26px] flex flex-col overflow-x-hidden">
      <div className="w-[443px]">
        <div className="">
          <DropDownWithIcon placeholder="Male" callerID={true} />
        </div>
      </div>
      <div className="w-[527px]">
        <div className="-mt-2.5">
          <InputWithRightIcon
            callerID={true}
            placeholder="Angel"
            width={'84%'}
          />
        </div>
      </div>
      <div className="w-[527px]">
        <div className="-mt-2.5">
          <InputWithRightIcon
            width={'84%'}
            callerID={true}
            placeholder="Rubio"
          />
        </div>
      </div>
      <div className="w-[443px]">
        <div className="mt-4">
          <DropDownWithIcon placeholder="Art & Design" callerID={true} />
        </div>
      </div>
      <div className="w-[443px]">
        <div className="mt-4">
          <DropDownWithIcon placeholder="Education" callerID={true} />
        </div>
      </div>
      <div className="w-[443px]">
        <div className="mt-4">
          <DropDownWithIcon
            placeholder="Additional area of study"
            callerID={true}
          />
        </div>
      </div>
      <div className="w-[527px]">
        <div className="-mt-2.5">
          <InputWithRightIcon
            width={'84%'}
            callerID={true}
            placeholder="929-205-3200"
          />
        </div>
      </div>
      <div className="w-[443px]">
        <div className="mt-4">
          <DropDownWithIcon placeholder="Time to contact" callerID={true} />
        </div>
      </div>
      <div className="w-[527px]">
        <div className="-mt-2.5">
          <InputWithRightIcon
            width={'84%'}
            callerID={true}
            placeholder="Angel.rubio@gmail.com"
          />
        </div>
      </div>
      <div className="w-[527px]">
        <div className="-mt-2.5">
          <InputWithRightIcon
            width={'84%'}
            callerID={true}
            placeholder="10 Hudson Yards"
          />
        </div>
      </div>
      <div className="w-[443px]">
        <div className="mt-4">
          <DropDownWithIcon placeholder="New York" callerID={true} />
        </div>
      </div>
      <div className="w-[443px]">
        <div className="mt-4">
          <DropDownWithIcon
            placeholder="2002 (year of birth)"
            callerID={true}
          />
        </div>
      </div>
      <div className="w-[443px]">
        <div className="mt-4">
          <DropDownWithIcon placeholder="Yes (US Citizen)" callerID={true} />
        </div>
      </div>
      <div className="w-[443px]">
        <div className="mt-4">
          <DropDownWithIcon
            placeholder="2021 (HS Graduation year)"
            callerID={true}
          />
        </div>
      </div>
      <div className="w-[443px]">
        <div className="mt-4">
          <DropDownWithIcon placeholder="High School" callerID={true} />
        </div>
      </div>
      <div className="w-[443px]">
        <div className="mt-4">
          <DropDownWithIcon
            placeholder="No (military association)"
            callerID={true}
          />
        </div>
      </div>
      <div className="w-[443px]">
        <div className="mt-4">
          <DropDownWithIcon
            placeholder="Not in contact with Schools"
            callerID={true}
          />
        </div>
      </div>
      <div className="w-[443px]">
        <div className="mt-4">
          <DropDownWithIcon
            placeholder="Yes (internet access)"
            callerID={true}
          />
        </div>
      </div>
      <div className="w-[443px]">
        <div className="mt-4">
          <DropDownWithIcon placeholder="Online & campus" callerID={true} />
        </div>
      </div>
      <div className="w-[443px]">
        <div className="mt-4">
          <DropDownWithIcon placeholder="Enrolment timeline" callerID={true} />
        </div>
      </div>
      <div className="w-[443px] mt-4 flex flex-row justify-center">
        <button className="bg-blue text-white h-[36px] w-[150px] rounded-3xl font-IBM_serif text-sm">
          Resubmit
        </button>
      </div>
    </div>
  );
}

export default DisclosureCallerDetails;
