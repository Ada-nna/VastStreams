import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/homepage/Homepage";
import MoviesShows from "../components/movies_and_shows/MoviesShows";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/movies",
    element: <MoviesShows />,
  },
]);

export default Router;
