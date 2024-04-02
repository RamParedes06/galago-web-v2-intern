import React from "react";
import { createHashRouter } from "react-router-dom";
import Index from "./pages/Index";
import Favorites from "./pages/FavoritePages/Favorites";
import FlightResultPage from "./pages/flights/FlightResultPage";
import HelpCenter from "./pages/HelpCenter";
import SelectedFlights from "./pages/flights/SelectedFlights";
import UserProfile from "./pages/UserProfile";
import BookingDetails from "./pages/flights/FlightBookingDetails";
import PromoPage from "./pages/promopage/PromoPage";
import ElNidoPage from "./pages/promopage/OverviewPage";
import BookingSummary from "./pages/flights/BookingSummary";
import BookingConfirmation from "./pages/flights/BookingConfirmation";
import HotelResultPage from "./pages/hotels/HotelResultPage";
import HotelProfile from "./pages/hotels/HotelProfile";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import FavoritesPage from "./pages/FavoritesPage";
import BookAndTrip from "./pages/BookAndTrip";
import EmptyBookingsAndTrips from "./components/bookingsandtrips/EmptyBookingsAndTrips";
import HotelBookingDetails from "./pages/hotels/HotelBookingDetails";
import HotelBookingSummary from "./pages/hotels/HotelBookingSummary";
import HotelBookingConfirmation from "./pages/hotels/HotelBookingConfirmation";

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
    path: "/booking-details",
    element: <BookingDetails />,
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
    path: "/hotel-result",
    element: <HotelResultPage />,
  },
  {
    path: "/hotel-profile",
    element: <HotelProfile />,
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
  {
    path: "/bookings-and-trips",
    element: <BookAndTrip />,
  },
  {
    path: "/empty-bookings-and-trips",
    element: <EmptyBookingsAndTrips />,
  },
  {
    path: "/hotel-booking-details",
    element: <HotelBookingDetails />,
  },
  {
    path: "/hotel-booking-summary",
    element: <HotelBookingSummary />,
  },
  {
    path: "/hotel-booking-confirmation",
    element: <HotelBookingConfirmation />,
  },
]);

export { router };
