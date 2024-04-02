import "../styles/favoritespage.scss";
import FooterComponent from "../components/ui/FooterComponent";
import NavigationBarWhite from "../components/ui/NavigationBarWhite";
import { Form, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import FavoritesCard from "../components/favoritespage/FavoritesCard";
import React from "react";
import { Success } from "../components/ui/svg/Success";

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
  const [showCreateFavModal, setShowCreateFavModal] = useState(false);
  const [inputCount, setInputCount] = useState("");
  const [showInputCount, setShowInputCount] = React.useState(false);
  const [createFav, setCreateFav] = useState(false);

  const handleChange = (e: { target: { value: any } }) => {
    const data = e.target.value.split("");
    console.log(data);
    setInputCount(e.target.value);
  };

  // const showInput = () => {
  //   if (inputCount.length > 0) setShowInputCount(() => !showInputCount(true));
  // };
  return (
    <>
      <NavigationBarWhite />
      <div className="favorite-wrapper">
        <div className="fav-header">
          <h1>Favorites</h1>
          <a className="header-btn" onClick={() => setShowCreateFavModal(true)}>
            + Create new favorites
          </a>
        </div>
        <div className="favorites-container">
          {favorites.map((data: any, i) => (
            <>
              <FavoritesCard
                image={data.image}
                title={data.title}
                description={data.description}
              />
            </>
          ))}
        </div>
        <Modal
          show={showCreateFavModal}
          onHide={() => setShowCreateFavModal(false)}
          className="create-fav-modal"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="create-fav-body">
            <Form>
              <Row>
                <input
                  type="text"
                  placeholder="Favorites Name"
                  value={inputCount}
                  onChange={handleChange}
                ></input>
                {showInputCount && (
                  <>
                    <p>{inputCount.length} /50 characters</p>
                  </>
                )}
              </Row>
              <Row>
                <button
                  // type="submit"
                  // disabled={!inputCount}
                  onClick={() => {
                    setShowCreateFavModal(false);
                    setCreateFav(true);
                    setTimeout(() => {
                      setCreateFav(false);
                    }, 2000);
                  }}
                >
                  Create Favorites
                </button>
              </Row>
            </Form>
          </Modal.Body>
        </Modal>
        {createFav && (
          <div className="create-fav-alert">
            <Success /> Property added successfully!
          </div>
        )}
      </div>
      <FooterComponent />
    </>
  );
};

export default FavoritesPage;
