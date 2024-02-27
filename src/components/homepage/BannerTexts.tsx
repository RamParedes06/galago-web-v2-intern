import { Container } from "react-bootstrap";
import '../../styles/homepage.scss'

type BannerTextsProps = {
  title: string;
  subtitle: string;
};
function BannerTexts({ title, subtitle }: BannerTextsProps) {
  return (
    <Container className="bannertexts-container">
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </Container>
  );
}

export default BannerTexts;
