import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Reports from './pages/Reports/Reports';
// import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';
import './App.css';
import Footer from './components/Footer/Footer';
import Intro from "./pages/Intro/Intro";
import Settings from "./pages/Settings/Settings";
import Income from "./components/Budgets/Income"
import Expense from "./components/Budgets/Expense";
// const jwt = require('jsonwebtoken');
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:8000/validate', {
          method: 'GET',
          credentials: 'include', // This is crucial for including the HTTP-only cookie
        });
        if (response.status === 200) {
          setIsLoggedIn(true);
          // console.log(isLoggedIn);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Failed to validate session:', error);
        setIsLoggedIn(false);
      }
    };
    checkAuth();
  });

  return (
      <Router>
        <div className="App">
          <Header login={isLoggedIn}  />
          <div className="d-flex"> {/* Use flex container to lay out sidebar and content */}
            <Sidebar  /> {/* Sidebar will take up space based on its width */}
            <div className="content flex-grow-1"> {/* Content will fill the rest of the space */}
              <Routes>
                <Route path="/" element={<Dashboard login={isLoggedIn} />} />
                <Route path="/reports" element={<Reports />} />
                 <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Intro />} />
                <Route path={"/add-income"} element={<Income />} />
                <Route path={"/add-expense"} element={<Expense />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;