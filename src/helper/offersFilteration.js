// @ts-check

/* eslint-disable no-undef */
// import { warmTransfersData } from '../data/warmTransferData';
import { mergeSchoolPrograms } from './mergeSchoolPrograms';

export const filterAndMergeOffers = async (
  data,
  state,
  updateOffersHandler
) => {
  // ---------------  Warm Transfer Offers  --------------------
  // 1. Filter the list of warm offers
  let warmOffers = await data?.filter(
    (item) => item.result_type === 'transfer' && item
  );

  if (!state.warmTransfers.length) {
    // Merge the list of warm offers which contain the same school
    if (warmOffers?.length) warmOffers = await mergeSchoolPrograms(warmOffers);

    // Initialize some additional properties
    warmOffers?.forEach((item) => {
      item.selected = item.selected ?? false;
      item.selected_program = item.selected_program ?? null;
      item.required = item.required ?? false;
    });
    updateOffersHandler(warmOffers);
  } else {
    const stateOffers = [...state.warmTransfers];
    await warmOffers?.forEach((school) => {
      // check school exist
      const schoolExist = state.warmTransfers?.find(
        (sch) => sch.schoolid === school.schoolid
      );

      if (schoolExist) {
        // check program already exist or not
        const programExist = schoolExist?.programs?.find(
          (e) => school.result_set_identifier === e.result_set_identifier
        );

        if (programExist) {
          return school;
        } else {
          // add new program in school programs Array
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
    updateOffersHandler(stateOffers);
  }

  // ---------------  Direct Offers  --------------------
  // 1. Filter the list of direct offers
  let directOffers = data?.filter((item) => item.result_type === 'lead');

  if (!state.directOffers.length) {
    // Merge the list of warm offers which contain the same school
    if (directOffers?.length)
      directOffers = await mergeSchoolPrograms(directOffers);

    // Initialize some additional properties
    directOffers?.forEach((item) => {
      item.selected = item.selected ?? false;
      item.selected_program = item.selected_program ?? null;
      item.required = item.required ?? false;
      if (item?.programs?.questions?.length > 0) {
        item.programs.questions = item?.programs?.questions.map((question) => {
          if (question.IsVisible) {
            question.required = false;
            question.value = {
              OptionLabel: '',
              OptionValue: '',
            };
            return question;
          }
          return question;
        });
      }
    });
    updateOffersHandler(directOffers);
  } else {
    const stateOffers = [...state.directOffers];
    await directOffers?.forEach((school) => {
      // check school exist
      const schoolExist = state.directOffers?.find(
        (sch) => sch.schoolid === school.schoolid
      );

      if (schoolExist) {
        // check program already exist or not
        const programExist = schoolExist?.programs?.find(
          (e) => school.result_set_identifier === e.result_set_identifier
        );

        if (programExist) {
          return school;
        } else {
          const updateQuestion = school.questions?.map((quest) => {
            if (quest.IsVisible) {
              quest.required = false;
              quest.value = {
                OptionLabel: '',
                OptionValue: '',
              };
              return quest;
            }
            return quest;
          });

          // add new program in school programs Array
          schoolExist.programs?.push({
            OptionLabel: school.program,
            QuestionValue: school.program,
            questions: updateQuestion,
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
    updateOffersHandler(stateOffers);
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

export const checkQuestionValidation = async (arry) => {
  const findSelectedOffers = await arry?.filter((offer) => offer.selected);
  let validationError = false;
  const result = await findSelectedOffers?.map((school) => {
    if (school.selected_program?.questions?.length > 0) {
      school.selected_program?.questions?.map((quest) => {
        if (quest.IsVisible && !quest?.value?.OptionValue.length) {
          quest.required = true;
          validationError = true;
          return quest;
        } else {
          return quest;
        }
      });
      return school;
    }
    return school;
  });
  return { error: validationError, data: result };
};
