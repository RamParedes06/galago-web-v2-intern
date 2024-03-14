import { createHashRouter } from "react-router-dom";
import Index from "./pages/Index";
import Favorites from "./pages/FavoritePages/Favorites";
import FlightResultPage from "./pages/Flights/FlightResultPage";
import HelpCenter from "./pages/HelpCenter";
import SelectedFlights from "./pages/Flights/SelectedFlights";
import UserProfile from "./pages/UserProfile";
import PassengerDetails from "./pages/Flights/FlightBookingDetails";
import PromoPage from "./pages/PromoPage/PromoPage";
import ElNidoPage from "./pages/PromoPage/OverviewPage";
import BookingSummary from "./pages/Flights/BookingSummary";
import BookingConfirmation from "./pages/Flights/BookingConfirmation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import FavoritesPage from "./pages/FavoritesPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/promos",
    element: <PromoPage />,
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
  {
    path: "/elnidopage",
    element: <ElNidoPage />,
  },
  {
    path: "/booking-summary",
    element: <BookingSummary />,
  },
  {
    path: "/booking-confirmation",
    element: <BookingConfirmation />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-conditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/favorites-page",
    element: <FavoritesPage />,
  },
]);

export { router };
