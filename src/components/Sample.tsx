import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sample = ({ foodData }) => {
    const [showItems, setShowItems] = useState(false);

    const foodDetails = [
        { name: "Breakfast" },
        { name: "Lunch" },
        { name: "Dinner" },
        { name: "Snacks" },
    ];

    const handleClick = () => {
        setShowItems(true);
    };

    return (
        <div className='px-5 flex flex-row items-start justify-center h-screen'>
            <div className='w-full'>
                {foodDetails.map((item, index) => (
                    <div key={index} className='flex flex-col'>
                        <h3 className='text-blue-500 text-xl font-bold'>{item.name}</h3>
                        <p className='mt-3'>
                            <Link to="/FoodItem" className='text-blue-500 hover:underline'>Add Food</Link>
                        </p>
                        <hr className='mt-3 w-full border-t-2' />
                    </div>
                ))}
            </div>

            <div className="flex items-center shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Product name</th>
                            <th scope="col" className="px-6 py-3">Calories</th>
                            <th scope="col" className="px-6 py-3">Carbs</th>
                            <th scope="col" className="px-6 py-3">Fat</th>
                            <th scope="col" className="px-6 py-3">Protein</th>
                            <th scope="col" className="px-6 py-3">Sodium</th>
                            <th scope="col" className="px-6 py-3">Sugar</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {foodData.Shrt_Desc}

                            </th>
                            <td className="px-6 py-4">{foodData["Cholestrl_(mg)"]}</td>
                            <td className="px-6 py-4">{foodData['Carbohydrt_(g)']}</td>
                            <td className="px-6 py-4">{foodData.Energ_Kcal}</td>
                            <td className="px-6 py-4">{foodData['Protein_(g)']}</td>
                            <td className="px-6 py-4">{foodData['Sodium_(mg)']}</td>
                            <td className="px-6 py-4">{foodData['Sugar_Tot_(g)']}</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                            {/* plz check calories carbs and fat this value is not found in the dataset */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sample;

