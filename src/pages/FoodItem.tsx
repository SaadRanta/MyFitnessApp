import axios from "axios";
import { useEffect, useState } from "react";
import { getFoodItems } from "../redux/slices/FoodSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import AutoCompleteText from "../components/AutoCompleteText";

const FoodItem = () => {
  const [foodName, setFoodName] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState();
  const [quantity, setQuantity] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

  const dispatch = useDispatch<AppDispatch>();

  const { food } = useSelector((state: RootState) => state.fooditems);

  useEffect(() => {
    dispatch(getFoodItems());
  }, [dispatch]);

  const handleFoodSelect = (shortDesc) => {
    const selected = food.find(item => item.Shrt_Desc === shortDesc);
    setSelectedFood(selected);
    setSearchQuery(shortDesc);
  };

  const handleAddButtonClick = () => {
    if (searchQuery === "") {
      alert("Please add food");
      return;
    }

    if (!selectedFood) {
      alert("Please select a valid food item");
      return;
    }

    console.log(selectedFood, quantity, mealType);
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
          onChange={(e) => setQuantity(e.target.value)}
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
          <option value="Dinner">Dinner</option>
        </select>
      </div>
      
      {selectedFood && quantity && (
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
