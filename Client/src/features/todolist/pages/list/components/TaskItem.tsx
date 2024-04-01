import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaCalendarXmark } from "react-icons/fa6";

const TaskItem = () => {
  const [onBodyClick, setOnBodyClick] = useState(false);
  return (
    <>
      {/* TaskListHere */}
      <div
        className="flex flex-col px-2 py-1 rounded hover:bg-slate-500 hover:text-white"
        onClick={() => {
          setOnBodyClick(!onBodyClick);
        }}
      >
        <div className="flex justify-between items-center cursor-pointer">
          <div className="flex flex-col space-x-2 basis-full ">
            <p className="basis-full"> Workout </p>
            <small className="basis-full"> 1 reps 2 reps</small>
          </div>
          <FaAngleRight />
        </div>
        {/* Chips */}
        <div className="my-1 flex items-center space-x-2 font-sans cursor-pointer">
          <FaCalendarXmark />
          <p>25-32-2002</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default TaskItem;
