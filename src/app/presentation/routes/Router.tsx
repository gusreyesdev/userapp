import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";

import {
  UserLayout,
  UsersScreen,
  UserScreen,
  CreateUserScreen,
  UpdateUserScreen
} from "../../../features/main/user/presentation";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "dashboard",
        element: <UserLayout />,
        children: [
          {
            path: "",
            element: <UsersScreen />,
          },
          {
            path:"details",
            element: <UserScreen />
          },
          {
            path:"create-user",
            element: <CreateUserScreen />
          },
          {
            path:"update-user",
            element: <UpdateUserScreen />
          }
        ],
      },
      
    ],
  },
]);
