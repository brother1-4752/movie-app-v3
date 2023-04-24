import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home";

// import Coin from "./routes/Coin";
// import Coins from "./routes/Coins";

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
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: router.element,
    };
  })
);

// interface IRouterProps {
//   toggleDark: () => void;
//   isDark: boolean;
// }

// function Router({ toggleDark, isDark }: IRouterProps) {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/:coinId">
//           <Coin isDark={isDark} />
//         </Route>
//         <Route path="/">
//           <Coins toggleDark={toggleDark} />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }
// export default Router;
