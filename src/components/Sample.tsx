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
        <div className='flex justify-between items-center h-full'>
            <div>
                       { (
                foodDetails.map((item, index) => (
                    <div key={index} className='flex flex-row  items-center'>
                        <div className='flex flex-col'>
                            <h3 className='text-blue-500 text-xl font-bold'>{item.name}</h3>
                            <p className='mt-3'>
                                <Link to="/FoodItem">Add Food</Link>
                            </p>
                            <hr className='mt-3 w-full border-t-2 ' />
                        </div>
                    </div>
                ))
            )}
            </div>

<div>


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Calories
                </th>
                <th scope="col" className="px-6 py-3">
                    Carbs
                </th>
                <th scope="col" className="px-6 py-3">
                    Fat
                </th>
                <th scope="col" className="px-6 py-3">
                    Protein
                </th>
                <th scope="col" className="px-6 py-3">
                    Sodium
                </th>
                <th scope="col" className="px-6 py-3">
                    Sugar
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

</div>

        </div>
    );
};

export default Sample;



{/* <div>
<h3>Food Name :</h3>
<p>{foodData.Shrt_Desc}
{console.log(foodData)}
</p>
<h3>Qty: </h3>
<p>{foodData.quantity}</p>
<h3>Meal Type: </h3> <p>{foodData.mealType}</p>
</div> */}
