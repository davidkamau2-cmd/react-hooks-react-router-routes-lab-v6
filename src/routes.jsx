import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Oops! Looks like something went wrong.</h1>
  },
  {
    path: "/actors",
    element: <Actors />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/movie/:id",
    element: <Movie />
  }
]; 


export default routes;