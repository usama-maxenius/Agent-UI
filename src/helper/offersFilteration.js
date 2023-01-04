// @ts-check

/* eslint-disable no-undef */
// import { warmTransfersData } from '../data/warmTransferData';
import { mergeSchoolPrograms } from './mergeSchoolPrograms';

/**
 * @param {import('../types/schools.types').ISchoolResponse[]} data
 * @param {import('../types/schools.types').IOfferState} state
 * @param {*} updateOffersHandler
 */
export const filterAndMergeOffers = async (
  data,
  state,
  updateOffersHandler
) => {
  // ---------------  Warm Transfer Offers  --------------------
  // 1. Filter the list of warm offers
  /** @type {import('../types/schools.types').ISchoolResponse[]} */
  let warmOffers = await data?.filter(
    (item) => item.result_type === 'transfer'
  );

  if (!state.warmTransfers.length) {
    // Merge the list of warm offers which contain the same school
    /** @type {import('../types/schools.types').IWarmTransferOffers[] | undefined} */
    let warmOffersWithNestedPrograms;

    if (warmOffers?.length) {
      warmOffersWithNestedPrograms = await mergeSchoolPrograms(warmOffers);
    }

    // Initialize some additional properties
    warmOffersWithNestedPrograms?.forEach((school) => {
      school.selected = school.selected ?? false;
      school.selected_program = school.selected_program ?? null;
      school.required = school.required ?? false;
      if (school?.programs && school.programs.length) {
        school.programs.forEach((prog) => {
          prog.questions = prog?.questions.map((question) => {
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
        });
      }
    });
    updateOffersHandler(warmOffers);
  } else {
    /** @type {import('../types/schools.types').IWarmTransferOffers[]} */
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
          programs: [],
          result_type: 'transfer',
        });
        return school;
      }
    });
    updateOffersHandler(stateOffers);
  }

  // ---------------  Direct Offers  --------------------
  // 1. Filter the list of direct offers
  /** @type {import('../types/schools.types').ISchoolResponse[]} */
  let directOffers = data?.filter((item) => item.result_type === 'lead');

  if (!state.directOffers.length) {
    // Merge the list of warm offers which contain the same school
    /** @type {import('../types/schools.types').IDirectOffers[] | undefined} */
    let directOffersWithNestedPrograms;

    if (directOffers?.length) {
      directOffersWithNestedPrograms = await mergeSchoolPrograms(directOffers);
    }

    // Initialize some additional properties
    directOffersWithNestedPrograms?.forEach((school) => {
      school.selected = school.selected ?? false;
      school.selected_program = school.selected_program ?? null;
      school.required = school.required ?? false;
      if (school?.programs?.length > 0) {
        school.programs?.forEach((prog) => {
          prog.questions = prog?.questions?.map((question) => {
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
        });
      }
    });
    updateOffersHandler(directOffers);
  } else {
    /** @type {import('../types/schools.types').IDirectOffers[]} */
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
          programs: [],
          result_type: 'lead',
        });
        return school;
      }
    });
    updateOffersHandler(stateOffers);
  }

  // -----------------  External Offers ---------------------

  /** @type {import('../types/schools.types').ISchoolResponse[]} */
  let externalOffers = data?.filter(
    (item) => item.result_type !== 'lead' && item.result_type !== 'transfer'
  );

  if (!state.externalOffers.length) {
    // Merge the list of warm offers which contain the same school
    /** @type {import('../types/schools.types').IExternalOffers[] | undefined} */
    let externalOffersWithNestedPrograms;

    if (externalOffers?.length) {
      externalOffersWithNestedPrograms = await mergeSchoolPrograms(
        externalOffers
      );
    }

    // Initialize some additional properties
    externalOffersWithNestedPrograms?.forEach((school) => {
      school.selected = school.selected ?? false;
      school.selected_program = school.selected_program ?? null;
      school.required = school.required ?? false;
      if (school?.programs?.length > 0) {
        school.programs.forEach((prog) => {
          prog.questions = prog?.questions.map((question) => {
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
        });
      }
    });
    updateOffersHandler(externalOffers);
  } else {
    /** @type {import('../types/schools.types').IExternalOffers[]} */
    const stateOffers = [...state.externalOffers];

    await externalOffers?.forEach((school) => {
      // check school exist
      const schoolExist = state.externalOffers?.find(
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
          programs: [],
        });
        return school;
      }
    });
    updateOffersHandler(stateOffers);
  }
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

// Toggle the selection of school
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

// Check questions fields validation
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
