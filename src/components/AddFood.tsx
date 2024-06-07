import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Addfood = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const storedFoodData = JSON.parse(localStorage.getItem('foodData')) || [];
    setFoodData(storedFoodData);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedFoodData = foodData.filter((_, index) => index !== indexToDelete);
    setFoodData(updatedFoodData);
    localStorage.setItem('foodData', JSON.stringify(updatedFoodData));
  };

  return (
    <div className='mt-5 px-5 flex flex-row items-start justify-center'>
      <div className='w-full'>
        {["Breakfast", "Lunch", "Dinner", "Snacks"].map((mealType, index) => (
          <div key={index} className='flex flex-col'>
            <h3 className='text-[#00548F] text-xl font-bold'>{mealType}</h3>
            <p className='mt-3'>
              <Link to="/FoodItem" className='text-blue-500 hover:underline'>Add Food</Link>
            </p>
            <hr className='mt-3 w-full border-t-2' />
          </div>
        ))}
      </div>

      <div className="flex items-center shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-[#00548F] ">
            <tr>
              <th scope="col" className="px-6 py-3">Product name</th>
              <th scope="col" className="px-6 py-3">Calories</th>
              <th scope="col" className="px-6 py-3">Carbs</th>
              <th scope="col" className="px-6 py-3">Fat</th>
              <th scope="col" className="px-6 py-3">Protein</th>
              <th scope="col" className="px-6 py-3">Sodium</th>
              <th scope="col" className="px-6 py-3">Sugar</th>
              <th scope="col" className="px-6 py-3">Quantity</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {foodData.map((foodItem, index) => (
              <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {foodItem.Shrt_Desc}
                </th>
                <td className="px-6 py-4">{(foodItem.Energ_Kcal * foodItem.quantity).toFixed(2)}</td>
                <td className="px-6 py-4">{(foodItem['Carbohydrt_(g)'] * foodItem.quantity).toFixed(2)}</td>
                <td className="px-6 py-4">{(foodItem['FA_Mono_(g)'] * foodItem.quantity).toFixed(2)}</td>
                <td className="px-6 py-4">{(foodItem['Protein_(g)'] * foodItem.quantity).toFixed(2)}</td>
                <td className="px-6 py-4">{(foodItem['Sodium_(mg)'] * foodItem.quantity).toFixed(2)}</td>
                <td className="px-6 py-4">{(foodItem['Sugar_Tot_(g)'] * foodItem.quantity).toFixed(2)}</td>
                <td className="px-6 py-4">{foodItem.quantity}</td>
                <td className="px-6 py-4">
                  <a href="#" className="text-red-500 font-bold hover:underline" onClick={() => handleDelete(index)}>Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Addfood;
