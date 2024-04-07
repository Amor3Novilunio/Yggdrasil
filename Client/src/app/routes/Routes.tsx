import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Dashboard from "../../features/todolist/pages/dashboard/Dashboard";
import ListOverview from "../../features/todolist/pages/list/ListOverview";
import Todolist from "../../features/todolist/Todolist";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Todolist",
        element: <Todolist />,
        children: [
          { path: "/Todolist/Dashboard", element: <Dashboard /> },
          { path: "/Todolist/Today", element: <Dashboard /> },
          { path: "/Todolist/Upcoming", element: <Dashboard /> },
          { path: "/Todolist/Calendar", element: <Dashboard /> },
          { path: "/Todolist/StickyWall", element: <Dashboard /> },
          { path: "/Todolist/List/:id", element: <ListOverview /> },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
