import { useEffect, useState } from "react";
import { getFoodItems } from "../redux/slices/FoodSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from "../redux/store";
import AutoCompleteText from "../components/AutoCompleteText";

const FoodItem = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [mealType, setMealType] = useState("Breakfast");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { food } = useSelector((state: RootState) => state.fooditems);

  useEffect(() => {
    dispatch(getFoodItems());
  }, [dispatch]);

  const handleFoodSelect = (shortDesc: string) => {
    const selected = food.find(item => item.Shrt_Desc === shortDesc);
    setSelectedFood(selected);
    setSearchQuery(shortDesc);
  };

  const handleAddButtonClick = () => {
    if (quantity === 0) {
      alert("Please add a valid quantity");
      return;
    }

    if (!selectedFood) {
      alert("Please select a valid food item");
      return;
    }

    const foodData = {
      ...(selectedFood),
      quantity: Number(quantity),
      mealType
    };

    const existingFoodData = JSON.parse(localStorage.getItem('foodData')) || [];

    existingFoodData.push(foodData);

    localStorage.setItem('foodData', JSON.stringify(existingFoodData));

    navigate('/', { state: { foodData } });
  };

  const handleQuantity = (e) => {
    let value = Number(e.target.value);

    if (value < 0) {
      setQuantity(0);
    } else {
      setQuantity(value);
    }
  };

  return (
    <div className="flex flex-col items-center pt-5">
      <div className="relative mx-5 w-96 mb-4">
        <AutoCompleteText items={food} onSelect={handleFoodSelect} />
      </div>
      <div className="mb-4 w-96">
        <input
          type="number"
          className="border-2 border-black rounded-xl p-1 w-full"
          placeholder="Quantity"
          value={quantity}
          onChange={handleQuantity}
        />
      </div>
      <div className="mb-4 w-96">
        <select
          className="border-2 border-black rounded-xl p-1 w-full"
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Snacks">Snacks</option>
          <option value="Dinner">Dinner</option>
        </select>
      </div>
      
      {selectedFood && quantity > 0 && (
        <div className="mt-4 p-4 border border-gray-300 rounded-xl w-96 bg-white shadow-lg">
          <h3 className="text-xl font-bold mb-2">{selectedFood.Shrt_Desc}</h3>
          <p className="mb-1">
            <strong>Quantity:</strong> {quantity}
          </p>
          <p className="mb-1">
            <strong>Meal Type:</strong> {mealType}
          </p>
        </div>
      )}
      <button
        className="px-5 py-2 mt-10 rounded-full text-lg bg-black text-white font-semibold"
        onClick={handleAddButtonClick}
      >
        Add Food
      </button>
    </div>
  );
};

export default FoodItem;
