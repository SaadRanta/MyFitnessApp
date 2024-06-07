import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import FoodItem from './components/FoodItem';
import Addfood from './components/Addfood';

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const foodData = location.state?.foodData;

  return (

    
    <Routes>
      <Route path="/" element={<Addfood foodData={foodData} />} />
      <Route path="/fooditem" element={<FoodItem />} />
    </Routes>
  );
};

export default AppRoutes;
