import AddNewTask from "../../forms/AddNewTask";
import { useState } from "react";
import Tasks from "./Tasks";
const ListOverview = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={`flex overflow-hidden`}>
      {/* Content */}
      <div
        className={`flex flex-col w-full h-screen 
        ${!show && "overflow-y-auto"}`}
      >
        <div className="mt-5 px-5 w-full">
          {/* Header */}
          <div className="flex justify-between ">
            <div className="flex space-x-5 text-4xl">
              <h1 className="font-bold">List Item</h1>
              <p className="shadow-lg px-3 py-1 rounded text-center bg-white">
                0
              </p>
            </div>
            <button className="text-xs mr-5 bg-slate-200 shadow rounded p-2 px-5 hover:bg-red-500 hover:text-white">
              Delete List
            </button>
          </div>
          {/* Body */}
          <Tasks onClickAddList={() => setShow(true)} />
        </div>
        {/* Sub Body*/}
      </div>
      {/* OffCanvas */}
      <div
        className={`h-screen shadow-lg bg-white  hidden`}
        id={!show ? "CloseAddNewTask" : "AddNewTask"}
      >
        <AddNewTask onClickCloseBtn={() => setShow(false)} />
      </div>
    </div>
  );
};
export default ListOverview;
