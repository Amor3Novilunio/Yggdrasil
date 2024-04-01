import "tw-elements-react/dist/css/tw-elements-react.min.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './App.css'
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Routes from "../routes/Routes";

function App() {
  const [darkmode, setDarkMode] = useState(false);
  useEffect(()=>{
    setDarkMode(localStorage.getItem("theme") === "dark");
  },[darkmode])

  const darkModeHandler = ()=>{
    localStorage.setItem("theme",!darkmode ? "dark": "light")
    setDarkMode(!darkmode)
  }

  return (
    <>
      <div className={`flex bg-slate-100 ${darkmode ? "dark" : ""}`}>
        {/* Navigation Bar */}
        <section className="z-10" style={{ flexBasis: "10%" }}>
          <Navbar darkMode={() => darkModeHandler()} mode={darkmode} />
        </section>
        {/* Content */}
        <section className="h-screen overflow-auto" style={{ flexBasis: "90%" }}>
          <Routes />
        </section>
      </div>
    </>
  );
}

export default App; 
