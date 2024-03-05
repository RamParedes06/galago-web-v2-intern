import Dropdown from "react-bootstrap/Dropdown";
import "../styles/favoritespage.scss";
import { Link } from "react-router-dom";

type data = {
  link: string;
};

const favorites = [
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/christmasvacation2023.jpg",
    title: "Christmas Vacation 2023",
    description: "2 saved places",
    link: "/christmas-vacation-2023",
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/summervacation2023.jpg",
    title: "Summer Vacation 2023",
    description: "10 saved places",
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/bday.jpg",
    title: "Birthday Vacation 2025",
    description: "5 saved places",
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/summervacation2026.jpg",
    title: "Summer Vacation 2026",
    description: "7 saved places",
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/christmasvacation2027.jpg",
    title: "Christmas Vacation 2027",
    description: "8 saved places",
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/birthdayvacation2028.jpg",
    title: "Birthday Vacation 2028",
    description: "12 saved places",
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/newyearceleb2029.jpg",
    title: "New Year's Celeb 2029",
    description: "2 saved places",
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/summervacation2026.jpg",
    title: "Recollection 2030",
    description: "16 saved places",
  },
];

const FavoritesPage = () => {
  return (
    <>
      <div className="favorite-wrapper">
        <div className="header">
          <h1>Favorites</h1>
          <a>+ Create new favorites</a>
        </div>
        <div className="favorites-container">
          {favorites.map((data: any, i) => (
            <>
              <Link to={data.link} style={{ textDecoration: "none" }}>
                <div className="favorites-card" key={i}>
                  <div className="img-cont">
                    <img src={data.image} alt="" />
                  </div>

                  <div className="favorite-info">
                    <div>
                      <p className="title">{data.title}</p>
                      <p className="desc">{data.description}</p>
                    </div>
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-custom-components">
                          :
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>Rename Favorites</Dropdown.Item>
                          <Dropdown.Item>Delete Favorites</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default FavoritesPage;
