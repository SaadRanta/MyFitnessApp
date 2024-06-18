import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFoodItem, setFoodData } from '../redux/slices/FoodSlice';
import { RootState, AppDispatch } from '../redux/store';

const Addfood = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { foodData } = useSelector((state: RootState) => state.food);

    dispatch(setFoodData);

  const handleDelete = (indexToDelete) => {
    dispatch(deleteFoodItem(indexToDelete));
  };

  const calculateTotals = () => {
    return foodData.reduce((totals, foodItem) => {
      totals.calories += foodItem.Energ_Kcal * foodItem.quantity;
      totals.carbs += foodItem['Carbohydrt_(g)'] * foodItem.quantity;
      totals.fat += foodItem['FA_Mono_(g)'] * foodItem.quantity;
      totals.protein += foodItem['Protein_(g)'] * foodItem.quantity;
      totals.sodium += foodItem['Sodium_(mg)'] * foodItem.quantity;
      totals.sugar += foodItem['Sugar_Tot_(g)'] * foodItem.quantity;
      totals.quantity += Number(foodItem.quantity);
      return totals;
    }, {
      calories: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
      sodium: 0,
      sugar: 0,
      quantity: 0
    });
  };

  const totals = calculateTotals();

  return (
    <div className="mt-5 px-5 flex flex-row items-start justify-center">
      <div className="w-full">
        {["Breakfast", "Lunch", "Dinner", "Snacks"].map((mealType, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-[#00548F] text-xl font-bold">{mealType}</h3>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase bg-[#00548F]">
                <tr>
                  <th scope="col" className="px-6 py-3">Product name</th>
                  <th scope="col" className="px-6 py-3">Calories</th>
                  <th scope="col" className="px-6 py-3">Carbs</th>
                  <th scope="col" className="px-6 py-3">Fat</th>
                  <th scope="col" className="px-6 py-3">Protein</th>
                  <th scope="col" className="px-6 py-3">Sodium</th>
                  <th scope="col" className="px-6 py-3">Sugar</th>
                  <th scope="col" className="px-6 py-3">Quantity</th>
                  <th scope="col" className="px-6 py-3">Mealtype</th>
                  <th scope="col" className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {foodData.filter((foodItem) => foodItem.mealType === mealType)
                  .map((foodItem, index) => (
                    <tr key={index} className="border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">{foodItem.Shrt_Desc}</th>
                      <td className="px-6 py-4">{(foodItem.Energ_Kcal * foodItem.quantity).toFixed(2)}</td>
                      <td className="px-6 py-4">{(foodItem["Carbohydrt_(g)"] * foodItem.quantity).toFixed(2)}</td>
                      <td className="px-6 py-4">{(foodItem["FA_Mono_(g)"] * foodItem.quantity).toFixed(2)}</td>
                      <td className="px-6 py-4">{(foodItem["Protein_(g)"] * foodItem.quantity).toFixed(2)}</td>
                      <td className="px-6 py-4">{(foodItem["Sodium_(mg)"] * foodItem.quantity).toFixed(2)}</td>
                      <td className="px-6 py-4">{(foodItem["Sugar_Tot_(g)"] * foodItem.quantity).toFixed(2)}</td>
                      <td className="px-6 py-4">{foodItem.quantity}</td>
                      <td className="px-6 py-4">{foodItem.mealType}</td>
                      <td className="px-6 py-4">
                        <a href="#" className="text-red-500 font-bold hover:underline" onClick={() => handleDelete(index)}>Delete</a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <p className="mt-3">
              <Link to="/FoodItem" className="text-blue-500 hover:underline">Add Food</Link>
            </p>
            <hr className="mt-3 w-full border-t-2" />
          </div>
        ))}
        <table>
          <thead className="text-xs text-white uppercase bg-[#00548F]">
            <tr>
              <th scope="col" className="px-6 py-3">Products Total</th>
              <th scope="col" className="px-6 py-3">Calories</th>
              <th scope="col" className="px-6 py-3">Carbs</th>
              <th scope="col" className="px-6 py-3">Fat</th>
              <th scope="col" className="px-6 py-3">Protein</th>
              <th scope="col" className="px-6 py-3">Sodium</th>
              <th scope="col" className="px-6 py-3">Sugar</th>
              <th scope="col" className="px-6 py-3">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <th scope="row" className="px-6 py-3 font-bold text-[#00548F] whitespace-nowrap">Totals</th>
              <td className="px-6 py-3 font-bold">{totals.calories.toFixed(2)}</td>
              <td className="px-6 py-3 font-bold">{totals.carbs.toFixed(2)}</td>
              <td className="px-6 py-3 font-bold">{totals.fat.toFixed(2)}</td>
              <td className="px-6 py-3 font-bold">{totals.protein.toFixed(2)}</td>
              <td className="px-6 py-3 font-bold">{totals.sodium.toFixed(2)}</td>
              <td className="px-6 py-3 font-bold">{totals.sugar.toFixed(2)}</td>
              <td className="px-6 py-3 font-bold">{totals.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Addfood;
