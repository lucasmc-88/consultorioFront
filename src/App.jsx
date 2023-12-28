import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarGeneral from './shared/NavBarGeneral';
import RegisterUsers from './users/registerUsers';
import SpecialtyTable from './specialty/specialtyTable';
import LoginUsers from './users/loginUsers';
import { AuthProvider, useAuth } from './authContext/authContext';
import DoctorList from './doctor/components/DoctorList';
import DoctorDropdown from './doctor/components/DoctorDropDown';
import CreateDoctor from './doctor/components/CreateDoctor';
import UpdateDoctor from './doctor/components/UpdateDoctor';
import AppointmentsByDoctor from './appointment/AppointmentsByDoctor';


const App = () => {
  return (
    
      <BrowserRouter>
    <NavBarGeneral/>
    <Routes>
    <Route path="/aaa" element={<LoginUsers/>} />
        <Route path="/aa" element={<RegisterUsers />} />
        <Route path="/specialtyTable" element={<SpecialtyTable />} />
        <Route path="/" element={<DoctorList />} />
        <Route path="/DoctorDropdown" element={<DoctorDropdown />} />
        <Route path="/CreateDoctor" element={<CreateDoctor />} />
        <Route path="/UpdateDoctor/:doctorId" element={<UpdateDoctor />} />
        <Route path="/AppointmentsByDoctor" element={<AppointmentsByDoctor />} />
        </Routes>
    </BrowserRouter>

  );
};

export default App;

