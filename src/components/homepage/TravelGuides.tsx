import BannerTexts from "./BannerTexts";
import {Container} from 'react-bootstrap';

const travelData = [
    {
        // image: '',
        // title: 'Bohol Countryside Tour: The Best Tour for Bohol First-Timers',
        // subtitle:
    }
]
function TravelGuides() {
  return (
    <Container className="travel-guides-container">
      <BannerTexts
        title="Travel Guides"
        subtitle="Looking for travel inspiration? Don't miss out on the latest travel updates, guides, and itineraries!"
      />
      

    </Container>
  );
}

export default TravelGuides;
