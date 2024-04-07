import "./Navbar.css";
import NavItem from "./components/NavItem";

interface Props{
    darkMode:any,
    mode:boolean
}

const Navbar = ({ darkMode, mode }: Props) => {
  return (
    <>
      <div className="h-screen bg-white dark:bg-slate-200">
        <div className="flex flex-col justify-between h-full">
          {/* Top */}
          <div className="text-center my-5">
            <h1 className="text-xl font-bold">Yggdrasil</h1>
          </div>
          {/* Mid */}
          <div className="flex flex-col space-y-2">
            <NavItem NavigationPath="/" NavigationName="Dashboard" />
            <NavItem NavigationPath="/Todolist" NavigationName="Todolist" />
          </div>

          {/* Bot */}
          <div className="py-5 px-2 flex flex-col space-y-5 items-center justify-center">
            <div
              className={`rounded-full shadow-inner bg-slate-300 h-8 w-3/5 relative ${
                mode ? "darkmodeEnable" : "darkmodeDisable "
              }`}
            >
              <div
                className={`rounded-full shadow-2xl p-4 absolute bg-slate-500 cursor-pointer`}
                onClick={darkMode}
                id={mode ? "enableDarkMode" : "disableDarkMode"}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
