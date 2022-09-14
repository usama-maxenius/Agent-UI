import React from 'react';
// const data = [
//   {
//     title: 'Why do you need this info?',
//     desc: `That’s a good question, we need to take this so that we can connect
//   you to Lorem Ipsum has been the industry’s.`,
//   },
//   {
//     title: 'Is this going to take long?',
//     desc: `That’s a good question, we need to take this so that we can connect you to Lorem Ipsum has been the industry’s.`,
//   },
//   {
//     title: 'Why do you need my date of birth?',
//     desc: `That’s a good question, we need to take this so that we can connect you to Lorem Ipsum has been the industry’s.`,
//   },
//   {
//     title: 'Why do you need this info?',
//     desc: `That’s a good question, we need to take this so that we can connect
//   you to Lorem Ipsum has been the industry’s.`,
//   },
//   {
//     title: 'Is this going to take long?',
//     desc: `That’s a good question, we need to take this so that we can connect you to Lorem Ipsum has been the industry’s.`,
//   },
//   {
//     title: 'Why do you need my date of birth?',
//     desc: `That’s a good question, we need to take this so that we can connect you to Lorem Ipsum has been the industry’s.`,
//   },
//   {
//     title: 'Why do you need my date of birth?',
//     desc: `That’s a good question, we need to take this so that we can connect you to Lorem Ipsum has been the industry’s.`,
//   },
// ];
function DisclosureHelp() {
  return (
    <>
      {[
        'RECORDING DISCLOSURE',
        'SOMETHING ELSE THAT’S NEEDED',
        'SOMETHING ELSE THAT’S NEEDED',
      ].map((item, key) => {
        return (
          <div key={key} className="w-[410px] mb-[42px]">
            <p className="text-blue text-[22px] font-Poppin font-semibold">
              {item}
            </p>
            <div>
              <p className="font-Poppin font-normal my-4 text-base">
                Hello this is Anna from Degree Transfers on a{' '}
                <strong>recorded line</strong>, am I speaking with Angel?
              </p>
              <p className="font-Poppin font-normal my-4">
                Hello Angel, it looks like you have been online recently looking
                into furthering your education. Have you enrolled in a school
                already or just looking for options?
              </p>
              <p className="font-Poppin font-semibold ">
                Great! Degree Transfers partners with over 200 colleges to help
                students find school options.
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default DisclosureHelp;
