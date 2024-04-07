import { useEffect } from "react";
import {
  FaSearch,
  FaAngleDoubleRight,
  FaCalendar,
  FaStickyNote,
} from "react-icons/fa";
import { FaGaugeHigh, FaListCheck, FaSquare } from "react-icons/fa6";
import TodoMenuNavigationItem from "./components/TodoMenuNavigationItem";
import { Todo_List } from "../../../app/models/Todolist_List";
import TodoMenuEvent from "./events/TodoMenuEvent";
import AddToList from "./forms/AddToList";

interface Props{
  list:Todo_List[],
}

const Menu = ({list}:Props) => {
  // listHeightChecker
  const { listHeight } = TodoMenuEvent({list});

  return (
    <div className="h-screen p-5 shadow-inner bg-white flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-widest">Menu</h1>
          {/* <FaEllipsisV /> */}
        </div>
        <hr className="my-1" />
        {/* Search bar */}
        <div className="flex items-center space-x-2 text-slate-500 ml-5 relative text-sm">
          <FaSearch className="absolute " />
          <input
            type="text"
            name="search"
            className="py-2 outline-none rounded pl-5 w-full "
            placeholder="Search..."
          />
        </div>
        {/* Task */}
        <hr className="my-2" />
        <div className="flex flex-col space-y-1 text-xs">
          <TodoMenuNavigationItem
            name="Dashboard"
            icon={<FaGaugeHigh />}
            count={null}
            NavigationPath="/Dashboard"
          />
          <h1 className="font-semibold tracking-wide ">Tasks</h1>
          <div className="flex flex-col space-y-1">
            <TodoMenuNavigationItem
              name="Today"
              icon={<FaListCheck />}
              count={0}
              NavigationPath="/Today"
            />
            <TodoMenuNavigationItem
              name="Upcoming"
              icon={<FaAngleDoubleRight />}
              count={0}
              NavigationPath="/Upcoming"
            />
            <TodoMenuNavigationItem
              name="Calendar"
              icon={<FaCalendar />}
              count={0}
              NavigationPath="/Calendar"
            />
            <TodoMenuNavigationItem
              name="Sticky Wall"
              icon={<FaStickyNote />}
              count={0}
              NavigationPath="/StickyWall"
            />
          </div>
        </div>
        <hr className="my-2" />
        {/* List */}
        <div className="my-2">
          <div className="flex flex-col space-y-1 text-xs">
            <h1 className="font-semibold tracking-wide">List</h1>
            <div
              className={`overflow-y-auto space-y-1 scrollbar-thin scrollbar-webkit  ${
                listHeight && "h-64"
              }`}
            >
              {list.map((value: Todo_List) => (
                <TodoMenuNavigationItem
                  key={value.id}
                  name={value.list_Title}
                  count={null}
                  icon={ <FaSquare className="text-sky-400" /> }
                  NavigationPath={`/List/${value.id}`}
                />
              ))}
            </div>
            <AddToList />
          </div>
        </div>
      </div>
      <div className="text-xs">
        {/* <NavigationItem name="Settings" icon={<FaListCheck />} active={false} /> */}
      </div>
      {/* settings */}
    </div>
  );
};

export default Menu;
