import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './store/context';
// Screens
import Home from './pages/Home';
import Education from './pages/Education';
import SchoolMatches from './pages/SchoolMatches';
import PrivateRoutes from './navigation/privateRoutes';
import Layout from './components/Layout/index';
import SchoolToProceed from './components/SchoolToProceed';
import MatchingNotes from './components/matchingNotes';
import MatchingLoader from './components/matchingLoading';
import MatchedSuccess from './components/matchedSuccess';
import SubmittingLoading from './components/submittingMatchesLoader';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>
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
            </Route>
            <Route path="/school/loading" element={<MatchingLoader />} />
            <Route path="/school/matchedSuccess" element={<MatchedSuccess />} />
          </Route>
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
