import { FaEllipsisV, FaPlus, FaAngleDown } from "react-icons/fa";

interface Props {
  title: string;
  completedList?: Array<object>;
  list: Array<object>;
  countClassName?: string;
}

const Board = ({ title, list, completedList = [] }: Props) => (
  <div className="flex space-x-5 mt-10 shrink-0 basis-1/5 mx-3">
    <div className="shadow-lg hover:shadow-inner bg-white rounded-lg p-3  basis-full">
      {/*  */}
      <div className="flex justify-between ">
        <h6>{title}</h6>
        <button>
          <FaEllipsisV />
        </button>
      </div>
      <hr className="my-3" />
      {/* Add Task */}
      <div className="flex items-center space-x-2">
        <FaPlus className="text-sky-500" />
        <small>Add a task</small>
      </div>
      <hr className="my-2" />
      {/* List */}
      <div className="space-y-2 my-4">
        {list.map(() => (
          <div className="flex space-x-3">
            <input type="radio" />
            <small>Task Name</small>
          </div>
        ))}
      </div>
      <hr className="my-2" />
      {/* Completed */}
      <div className="flex justify-between space-x-2">
        <small>Completed </small>
        <FaAngleDown className="text-sky-500" />
      </div>
      <hr className="my-2" />
      {/* List */}
      <div className="space-y-2 my-4">
        {completedList.map(() => (
          <div className="flex space-x-3">
            <input type="radio" />
            <small>Task Name</small>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default Board;
