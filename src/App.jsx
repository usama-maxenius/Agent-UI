import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './store/context';

// Private Routing
// import PrivateRoutes from './navigation/privateRoutes';

// Basic Layout and Screens
import Layout from './components/Layout/index';
import Home from './pages/Home';
import Education from './pages/Education';
import SchoolMatches from './pages/SchoolMatches';
// Components
import SchoolToProceed from './components/SchoolToProceed';
import MatchingNotes from './components/matchingNotes';
import MatchingLoader from './components/matchingLoading';
import MatchedSuccess from './components/matchedSuccess';
import SubmittingLoading from './components/submittingMatchesLoader';
import CallerDetails from './components/CallerDetails';
import SubmitMatch from './components/submitMatch';
import SubmitMatchError from './components/submitMatchError';

// Cap Management Layout
import ConnectorLayout from './components/ConnectorLayout/index';
import CapManagement from './pages/CapManagement';
import FieldConfiguration from './pages/FieldConfiguration';
import ImportingCSV from './pages/ImportingCSV';
import DragFiles from './pages/dragFiles';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          {/* <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route> */}
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
          </Route>
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
