import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddFood from './components/AddFood';
import Sample from './components/Sample';
import FoodItem from './components/FoodItem';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Sample />} />
      <Route path="/AddFood" element={<AddFood />} />
      <Route path="/fooditem" element={<FoodItem />} />
    </Routes>
  );
};

export default AppRoutes;
