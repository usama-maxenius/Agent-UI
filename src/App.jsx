import React from 'react';
import './App.css';
import Home from './pages/Home';
import Education from './pages/Education';
import SchoolMatches from './pages/SchoolMatches';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './navigation/privateRoutes';
import Layout from './components/Layout/index';
import SchoolToProceed from './components/SchoolToProceed';
import MatchingNotes from './components/matchingNotes';

function App() {
  return (
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
          </Route>
          {/* <Route
            path="/school/matchestransfer"
            element={<SchoolMatchesWarmTransfer />}
          /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
