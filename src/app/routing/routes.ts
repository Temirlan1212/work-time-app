import { Scanner } from "../components/Scanner/Scanner";
import { RoutesEnum } from "../shared/constants/routesEnum";

export const publicRoutes = [
  {
    path: RoutesEnum.HOME,
    component: Scanner,
  },
];

// export const privateRoutes = [
//   {
//     path: RoutesEnum.HOME,
//     component:
//   },
// ];
