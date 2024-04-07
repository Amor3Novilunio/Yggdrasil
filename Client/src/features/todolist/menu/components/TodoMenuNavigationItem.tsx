import { NavLink } from "react-router-dom";

interface Props {
  icon: any;
  name: string;
  count?: number | null;
  NavigationPath: string;
}

const TodoMenuNavigationItem = ({
  NavigationPath,
  icon,
  name,
  count,
}: Props) => {
  return (
    <NavLink
      to={`/Todolist${NavigationPath}`}
      className={({ isActive }) =>
        [
          isActive && "shadow-inner bg-slate-100",
          "flex justify-between py-1 px-2 rounded hover:shadow hover:bg-slate-100 cursor-pointer",
        ].join(" ")
      }
    >
      <div className="flex items-center space-x-3">
        {icon}
        <p className="font-bold">{name}</p>
      </div>

      <p
        className={`p-1 px-2 rounded text-center ${
          count === null ? "py-3" : "shadow-lg bg-white"
        }`}
      >
        {count !== null && count}
      </p>
    </NavLink>
  );
};

export default TodoMenuNavigationItem;
