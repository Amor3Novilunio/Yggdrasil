import { NavLink } from "react-router-dom";

interface Props {
  NavigationName: string;
  NavigationPath: string;
}

const NavItem = ({ NavigationName, NavigationPath }: Props) => {
  return (
    <NavLink
      to={NavigationPath}
      className={({ isActive }) =>
        isActive
          ? "w-full bg-slate-100 py-2 text-slate-800 "
          : "w-full py-2 text-slate-800 "
      }
    >
      {NavigationName}
    </NavLink>
  );
};

export default NavItem;
