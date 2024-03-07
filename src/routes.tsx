import { createHashRouter } from "react-router-dom";
import Index from "./pages/Index";
import Favorites from "./pages/FavoritePages/Favorites";
import FlightResultPage from "./pages/FlightResultPage";
import HelpCenter from "./pages/HelpCenter";
import UserProfile from "./pages/UserProfile";

const router = createHashRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },

  {
    path: "/flight-results",
    element: <FlightResultPage />,
  },
  {
    path: "/help-center",
    element: <HelpCenter />,
  },

  {
    path: "/profile",
    element: <UserProfile />,
  },
]);

export { router };
