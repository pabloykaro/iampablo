import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../pages/Home";

let router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />} />)
);

export function Routes() {
  return <RouterProvider router={router} />;
}
