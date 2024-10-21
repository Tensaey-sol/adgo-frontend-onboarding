import React from 'react';
import './index.css';
import Layout from './components/layout/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/Home';
import PrivacyPage from './components/privacy/Privacy';

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;