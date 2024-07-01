// src/routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import SettleUp from './components/SettleUp';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/add-expense" element={<AddExpense />} />
    <Route path="/settle-up" element={<SettleUp />} />
  </Routes>
);

export default AppRoutes;
