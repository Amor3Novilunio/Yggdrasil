import { useState } from "react";
import { Calendar } from "react-date-range";
import { FaX } from "react-icons/fa6";

interface Props{
  onClickCloseBtn:any
}

const AddNewTask = ({onClickCloseBtn}:Props) => {
  const [dueDate, setDueDate] = useState<Date>(new Date());

  const onChangeCalendarHandler = (val: Date) => {
    console.log(dueDate);
    setDueDate(val);
  };

  return (
    <>
      <div className="flex flex-col justify-between h-full absolute p-5">
        <div className="flex flex-col ">
          <div className="flex items-center justify-between ">
            <h1 className="font-bold">Task: </h1>
            <FaX className="mr-2 cursor-pointer" onClick={onClickCloseBtn} />
          </div>
          {/* forms */}
          <div className="flex flex-col space-y-2 mt-3 text-xs">
            <input
              className="shadow-inner p-2 w-full rounded bg-slate-50 "
              type="text"
              placeholder="Task Name"
            />
            <textarea
              className="shadow-inner p-2  w-full rounded bg-slate-50"
              placeholder="Task Description"
              rows={6}
            />
            <hr className="my-1" />
            <div className="flex items-center justify-between">
              <div className="flex space-x-5 items-center">
                <label>List</label>
                <select className="p-2 shadow-md rounded bg-slate-50">
                  <option>Item Selected</option>
                </select>
              </div>
              <div className="text-center basis-full">
                <h1 className="font-bold">Due Date </h1>
                <p>{dueDate?.toISOString().split("T")[0]}</p>
              </div>
            </div>
            <hr />
            <Calendar date={dueDate} onChange={onChangeCalendarHandler} />
          </div>
        </div>
        {/* BUttons */}
        <div className=" flex justify-around">
          <button className="p-2 px-5 shadow-lg bg-slate-50 rounded">
            Delete Task
          </button>
          <button className="p-2 px-5 shadow-lg bg-sky-300 rounded">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNewTask;
