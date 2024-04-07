import { FaPlus } from "react-icons/fa";
import TaskItem from "./components/TaskItem";
import { Todo_Task } from "../../../../../app/models/Todolist_Task";
import TaskEvent from "./events/TasksEvent";

interface Props {
  onClickOpenAddForm: any;
  taskList: Todo_Task[];
}

const Tasks = ({ onClickOpenAddForm, taskList }: Props) => {
  const { setTaskItem } = TaskEvent();

  return (
    <div className="shadow-lg p-5 rounded bg-white my-5 text-xs">
      <div
        className="flex items-center space-x-2 shadow p-2 hover:bg-slate-50 rounded cursor-pointer"
        onClick={onClickOpenAddForm}
      >
        <FaPlus />
        <h1>Add New Task</h1>
      </div>
      <hr className="my-4 " />
      <div
        className="overflow-y-auto scrollbar-thin scrollbar-webkit"
        style={{ height: "25rem" }}
      >
        <div className="flex flex-col space-y-3 mt-3 mx-2 ">
          {taskList.map((value, index) => (
            <TaskItem
              viewTaskItemHandler={() => {
                setTaskItem(value?.id);
                onClickOpenAddForm();
              }}
              Todo_Task={value}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
