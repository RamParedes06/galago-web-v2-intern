import { createHashRouter } from "react-router-dom";
import Index from "./pages/Index";
import Favorites from "./pages/FavoritePages/Favorites";
import FlightResultPage from "./pages/Flights/FlightResultPage";
import HelpCenter from "./pages/HelpCenter";
import SelectedFlights from "./pages/Flights/SelectedFlights";
import UserProfile from "./pages/UserProfile";
import PassengerDetails from "./pages/Flights/FlightBookingDetails";

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
    path: "/selected-flight",
    element: <SelectedFlights />,
  },
  {
    path: "/passenger-details",
    element: <PassengerDetails />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
]);

export { router };
