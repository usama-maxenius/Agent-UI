let init = {
  paramDetails: {
    gender: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address_line1: '',
    city: '',
    state: '',
    zip_code: '',
    computer_internet_access: '',
    age: '',
    hsyear: '',
    current_education_level: '',
    us_citizen: '',
    military_status: '',
    online_or_campus: '',
    can_complete_enrollment: '',
    is_contacted_by_school: '',
    graduated_in_us: '',
    time_to_call: '',
    areas_of_interest: '',
    another_areas_of_interest: '',
    any_other_areas_of_interest: '',
  },
};

export function SearchDetail(state = init, action) {
  let { type, payload } = action;

  switch (type) {
    case 'USERDETAILPARAM':
      return {
        ...state,

        paramDetails: payload,
      };

    default:
      return state;
  }
}
