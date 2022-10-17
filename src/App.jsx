/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ContextProvider } from './store/context';

// Private Routing
// import PrivateRoutes from './navigation/privateRoutes';

// Basic Layout and Screens
import Layout from './components/Layout/index';
import Education from './pages/Education';
import Home from './pages/Home';
import SchoolMatches from './pages/SchoolMatches';
// Components
import CallerDetails from './components/CallerDetails';
import MatchedSuccess from './components/matchedSuccess';
import MatchingLoader from './components/matchingLoading';
import MatchingNotes from './components/matchingNotes';
import SchoolToProceed from './components/SchoolToProceed';
import SubmitMatch from './components/submitMatch';
import SubmitMatchError from './components/submitMatchError';
import SubmittingLoading from './components/submittingMatchesLoader';

// Cap Management Layout
import ConnectorLayout from './components/ConnectorLayout/index';
import CapManagement from './pages/CapManagement';
import DragFiles from './pages/dragFiles';
import FieldConfiguration from './pages/FieldConfiguration';
import ImportingCSV from './pages/ImportingCSV';
import ImportingCSVError from './pages/ImportingCSVError';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/education/form" element={<Education />} />
            <Route path="/school/matches" element={<SchoolMatches />}>
              <Route index element={<SchoolToProceed />} />
              <Route
                path="/school/matches/transfer"
                element={<MatchingNotes />}
              />
              <Route
                path="/school/matches/submittingLoading"
                element={<SubmittingLoading />}
              />
              <Route
                path="/school/matches/callerDetails"
                element={<CallerDetails />}
              />
              <Route
                path="/school/matches/submitMatch"
                element={<SubmitMatch />}
              />
              <Route
                path="/school/matches/submitMatchError"
                element={<SubmitMatchError />}
              />
            </Route>
            <Route path="/school/loading" element={<MatchingLoader />} />
            <Route path="/school/matchedSuccess" element={<MatchedSuccess />} />
          </Route>
          <Route path="/connector/layout" element={<ConnectorLayout />}>
            <Route index element={<CapManagement />} />
            <Route
              path="/connector/layout/fieldConfiguration"
              element={<FieldConfiguration />}
            />
            <Route
              path="/connector/layout/importingCSV"
              element={<ImportingCSV />}
            />
            <Route path="/connector/layout/dragFiles" element={<DragFiles />} />
            <Route
              path="/connector/layout/importingCSVError"
              element={<ImportingCSVError />}
            />
          </Route>
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
