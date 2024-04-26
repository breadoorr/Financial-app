import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Reports from './pages/Reports/Reports';
import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="d-flex"> {/* Use flex container to lay out sidebar and content */}
          <Sidebar /> {/* Sidebar will take up space based on its width */}
          <div className="content flex-grow-1"> {/* Content will fill the rest of the space */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/intro" element={<Intro />} /> */}


              {/* Make sure to include the Route for the root path */}
              {/* <Route path="/" element={<Dashboard />} exact /> */}
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
