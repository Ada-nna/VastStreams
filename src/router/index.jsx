import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/homepage/Homepage";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

export default Router;
