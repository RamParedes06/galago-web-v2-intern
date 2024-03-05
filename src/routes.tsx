import { createHashRouter } from "react-router-dom";
import Index from "./pages/Index";
import Favorites from "./pages/FavoritePages/Favorites";

const router = createHashRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/christmas-vacation-2023",
    element: <Favorites />,
  },
]);

export { router };
