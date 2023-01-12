/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { accesskey } from '../../config';
import { get, post } from '../../helper/api_handler';

// let myIP = async () => {
//   let result = await get('https://geolocation-db.com/json/');
//   return result.IPv4;
// };
const area_of_interests = [];
export let searchSchools = (data, trustedForm, navigate) => {
  return async (dispatch) => {
    // let IP = await myIP();
    let {
      gender,
      first_name,
      last_name,
      email,
      phone,
      address_line1,
      city,
      state,
      zip_code,
      computer_internet_access,
      age,
      hsyear,
      current_education_level,
      us_citizen,
      military_status,
      online_or_campus,
      preferred_enrollment,
      is_contacted_by_school,
      graduated_in_us,
      supplier_trustedform_token,
      time_to_call,
      supplier_trustedform_url,
      areas_of_interest,
      another_areas_of_interest,
      any_other_areas_of_interest,
    } = data;

    console.log('trustedForm', trustedForm);
    console.log('phone', phone.replace(/[^+\d]+/g, ''));

    const calculateAge = new Date().getFullYear() - age;
    const graduated_in_us_format = graduated_in_us.includes('yes') ? '1' : '0';
    let body = {
      accesskey,
      prospect: {
        gender: gender,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone.replace(/[^+\d]+/g, ''),
        phone2: '',
        address_line1: address_line1,
        address_line2: '',
        city: city,
        state: state,
        zip_code: zip_code,
        computer_internet_access: computer_internet_access,
        age: `${calculateAge}`,
        hsyear: hsyear,
        current_education_level: current_education_level,
        preferred_education_level: '',
        us_citizen: us_citizen,
        military: {
          military_status: 'Yes',
          military_affiliation: 'air force',
          relationship: '',
        },
        preferred_enrollment: preferred_enrollment,
        online_or_campus: online_or_campus,
        ip: '68.225.130.58',
      },
      search: {
        areas_of_interest: [
          areas_of_interest,
          another_areas_of_interest,
          any_other_areas_of_interest,
        ],
        // areas_of_interest: ['liberal arts', 'entertainment'],
        can_complete_enrollment: 'no',
        rn_license: 'no',
        teaching_certificate: 'no',
        is_contacted_by_school: is_contacted_by_school.includes('yes')
          ? '1'
          : '0',
        graduated_in_us: graduated_in_us_format,
        channel_name: 'CALLCENTER',
        ss1: '9829',
        ss2: 'organic',
        ss3: '',
        ss4: '',
        web_url: 'https://test.google.com/',
        webinitiatingurl:
          'https://test.google.com/workdocs/index.html#/share/document/',
        traffic_trustedform_url: 'http://google.com',
        traffic_jornaya_leadid: '79d2d183-1012-02cf-6ef5-bf3aaec09570',
        traffic_trustedform_token: 'c52c65236469061b609a1046ec60e5b21b48939f',
        traffic_category: 'education',
        supplier_jornaya_leadid: trustedForm?.supplier_jornaya_leadid,
        supplier_trustedform_token: trustedForm?.supplier_trustedform_token,
        supplier_trustedform_url: trustedForm?.supplier_trustedform_url,
        time_to_call:
          'https://cert.trustedform.com/c52c65236469061b609a1046ec60e5b21b48939f',
        callcenter: {
          cc_rep_id: 'NA',
          PublisherBrandName: 'NA',
          callid: '',
          sessionid: '',
          cc_inbound_transfer_company: '',
          cc_dba: '',
          cc_inbound_transfer_dba: '',
          cc_outbound_company: '',
        },
        test_flag: 0,
        tcpa_text:
          "by checking this box, i agree to be contacted by degreesearch and the schools i\\'m matched to on the following pages by telephone, which may include artificial or pre-recorded calls and/or sms text messages, delivered via automated technology to the phone number that i have provided above regarding educational opportunities. i also represent that i am the subscriber and primary user of the telephone that i have provided above. i understand that my consent is not required to make a purchase or obtain services and that i may opt-out at any time. in order to proceed without providing consent, call 401-396-0389.",
      },
      other_info: {
        client_ids: '',
        level_of_interest: '',
        browser_user_agent: '',
        time_zone: '',
        device_type: '',
        lead_unique_id: '',
        web_session_id: '',
        site_name: 'edu',
        landing_page: 'grant',
        supplier_campaign: 'web',
        utm_source: '',
        utm_medium: '',
        utm_campaign: '',
        utm_content: '',
        utm_term: '',
        utm_supplier_id: '',
        utm_sub_id: '',
        utm_ad_id: '',
        traffic_source_type: 'grant',
      },
    };

    console.log('🚀 ~ file: searchAPI.js:39 ~ return ~ data', body, data);

    let url = 'https://api.cmicon.com/v3/search';

    let response = await post(url, JSON.stringify(body));

    if (response.search_identifier) {
      navigate('/school/loading/?search=' + response.search_identifier);
      dispatch({
        type: 'SEARCH_RESULTS',
        payload: response,
      });
      dispatch({
        type: 'SEARCH_IDENTIFIER_RESPONSE',
        payload: response,
      });
    }
  };
};
export let ResultSchools = (searchIdentifier, navigate) => {
  return async (dispatch) => {
    let body = {
      accesskey: process.env.REACT_APP_ACCESS_KEY,
      search_identifier: searchIdentifier,
    };

    let url = 'https://api.cmicon.com/v3/results';

    let response = await post(url, JSON.stringify(body));

    if (Array.isArray(response)) {
      if (navigate) navigate('/school/matches/?search=' + searchIdentifier);
      dispatch({
        type: 'SEARCH_SCHOOLS',
        payload: response[0],
      });
      dispatch({
        type: 'SEARCH_RESULT_RESPONSE',
        payload: response[0],
      });
    }
  };
};
export let TransferAPI = ({ result_identifier }, searchIdentifier) => {
  return async (dispatch) => {
    let body = {
      accesskey: process.env.REACT_APP_ACCESS_KEY,
      search_identifier: searchIdentifier,
      search_result_identifier: result_identifier,
      answers: [],
    };

    let url = 'https://api.cmicon.com/v3/transfers';

    let response = await post(url, JSON.stringify(body));

    dispatch({
      type: 'SEARCH_TRANSFER_API',
      payload: response,
    });
  };
};

export let PingAPI = ({ result_identifier }) => {
  return async (dispatch) => {
    let body = {
      accesskey: process.env.REACT_APP_ACCESS_KEY,
      search_result_identifier: result_identifier,
      answers: null,
    };

    let url = 'https://api.cmicon.com/v3/ping';

    let response = await post(url, JSON.stringify(body));
    dispatch({
      type: 'SEARCH_PING_API',
      payload: response,
    });
  };
};

export let clearPingTransfer = () => {
  return async (dispatch) => {
    dispatch({
      type: 'CLEAR_PING_TRANSFER_RESULTS',
    });
  };
};

export let SubmitAPI = (body, navigate) => {
  return async (dispatch) => {
    navigate('/school/matches/submittingLoading');
    let url = 'https://api.cmicon.com/v3/submit';

    let response = await post(url, JSON.stringify(body));
    response = response[0];
    if (!response.success) {
      navigate(
        '/school/matches/submitMatchError/?search=' + body.search_identifier
      );
    }
    if (response.success) {
      navigate('/school/matches/submitMatch/?search=' + body.search_identifier);
    }

    dispatch({
      type: 'SUBMIT_API_RESULT',
      payload: response,
    });
  };
};
