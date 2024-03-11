import React from "react";
import "../../styles/promo.scss";
import "../../styles/button.scss";
import NavigationBar from "../../components/ui/NavigationBar";
import HeaderBanner from "../../components/promos/HeaderBanner";
import AdventureTwo from "../../components/promos/LatestPromos";
import Travel from "../../components/promos/Travel";
import FooterComponent from "../../components/ui/FooterComponent";
import { Container } from "react-bootstrap";
import Adventure from "../../components/homepage/Adventure";
import BannerTexts from "../../components/homepage/BannerTexts";

function PromoPage() {
  return (
    <>
      <NavigationBar />
      <HeaderBanner />
      <div className="promo-page-container">
        <div className="adventure-container">
          <BannerTexts
            titleclass="title"
            title="Go on an adventure!"
            subtitle="Ready to explore the Philippines and the world? Check out our latest travel promos!"
          />
          <Adventure />
        </div>

        <Container>
          <hr />
        </Container>
        <AdventureTwo />
        <Container>
          <hr />
        </Container>
        <Travel />
      </div>
      <FooterComponent />
    </>
  );
}

export default PromoPage;
