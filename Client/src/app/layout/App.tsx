import Routes from "../routes/Routes";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <div className="flex bg-gray-100 space-x-5">
        <div className="basis-1/12">
          <Navbar />
        </div>
        <div className="basis-11/12">
          <div className="p-5 overflow-auto h-screen">
            <Routes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
