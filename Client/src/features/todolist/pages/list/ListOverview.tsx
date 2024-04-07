import AddNewTask from "./forms/AddNewTask";
import { observer } from "mobx-react-lite";
import ListOverviewEvent from "./events/ListOverviewEvent";
import Tasks from "./Tasks/Tasks";
import "./ListOverview.css";
const ListOverview = () => {
  const {
    listItem,
    taskArray,
    show,
    setShowHandlerTrue,
    setShowHandlerFalse,
    onClickDeleteList,
  } = ListOverviewEvent();
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
              <h1 className="font-bold">{listItem?.list_Title}</h1>
              <p className="shadow-lg px-3 py-1 rounded text-center bg-white">
                0
              </p>
            </div>
            <button
              className="text-xs mr-5 bg-slate-200 shadow rounded p-2 px-5 hover:bg-red-500 hover:text-white"
              onClick={onClickDeleteList}
            >
              Delete List
            </button>
          </div>
          {/* Body */}
          <Tasks onClickOpenAddForm={setShowHandlerTrue} taskList={taskArray} />
        </div>
        {/* Sub Body*/}
      </div>
      {/* OffCanvas */}
      {show !== undefined && (
        <div
          className={`h-screen shadow-lg bg-white `}
          id={!show ? "CloseAddNewTask" : "AddNewTask"}
        >
          <AddNewTask onClickCloseBtn={setShowHandlerFalse} />
        </div>
      )}
    </div>
  );
};
export default observer(ListOverview);
