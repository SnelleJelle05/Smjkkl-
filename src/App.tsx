import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from './Authentication/Login';
import { RegisterPage } from './Authentication/Register';
import { AdminIndex } from './Admin/AdminIndex';
import { DashboardPage } from './Dashboard/Dashboard';
import ProjectenIndex from './Projecten/ProjectenIndex';
import ProjectAanmaken from './Projecten/ProjectAanmaken';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Admin/AdminIndex" element={<AdminIndex />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ProjectenIndex" element={<ProjectenIndex />} />
        <Route path="/AanmaakFormulier" element={<ProjectAanmaken />} />
      </Routes>
    </Router>
  );
};