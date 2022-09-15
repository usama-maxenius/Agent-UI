import React from 'react';
const data = [
  {
    title: 'Why do you need this info?',
    desc: `That’s a good question, we need to take this so that we can connect
  you to Lorem Ipsum has been the industry’s.`,
  },
  {
    title: 'Is this going to take long?',
    desc: `That’s a good question, we need to take this so that we can connect you to Lorem Ipsum has been the industry’s.`,
  },
  {
    title: 'Why do you need my date of birth?',
    desc: `That’s a good question, we need to take this so that we can connect you to Lorem Ipsum has been the industry’s.`,
  },
  {
    title: 'Why do you need this info?',
    desc: `That’s a good question, we need to take this so that we can connect
  you to Lorem Ipsum has been the industry’s.`,
  },
  {
    title: 'Is this going to take long?',
    desc: `That’s a good question, we need to take this so that we can connect you to Lorem Ipsum has been the industry’s.`,
  },
  {
    title: 'Why do you need my date of birth?',
    desc: `That’s a good question, we need to take this so that we can connect you to Lorem Ipsum has been the industry’s.`,
  },
  {
    title: 'Why do you need my date of birth?',
    desc: `That’s a good question, we need to take this so that we can connect you to Lorem Ipsum has been the industry’s.`,
  },
];
function DisclosureHelp() {
  return (
    <div className="mt-[34px] flex flex-col">
      {data.map((item, key) => {
        return (
          <div key={key}>
            <div className="text-blue text-lg mb-2.5 font-Poppin font-normal">
              {item.title}
            </div>
            <div className="text-darkBlack text-md mb-[26px] font-Poppin font-normal w-[85%]">
              {item.desc}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DisclosureHelp;
