const Navbar = () => {
  return (
    <>
      <div className="h-screen bg-gray-300 sticky">
        <div className="h-full py-10 flex flex-col justify-between items-center">
          {/* Logo */}
          <h1>haha</h1>
          {/* Navigation */}
          <div className="space-y-1">
            <button className="w-full hover:bg-sky-500 p-2 text-white">
              Dashboard
            </button>
            <button className="w-full shadow-inner bg-gray-100 p-2 text-slate-600 hover:bg-sky-500 hover:text-white ">
              Todolist
            </button>
          </div>
          {/* settings logout or some darkmode */}
          <h1>haha</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
