import React, { createContext, useState, useEffect } from 'react';  
import { mockVacancies } from '../mock/vacancies';  

export const VacancyContext = createContext();  

export const VacancyProvider = ({ children }) => {  
  const [vacancies, setVacancies] = useState([]);  
  const [applications, setApplications] = useState([]);  

  useEffect(() => {  
    setVacancies(mockVacancies);  
    // Mocks iniciales de aplicaciones para demo (2 pendientes)  
    setApplications([  
      {  
        id: 'app1',  
        vacancyId: '1',  
        studentName: 'Juan Pérez',  
        status: 'pending', // pending, accepted, rejected  
        appliedAt: new Date().toISOString()  
      },  
      {  
        id: 'app2',  
        vacancyId: '3',  
        studentName: 'María García',  
        status: 'pending',  
        appliedAt: new Date(Date.now() - 86400000).toISOString() // Ayer  
      }  
    ]);  
  }, []);  

  const addVacancy = (newVacancy) => {  
    const vacancyWithId = {  
      ...newVacancy,  
      id: Date.now().toString(),  
      createdAt: new Date().toISOString(),  
      company: 'Mi Empresa'  
    };  
    setVacancies(prev => [vacancyWithId, ...prev]);  
  };  

  const deleteVacancy = (id) => {  
    setVacancies(prev => prev.filter(v => v.id !== id));  
    setApplications(prev => prev.filter(app => app.vacancyId !== id)); // Borra apps de vacante eliminada  
  };  

  const addApplication = (vacancyId) => {  
    const application = {  
      id: Date.now().toString() + Math.random().toString(36),  
      vacancyId,  
      studentName: 'Juan Pérez', // Mock del estudiante logueado (expandir con auth después)  
      status: 'pending',  
      appliedAt: new Date().toISOString()  
    };  
    setApplications(prev => [application, ...prev]); // Nueva app arriba  
  };  

  const updateApplicationStatus = (applicationId, newStatus) => {  
    setApplications(prev =>  
      prev.map(app =>  
        app.id === applicationId ? { ...app, status: newStatus } : app  
      )  
    );  
  };  

  // Helper para obtener apps por vacante  
  const getApplicationsByVacancy = (vacancyId) => {  
    return applications.filter(app => app.vacancyId === vacancyId);  
  };  

  return (  
    <VacancyContext.Provider value={{  
      vacancies,  
      applications,  
      addVacancy,  
      deleteVacancy,  
      addApplication,  
      updateApplicationStatus,  
      getApplicationsByVacancy  
    }}>  
      {children}  
    </VacancyContext.Provider>  
  );  
};