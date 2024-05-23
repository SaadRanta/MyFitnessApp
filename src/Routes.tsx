import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddFood from './components/AddFood';
import FoodItem from './pages/FoodItem';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AddFood />} />
      <Route path="/fooditem" element={<FoodItem />} />
    </Routes>
  );
};

export default AppRoutes;
