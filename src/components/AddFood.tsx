import { Link } from "react-router-dom"

const AddFood = () => {

  return (
    <div className="">

<div className="flex justify-center items-center h-screen">
  <button className="rounded-full bg-green-500 p-2 border-white border-2">
<Link to="/FoodItem">Add Food</Link> 
  </button>
</div>


    </div>
  )
}

export default AddFood