const Header = () => {
  return (
    <div className="w-full px-5 h-28 flex justify-between items-center bg-white shadow-md">
      <div>
        <h3 className="px-20 text-3xl font-bold text-blue-500">Myfitness</h3>
      </div>

      <div className="flex items-center h-full gap-10">
        <h3 className="text-lg font-bold italic flex items-center">
          Hi, <span className="text-[#00548F] ml-1">Saad</span>
        </h3>

        <button className="rounded-full text-white bg-[#00548F] w-24 h-10 hover:bg-blue-600 transition-colors duration-300 shadow-lg">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Header;
