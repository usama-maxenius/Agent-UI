import React, { Fragment, useState } from 'react';
import SideBar from './sidebar';
import Header from './header';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Dialog, Transition } from '@headlessui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const Layout = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    console.log('is Authenticated -->', isAuthenticated);
    if (isAuthenticated === false) {
      openModal();
    } else if (isAuthenticated) {
      closeModal();
    }
  }, [isAuthenticated]);

  // useEffect(() => {
  //   if (isAuthenticated === false) {
  //     openModal();
  //   } else if (isAuthenticated) {
  //     closeModal();
  //   }
  // }, [isAuthenticated]);

  const MainWrapper = styled('div')(() => ({
    overflowX: 'hidden',
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
                          closeModal();
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
      <MainWrapper>
        <SideBar />
        <Header />
        <Outlet />
      </MainWrapper>
    </React.Fragment>
  );
};

export default Layout;
