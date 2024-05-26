import axios from "axios";
import { useEffect, useState } from "react";

const FoodItem = () => {
  const [foodName, setFoodName] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

  useEffect(() => {
    axios
      .get("http://localhost:5000/Food")
      .then((response) => setFoodName(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const result = foodName.filter(item =>
        item.Shrt_Desc.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResult(result);
    } else {
      setSearchResult([]);
    }
  };

  const handleOptionClick = (option) => {
    setSearchQuery(option.Shrt_Desc);
    setSelectedFood(option);
    setSearchResult([]);
  };

  const handleAddButtonClick = () => {
    const selected = foodName.find(item => item.Shrt_Desc.toLowerCase() === searchQuery.toLowerCase());
  
    if(searchQuery===""){
alert("Please Add Food")
   }
   
    else if (selected) {
      setSelectedFood(selected);
    } else {
      setSelectedFood(null);
    }
  };

  return (
    <div className="flex flex-col items-center pt-5">
      <div className="relative mx-5 w-96 mb-4">
        <input
          type="text"
          className="border-4 border-black rounded-xl p-1 w-full"
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchResult.length > 0 && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-b-xl max-h-48 overflow-y-auto">
            {searchResult.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleOptionClick(item)}
              >
                {item.Shrt_Desc}
              </div>
            ))}
          </div>
        )}
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
      
      {selectedFood && quantity &&  (
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
