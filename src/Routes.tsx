import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AddFood from './components/AddFood';
import Sample from './components/Sample';
import FoodItem from './components/FoodItem';

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const foodData = location.state?.foodData;

  return (
    <Routes>
      <Route path="/" element={<Sample foodData={foodData} />} />
      <Route path="/AddFood" element={<AddFood />} />
      <Route path="/fooditem" element={<FoodItem />} />
    </Routes>
  );
};

export default AppRoutes;
