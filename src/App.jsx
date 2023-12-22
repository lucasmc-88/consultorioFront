import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarGeneral from './shared/NavBarGeneral';
import RegisterUsers from './users/registerUsers';
import SpecialtyTable from './specialty/specialtyTable';
import LoginUsers from './users/loginUsers';
import { AuthProvider, useAuth } from './authContext/authContext';
import DoctorList from './doctor/components/DoctorList';
import DoctorDropdown from './doctor/components/DoctorDropDown';


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
    <NavBarGeneral/>
    <Routes>
    <Route path="/" element={<LoginUsers/>} />
        <Route path="/aa" element={<RegisterUsers />} />
        <Route path="/specialtyTable" element={<SpecialtyTable />} />
        <Route path="/doctorList" element={<DoctorList />} />
        <Route path="/DoctorDropdown" element={<DoctorDropdown />} />
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

