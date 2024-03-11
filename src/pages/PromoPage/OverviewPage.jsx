import React from "react";
import "../../styles/promo.scss";
import NavigationBar from "../../components/ui/NavigationBar";
import OverviewBanner from "../../components/promos/OverviewBanner";
import OverviewComponent from "../../components/promos/OverviewComponent";
import Itinerary from "../../components/promos/Itinerary";
import { Container } from "react-bootstrap";
import FooterComponent from "../../components/ui/FooterComponent";

function ElNidoPage() {
  return (
    <>
      <NavigationBar />
      <OverviewBanner />
      <OverviewComponent />
      <Container>
        <hr className="line" />
      </Container>
      <Itinerary></Itinerary>
      <FooterComponent />
    </>
  );
}

export default ElNidoPage;
