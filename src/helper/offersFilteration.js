/* eslint-disable no-undef */
import { warmTransfersData } from '../data/warmTransferData';
import { mergeSchoolPrograms } from './mergeSchoolPrograms';

export const filterAndMergeOffers = async (data, state) => {
  // Warm transfers
  let warmOffers = warmTransfersData?.filter(
    (item) => item.result_type === 'transfer' && item
  );
  warmOffers = warmOffers?.length
    ? mergeSchoolPrograms(warmOffers)
    : warmOffers;
  warmOffers?.forEach((item) => {
    item.selected = item.selected ?? false;
    item.selected_program = item.selected_program ?? null;
    item.required = item.required ?? false;
  });

  // External Offers
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

  // Direct Offers
  let directOffers = data?.filter((item) => item.result_type === 'lead');
  directOffers = directOffers?.length
    ? mergeSchoolPrograms(directOffers)
    : directOffers;
  directOffers?.forEach((item) => {
    item.selected = item.selected ?? false;
    item.selected_program = item.selected_program ?? null;
    item.required = item.required ?? false;
  });

  if (state.directOffers?.length > 0) {
    const result = directOffers?.map((item) => {
      const schoolExist = state.directOffers?.find(
        (sch) => sch.schoolid === item.schoolid
      );
      if (schoolExist) {
        const programExist = schoolExist?.programs?.find((e) =>
          item.programs?.some((pro) => pro.program === e.program)
        );
        if (programExist) {
          return item;
        } else {
          return programExist.programs.push(item.program);
        }
      } else {
        return directOffers.push(item);
      }
    });
    console.log('🚀 ~ file: SchoolMatches.jsx:169 ~ result ~ result', result);
  }

  // updateState((prev) => ({
  //   ...prev,
  //   directOffers,
  //   warmTransfers: warmOffers,
  //   externalOffers,
  // }));
  // updateState({
  //   ...offers,
  //   directOffers,
  //   warmTransfers: warmOffers,
  //   externalOffers,
  // });
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
