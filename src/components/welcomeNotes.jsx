import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecordingDisclosed } from './styled/wecomeNote.style';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { searchData } from '../store/action/userDetailAction';
const WelcomeNotes = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(window.location.search);
  // useEffect(() => {
  //   console.log(queryParams.append());
  // }, [queryParams]);

  const obj = {
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
  };

  useEffect(() => {
    const code = queryParams.get('code');
    if (code === null) {
      for (const [key, value] of queryParams) {
        if (key === 'phone') {
          obj[key] = value
            ?.split('-')
            .join('')
            ?.split('(')
            .join('')
            ?.split(')')
            .join('')
            .split(' ')
            .join('')
            .match(/.{1,3}/g)
            ?.join('-');
        } else {
          obj[key] = value;
        }
      }
    }

    obj && dispatch(searchData(obj));
  }, [queryParams]);

  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="w-[519px] h-full flex flex-col justify-center mx-auto">
      <p className="text-blue text-[22px] font-Poppin font-semibold">
        READ WORD FOR WORD
      </p>
      <div>
        <p className="font-Poppin font-normal my-4 text-base">
          Hello this is{' '}
          {isAuthenticated
            ? user?.name?.includes('@')
              ? user?.nickname
              : user?.name
            : '...'}{' '}
          from Degree Transfers on a <strong>recorded line</strong>, am I
          speaking with Angel?
        </p>
        <p className="font-Poppin font-normal my-4">
          Hello Angel, it looks like you have been online recently looking into
          furthering your education. Have you enrolled in a school already or
          just looking for options?
        </p>
        <p className="font-Poppin font-semibold ">
          Great! Degree Transfers partners with over 200 colleges to help
          students find school options.
        </p>
      </div>
      <RecordingDisclosed onClick={() => navigate('/education/form')}>
        Recording disclosed
      </RecordingDisclosed>
    </div>
  );
};

export default WelcomeNotes;
