import { Calendar } from "react-date-range";
import { FaX } from "react-icons/fa6";
import AddNewTaskEvent from "./events/AddNewTaskEvent";
import { observer } from "mobx-react-lite";
import "./css/AddNewTask.css"

interface Props {
  onClickCloseBtn: any;
}

const AddNewTask = ({ onClickCloseBtn }: Props) => {
  const {
    taskStore,
    dueDate,
    onChangeCalendarHandler,
    formInputs,
    FormInputHandler,
    deleteTask,
    clearInputFields,
    SaveTask,
    updateTask,
  } = AddNewTaskEvent();
  return (
    <>
      <div className="flex flex-col justify-around h-full absolute p-5">
        <div className="flex flex-col ">
          <div className="flex items-center justify-between ">
            <h1 className="font-bold">Task: </h1>
            <FaX
              className="mr-2 cursor-pointer mb-5"
              onClick={() => {
                onClickCloseBtn();
                clearInputFields();
              }}
            />
          </div>
          {/* forms */}
          <div className="flex flex-col space-y-2 mt-3 text-xs">
            <input
              className="shadow-inner p-2 w-full rounded bg-slate-50 "
              type="text"
              name="name"
              value={formInputs.name}
              onChange={FormInputHandler}
              placeholder="Task Name"
            />
            <textarea
              className="shadow-inner p-2  w-full rounded bg-slate-50"
              name="description"
              value={formInputs.description}
              placeholder="Task Description"
              onChange={FormInputHandler}
              rows={6}
            />
            <hr className="my-1" />
            <div className="flex items-center justify-between">
              <div className="text-center basis-full">
                <h1 className="font-bold">Due Date</h1>
                <p>{dueDate?.toISOString().split("T")[0]}</p>
              </div>
            </div>
            <hr />
            <Calendar date={dueDate} onChange={onChangeCalendarHandler} />
          </div>
        </div>
        {/* BUttons */}
        <div className="flex justify-around">
          {taskStore.taskItem !== undefined ? (
            <>
              <button
                className="p-2 px-5 shadow-md text-sm bg-slate-200 hover:bg-red-500  hover:text-white rounded"
                onClick={() => {
                  onClickCloseBtn();
                  deleteTask();
                }}
              >
                Delete Task
              </button>

              <button
                className="p-2 px-5 shadow-md text-sm bg-slate-200 hover:bg-sky-500  hover:text-white rounded"
                onClick={() => {
                  onClickCloseBtn();
                  updateTask();
                }}
              >
                Update Task
              </button>
            </>
          ) : (
            <button
              className="p-2 px-5 shadow-md text-sm bg-slate-200 hover:bg-sky-500  hover:text-white rounded"
              onClick={() => {
                onClickCloseBtn();
                {
                  /* UpdateTOswal */
                }
                SaveTask();
              }}
            >
              Create Task
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default observer(AddNewTask);
