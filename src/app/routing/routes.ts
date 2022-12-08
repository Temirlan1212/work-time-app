import { Scanner } from "../components/Scanner/Scanner";
import { Home } from "../pages/Home/Home";
import { RoutesEnum } from "../shared/constants/routesEnum";

export const publicRoutes = [
  {
    path: RoutesEnum.HOME,
    component: Home,
  },
  {
    path: RoutesEnum.SCANNER,
    component: Scanner,
  },
];

// export const privateRoutes = [
//   {
//     path: RoutesEnum.HOME,
//     component:
//   },
// ];
