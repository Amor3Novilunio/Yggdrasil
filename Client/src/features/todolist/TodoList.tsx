import { Outlet } from "react-router-dom";
import Menu from "./menu/TodoMenu";
import "./Todolist.css";
import TodolistEvents from "./events/TodolistEvents";
import { observer } from "mobx-react-lite";

const Todolist = () => {
  // GetList
  const { listStore } = TodolistEvents();

  return (
    <section className="font-raleway">
      <div className="flex space-x-5">
        <section className="shrink-0 basis-1/5 z-0" id="Menu">
          <Menu list={listStore.listArray} />
        </section>
        <section className="h-screen w-full overflow-y-auto" id="Page">
          <Outlet />
        </section>
      </div>
    </section>
  );
};

export default observer(Todolist);
