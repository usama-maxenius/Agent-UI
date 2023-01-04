// @ts-check

/* eslint-disable no-undef */
// import { warmTransfersData } from '../data/warmTransferData';
import { mergeSchoolPrograms } from './mergeSchoolPrograms';

export const filterAndMergeOffers = async (data, state, updateState) => {
  // ---------------  Warm Transfer Offers  --------------------
  // 1. Filter the list of warm offers
  let warmOffers = await data?.filter(
    (item) => item.result_type === 'transfer' && item
  );

  // warmOffers?.forEach((item) => {
  //   item.selected = item.selected ?? false;
  //   item.selected_program = item.selected_program ?? null;
  //   item.required = item.required ?? false;
  // });

  // await warmOffers?.map((item) => {
  //   // check school exist
  //   const schoolExist = state.warmTransfers?.find(
  //     (sch) => sch.schoolid === item.schoolid
  //   );

  //   if (schoolExist) {
  //     // check program exist
  //     const programExist = schoolExist?.programs?.find((e) =>
  //       item.programs?.some(
  //         (pro) => pro.result_set_identifier === e.result_set_identifier
  //       )
  //     );

  //     if (!programExist) {
  //       schoolExist.programs.push(item);
  //       return item;
  //     } else {
  //       item.selected_program = programExist?.selected_program;
  //       item.selected = programExist?.selected;
  //       item.required = programExist?.required;
  //       return item;
  //     }
  //   } else {
  //     warmOffers.push({
  //       ...item,
  //       selected: false,
  //       selected_program: null,
  //       required: false,
  //     });
  //     return item;
  //   }
  // });

  if (!state.warmTransfers.length) {
    // 2. Merge the list of warm offers which contain the same school
    if (warmOffers?.length) warmOffers = await mergeSchoolPrograms(warmOffers);
    warmOffers?.forEach((item) => {
      item.selected = item.selected ?? false;
      item.selected_program = item.selected_program ?? null;
      item.required = item.required ?? false;
    });
  } else {
    warmOffers = await warmOffers?.map((school) => {
      // check school exist
      const schoolExist = state.warmTransfers?.find(
        (sch) => sch.schoolid === school.schoolid
      );

      if (schoolExist) {
        // check program exist
        const programExist = schoolExist?.programs?.find((e) =>
          school.programs?.some(
            (pro) => pro.result_set_identifier === e.result_set_identifier
          )
        );

        if (!programExist) {
          console.log(
            '🚀 ~ file: offersFilteration.js:78 ~ warmOffers=awaitwarmOffers?.map ~ program not Exist'
          );
          schoolExist.programs.push({});
          return school;
        } else {
          school.selected_program = programExist?.selected_program;
          school.selected = programExist?.selected;
          school.required = programExist?.required;
          return school;
        }
      } else {
        warmOffers.push({
          ...school,
          selected: false,
          selected_program: null,
          required: false,
        });
        return school;
      }
    });
  }

  // ---------------  Direct Offers  --------------------
  // 1. Filter the list of direct offers
  let directOffers = data?.filter((item) => item.result_type === 'lead');

  // 2. Merge the list of direct offers which contain the same school
  // if (directOffers?.length)
  //   directOffers = await mergeSchoolPrograms(directOffers);

  // 3. If new Offers contain previous one

  if (!state.directOffers.length) {
    // 2. Merge the list of warm offers which contain the same school
    if (directOffers?.length)
      directOffers = await mergeSchoolPrograms(directOffers);
    directOffers?.forEach((item) => {
      item.selected = item.selected ?? false;
      item.selected_program = item.selected_program ?? null;
      item.required = item.required ?? false;
    });
    return updateState((prev) => ({
      ...prev,
      directOffers: directOffers,
    }));
  } else {
    const stateOffers = [...state.directOffers];
    await directOffers?.forEach((school) => {
      // check school exist
      const schoolExist = state.directOffers?.find(
        (sch) => sch.schoolid === school.schoolid
      );

      if (schoolExist) {
        // check program exist
        // const programExist = schoolExist?.programs?.find((e) =>
        //   school.programs?.some(
        //     (pro) => pro.result_set_identifier === e.result_set_identifier
        //   )
        // );
        const programExist = schoolExist?.programs?.find(
          (e) => school.result_set_identifier === e.result_set_identifier
        );

        if (programExist) {
          return school;
        } else {
          schoolExist.programs?.push({
            OptionLabel: school.program,
            QuestionValue: school.program,
            questions: school.questions,
            program: school.program,
            result_identifier: school.result_identifier,
            result_set_identifier: school.result_set_identifier,
          });
          return school;
        }
      } else {
        stateOffers.push({
          ...school,
          selected: false,
          selected_program: null,
          required: false,
        });
        return school;
      }
    });
    updateState((prev) => ({
      ...prev,
      directOffers: stateOffers,
    }));
    console.log(
      '🚀 ~ file: offersFilteration.js:165 ~ res ~ school',
      stateOffers
    );
  }

  // -----------------  External Offers ---------------------

  let externalOffers = data?.filter(
    (item) => item.result_type !== 'lead' && item.result_type !== 'transfer'
  );
  externalOffers = externalOffers?.length
    ? mergeSchoolPrograms(externalOffers)
    : externalOffers;
  externalOffers?.forEach((item) => {
    item.selected = item.selected ?? false;
    item.selected_program = item.selected_program ?? null;
    item.required = item.required ?? false;
  });

  // updateState((prev) => ({
  //   ...prev,
  //   directOffers,
  //   warmTransfers: warmOffers,
  //   externalOffers,
  // }));
};

export const prepareBody = async (arry) => {
  const accesskey = process.env.REACT_APP_ACCESS_KEY;
  var url = new URL(window.location.href);
  var search_identifier_param = url.searchParams.get('search');

  /** Filter by selected Offers  */
  const findSelectedOffers = await arry?.filter((offer) => offer.selected);

  const prepareBodyRequest = await findSelectedOffers?.map((offer) => {
    let answers = [];
    if (offer.selected_program?.questions) {
      // filter by visible questions
      const valid_questions = offer.selected_program?.questions.filter(
        (qes) => qes.IsVisible
      );
      if (valid_questions.length) {
        answers = valid_questions?.map((question) => {
          return {
            question_key: question.value?.OptionLabel,
            question_value: question.value?.OptionValue,
          };
        });
      }
    }
    return {
      accesskey,
      search_identifier: search_identifier_param,
      search_result_identifier: offer.result_identifier,
      search_result_set_identifier: offer.result_set_identifier,
      answers: answers ?? [],
    };
  });
  return prepareBodyRequest;
};

export const schoolSelectionToggle = async (
  arry,
  school,
  setProgramQuestions
) => {
  const res = await arry?.map((st) => {
    if (st.schoolid === school.schoolid) {
      if (!st.selected) {
        if (st.selected_program) {
          st.selected = true;
          st.required = false;
          return st;
        } else {
          st.required = true;
          return st;
        }
      } else {
        st.selected_program = null;
        setProgramQuestions([]);
        st.selected = false;
        return st;
      }
    }
    return st;
  });
  return res;
};
