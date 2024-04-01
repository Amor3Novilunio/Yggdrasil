import { FaPlus } from "react-icons/fa";
import TaskItem from "./components/TaskItem";

interface Props {
  onClickAddList: any;
}

const Tasks = ({ onClickAddList }: Props) => {
  return (
    <div className="shadow-lg p-5 rounded bg-white my-5 text-xs">
      <div
        className="flex items-center space-x-2 shadow p-2 hover:bg-slate-50 rounded cursor-pointer"
        onClick={onClickAddList}
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
          {[1, 2, 3, 4, 5, 67, 8].map((value,index) => (
            <TaskItem key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
