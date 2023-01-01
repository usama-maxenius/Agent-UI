/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState } from 'react';
import SideBar from './sidebar';
import Header from './header';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Dialog, Transition } from '@headlessui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import '../../index.css';
import axios from 'axios';

const Layout = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const {
    isAuthenticated,
    user,
    isLoading,
    getAccessTokenSilently,
    getIdTokenClaims,
  } = useAuth0();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const getToken = async () => {
    let token = await getIdTokenClaims();
    let options = {
      method: 'PATCH',
      url: `https://dev-o2t78sivaoy3il8i.us.auth0.com/api/v2/users/${user?.sub}`,
      headers: {
        authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImpyQ21pdF9ieFNVNDVQTXg2TUd3ciJ9.eyJpc3MiOiJodHRwczovL2Rldi1vMnQ3OHNpdmFveTNpbDhpLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJweVF2NDVUMlhVRkRLSWk4UVJBenJMWTdCTUVpUGQyWkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtbzJ0NzhzaXZhb3kzaWw4aS51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY3MTgyMzI2OSwiZXhwIjoxNjcxOTA5NjY5LCJhenAiOiJweVF2NDVUMlhVRkRLSWk4UVJBenJMWTdCTUVpUGQyWiIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgcmVhZDp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBkZWxldGU6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDpob29rcyB1cGRhdGU6aG9va3MgZGVsZXRlOmhvb2tzIGNyZWF0ZTpob29rcyByZWFkOmFjdGlvbnMgdXBkYXRlOmFjdGlvbnMgZGVsZXRlOmFjdGlvbnMgY3JlYXRlOmFjdGlvbnMgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDppbnNpZ2h0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOmxvZ3NfdXNlcnMgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIHVwZGF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHJlYWQ6YW5vbWFseV9ibG9ja3MgZGVsZXRlOmFub21hbHlfYmxvY2tzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHVwZGF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyBkZWxldGU6YnJhbmRpbmcgcmVhZDpsb2dfc3RyZWFtcyBjcmVhdGU6bG9nX3N0cmVhbXMgZGVsZXRlOmxvZ19zdHJlYW1zIHVwZGF0ZTpsb2dfc3RyZWFtcyBjcmVhdGU6c2lnbmluZ19rZXlzIHJlYWQ6c2lnbmluZ19rZXlzIHVwZGF0ZTpzaWduaW5nX2tleXMgcmVhZDpsaW1pdHMgdXBkYXRlOmxpbWl0cyBjcmVhdGU6cm9sZV9tZW1iZXJzIHJlYWQ6cm9sZV9tZW1iZXJzIGRlbGV0ZTpyb2xlX21lbWJlcnMgcmVhZDplbnRpdGxlbWVudHMgcmVhZDphdHRhY2tfcHJvdGVjdGlvbiB1cGRhdGU6YXR0YWNrX3Byb3RlY3Rpb24gcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uc19zdW1tYXJ5IGNyZWF0ZTphY3Rpb25zX2xvZ19zZXNzaW9ucyBjcmVhdGU6YXV0aGVudGljYXRpb25fbWV0aG9kcyByZWFkOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgdXBkYXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgZGVsZXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.P0Om5ffrK6GCEMR9OtHsCIzVSCJRJKKa2os5dOoLbEl5RAIlWyLY5a26PlTgVKbn77S_AFP3RMny6D8VOyD8aiqvVtWDTZcMgYRm2e8ly7FcpFYi9tpUp8eutn0ZektPhOkSQ-4mrLG2yWL1A4Zms9TRPJbyS2nSQX6Tc6IydmBxX4G75yeAUZ17YHDgEt7q0p06fJjNbBFbSaAL7cJ6sgwRWCHP6jQeMB8t6HeIT-t-Sbl--G97SZDoZ4fr1JgDb5_GNrNpLAkyzRvoJuAqi2UkQXaPdDfZ3sPAio-Iz0sh48Tee3wxDbFzn71bNslLdhhw4vIAjssQHodoNwYoDg`,
        'content-type': 'application/json',
      },
      data: {
        user_metadata: {
          company_code:
            params.get('company_code') !== null
              ? params.get('company_code')
              : null,
        },
      },
    };
    axios
      .request(options)
      .then((response) => {})
      .catch((error) => {});
  };

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      let currentUrl = window.location.href;
      if (
        currentUrl?.includes('Education/form') ||
        currentUrl.includes('company_code')
      ) {
        localStorage.setItem('url', currentUrl);
      }
      openModal();
    } else if (isAuthenticated) {
      if (
        localStorage.getItem('url') !== null &&
        window.location.href !== localStorage.getItem('url')
      ) {
        let curl = localStorage.getItem('url');
        localStorage.removeItem('url');
        window.location.replace(curl);
      }
      if (window.location.href.includes('company_code')) {
        getToken();
      }
      closeModal();
      localStorage.removeItem('url');
    }
  }, [isAuthenticated, isLoading]);

  const MainWrapper = styled('div')(() => ({
    overflowX: 'hidden',
    height: '100%',
  }));

  const RecordingDisclosed = styled('div')(() => ({
    width: '388px',
    color: '#f5f5f5',
    borderRadius: '25px',
    backgroundColor: ' #2541b2',
    font: 'normal normal 600 22px/30px IBM Plex Sans',
    textAlign: 'center',
    padding: '11px',
    marginTop: '42px',
    border: '0px',
    outline: '0px',
    cursor: 'pointer',
  }));

  useEffect(() => {
    let element = document?.getElementById('main-wrapper');
    if (element?.classList?.contains('school-page')) {
      element?.classList?.remove('school-page');
    }
    document?.getElementById('main-wrapper')?.classList?.add('main-page');
  }, []);

  let element = document?.getElementById('main-wrapper');
  if (element?.classList?.contains('school-page')) {
    element?.classList?.remove('school-page');
  }
  document?.getElementById('main-wrapper')?.classList?.add('main-page');

  return (
    <React.Fragment>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={openModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    Login
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-lg text-gray-500">
                      You need to be login first.
                    </p>
                  </div>

                  <div className="mt-4">
                    <RecordingDisclosed
                      onClick={() => {
                        if (!isAuthenticated) {
                          loginWithRedirect();
                          return closeModal();
                        } else {
                          closeModal();
                          return navigate('education/form');
                        }
                      }}
                    >
                      Login
                    </RecordingDisclosed>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <MainWrapper id="main-wrapper" className={'main-page'}>
        <SideBar />
        <Header />
        <Outlet />
      </MainWrapper>
    </React.Fragment>
  );
};

export default Layout;
