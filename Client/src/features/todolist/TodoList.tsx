import Menu from "./menu/TodoMenu";
import ListOverview from "./pages/list/ListOverview";
import "./Todolist.css";

const TodoList = () => {
  return (
    <section className="font-raleway">
      <div className="flex space-x-5">
        <section className="shrink-0 basis-1/5 z-0" id="Menu">
          <Menu />
        </section>
        <section className="h-screen w-full overflow-y-auto" id="Page">
          {/* <Dashboard /> */}
          <ListOverview />
        </section>
      </div>
    </section>
  );
};

export default TodoList;
