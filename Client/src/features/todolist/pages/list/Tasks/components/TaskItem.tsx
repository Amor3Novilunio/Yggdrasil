import { FaAngleRight } from "react-icons/fa";
import { FaCalendarXmark } from "react-icons/fa6";
import { Todo_Task } from "../../../../../../app/models/Todolist_Task";

interface Props {
  Todo_Task: Todo_Task;
  viewTaskItemHandler: any;
}

const TaskItem = ({ Todo_Task, viewTaskItemHandler }: Props) => {
  return (
    <>
      {/* TaskListHere */}
      <div
        className="flex flex-col px-2 py-1 rounded hover:bg-slate-500 hover:text-white"
        onClick={viewTaskItemHandler}
      >
        <div className="flex justify-between items-center cursor-pointer">
          <div className="flex flex-col space-x-2 basis-full ">
            <p className="basis-full"> {Todo_Task.task_Name} </p>
            <small className="basis-full"> {Todo_Task.task_Description}</small>
          </div>
          <FaAngleRight />
        </div>
        {/* Chips */}
        <div className="my-1 flex items-center space-x-2 font-sans cursor-pointer">
          <FaCalendarXmark />
          <p>{Todo_Task.due_Date}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default TaskItem;
