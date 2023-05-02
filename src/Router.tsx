import { createBrowserRouter } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Signup from "./Routes/Signup";

interface RouterElement {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
}

const routerData: RouterElement[] = [
  {
    id: 0,
    path: "/",
    label: "Home",
    element: <Home />,
  },
  {
    id: 1,
    path: "/login",
    label: "로그인",
    element: <Login />,
  },
  {
    id: 2,
    path: "/signup",
    label: "회원가입",
    element: <Signup />,
  },
];

export const router = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: router.element,
    };
  })
);
