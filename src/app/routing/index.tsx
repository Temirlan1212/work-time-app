import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

export const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((obj: any) => (
        <Route path={obj.path} element={<obj.component />} key={obj.path} />
      ))}
    </Routes>
  );
};
