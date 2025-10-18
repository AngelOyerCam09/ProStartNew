import React, { useState, useEffect } from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import { motion } from 'framer-motion';  
import { VacancyProvider } from './contexts/VacancyContext';  
import LandingPage from './components/LandingPage';  
import RegisterStudent from './components/RegisterStudent';  
import RegisterCompany from './components/RegisterCompany';  
import LoginStudent from './components/LoginStudent';  
import LoginCompany from './components/LoginCompany';  
import DashboardStudent from './components/DashboardStudent';  
import DashboardCompany from './components/DashboardCompany';  
import TermsAndConditions from './components/TermsAndConditions';  

const App = () => {  
  const [loading, setLoading] = useState(true);  

  useEffect(() => {  
    const timer = setTimeout(() => {  
      setLoading(false);  
    }, 2500);  
    return () => clearTimeout(timer);  
  }, []);  

  if (loading) {  
    return (  
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100 flex items-center justify-center p-4">  
        <motion.div  
          className="text-center"  
          initial={{ opacity: 0, scale: 0.8 }}  
          animate={{ opacity: 1, scale: 1 }}  
          transition={{ duration: 0.5 }}  
        >  
          <div className="bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-400 rounded-3xl p-6 mb-6 shadow-2xl">  
            <img  
              src="https://utfs.io/f/5BN0V4mlt4NUXbiOTt3ikVqSE2R0lvYyWceT5uxfm3UMzsrB"  
              alt="ProStart Logo"  
              className="w-24 h-auto mx-auto"  
            />  
          </div>  
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-500 mx-auto mb-4"></div>  
          <p className="text-gray-700 font-medium">Cargando ProStart...</p>  
        </motion.div>  
      </div>  
    );  
  }  

  return (  
    <VacancyProvider>  
      <Router>  
        <div className="App">  
          <Routes>  
            <Route path="/" element={<LandingPage />} />  
            <Route path="/register-student" element={<RegisterStudent />} />  
            <Route path="/register-company" element={<RegisterCompany />} />  
            <Route path="/login-student" element={<LoginStudent />} />  
            <Route path="/login-company" element={<LoginCompany />} />  
            <Route path="/dashboard-student" element={<DashboardStudent />} />  
            <Route path="/dashboard-company" element={<DashboardCompany />} />  
            <Route path="/terms" element={<TermsAndConditions />} />  
          </Routes>  
        </div>  
      </Router>  
    </VacancyProvider>  
  );  
};  

export default App;