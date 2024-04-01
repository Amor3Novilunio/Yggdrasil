import { useEffect } from "react";
import randomColor from "randomcolor";
import {
  FaSearch,
  FaAngleDoubleRight,
  FaCalendar,
  FaStickyNote,
} from "react-icons/fa";
import { FaGaugeHigh, FaListCheck, FaSquare } from "react-icons/fa6";
import NavigationItem from "./components/NavigationItem";
import AddList from "../forms/AddList";
import eventHandler from "../eventHandler/eventHandler";
import { useStore } from "../../../app/stores/Store";
import { observer } from "mobx-react-lite";
import { Todo_List } from "../../../app/models/Todolist_List";
const Menu = () => {
  const { todolistStore } = useStore();

  const { listHeight, listHeightChecker } = eventHandler.MenuEventHandler();

  useEffect(() => {
    listHeightChecker(todolistStore.listData);
    todolistStore.getList();
  }, [todolistStore]);

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
            className="py-2 outline-none rounded pl-5 w-full "
            placeholder="Search..."
          />
        </div>
        {/* Task */}
        <hr className="my-2" />
        <div className="flex flex-col space-y-1 text-xs">
          <NavigationItem
            name="Dashboard"
            icon={<FaGaugeHigh />}
            count={0}
            active={false}
          />
          <h1 className="font-semibold tracking-wide ">Tasks</h1>
          <div className="flex flex-col space-y-1">
            <NavigationItem
              name="Today"
              icon={<FaListCheck />}
              count={0}
              active={true}
            />
            <NavigationItem
              name="Upcoming"
              icon={<FaAngleDoubleRight />}
              count={0}
              active={false}
            />
            <NavigationItem
              name="Calendar"
              icon={<FaCalendar />}
              count={0}
              active={false}
            />
            <NavigationItem
              name="Sticky Wall"
              icon={<FaStickyNote />}
              count={0}
              active={false}
            />
          </div>
        </div>
        <hr className="my-2" />
        {/* List */}
        <div className="my-2">
          <div className="flex flex-col space-y-1 text-xs">
            <h1 className="font-semibold tracking-wide">List</h1>
            <div className={`overflow-y-auto  ${listHeight && "h-64"}`}>
              {todolistStore.listData.map((value: Todo_List, index: any) => (
                <NavigationItem
                  key={index}
                  name={value.list_Title}
                  icon={
                    <FaSquare
                      style={{
                        color: randomColor({
                          luminosity: "bright",
                          hue: "blue",
                          format: "hex", // e.g. 'rgb(225,200,20)'
                        }),
                      }}
                    />
                  }
                  count={0}
                  active={false}
                />
              ))}
            </div>
            <AddList />
          </div>
        </div>
      </div>
      <div className="text-xs">
        <NavigationItem
          name="Settings"
          icon={<FaListCheck />}
          count={0}
          active={false}
        />
      </div>
      {/* settings */}
    </div>
  );
};

export default observer(Menu);
