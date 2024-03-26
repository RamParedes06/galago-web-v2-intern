import React, { useState } from "react";
import "../../styles/favoritespage.scss";
import { Link } from "react-router-dom";
import { PopDots } from "../ui/svg/PopDots";
import { Form, Modal, ModalBody, Row } from "react-bootstrap";
import { ConfusedGalaGo } from "../ui/svg/ConfusedGalaGo";

type favoritecardprops = {
  image?: string;
  title: string;
  description: string;
};

const FavoritesCard = ({
  image,
  title,
  description,
  ...props
}: favoritecardprops & {}) => {
  const [showFavDropdown, setShowFavDropdown] = useState(false);
  const [showRenameFavModal, setShowRenameFavModal] = useState(false);
  const [showDeleteFavModal, setShowDeleteFavModal] = useState(false);
  const toggleFavDropdown = () => {
    setShowFavDropdown((prev) => !prev);
  };
  return (
    <div className="favorites-card">
      <Link to="/favorites" style={{ textDecoration: "none" }}>
        <div className="img-cont">
          <img {...props} src={image} alt="" />
        </div>
      </Link>

      <div className="favorite-info">
        <Link to="/favorites" style={{ textDecoration: "none" }}>
          <div>
            <p className="title" {...props}>
              {title}
            </p>
            <p className="desc" {...props}>
              {description}
            </p>
          </div>
        </Link>
        <div onClick={toggleFavDropdown} style={{ cursor: "pointer" }}>
          <PopDots />
        </div>
        {showFavDropdown && (
          <div className="fav-dropdown d-flex flex-column">
            <div id="a" onClick={() => setShowRenameFavModal(true)}>
              Rename Favorites
            </div>
            <div id="b" onClick={() => setShowDeleteFavModal(true)}>
              Delete Favorites
            </div>
          </div>
        )}
        <Modal
          show={showRenameFavModal}
          onHide={() => setShowRenameFavModal(false)}
          className="rename-fav-modal"
          centered
        >
          <Modal.Header closeButton> Rename Favorites</Modal.Header>
          <ModalBody>
            <div className="rename-modal-body">
              <Form>
                <Row>
                  <input type="text" placeholder="Favorites Name"></input>
                </Row>
                <Row>
                  <button>Save</button>
                </Row>
              </Form>
            </div>
          </ModalBody>
        </Modal>
        <Modal
          show={showDeleteFavModal}
          onHide={() => setShowDeleteFavModal(false)}
          className="delete-fav-modal"
          centered
        >
          <ModalBody>
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex flex-column align-items-center gap-2">
                <ConfusedGalaGo _width={128} _height={128} />
                <p className="delete-modal-text">Delete this Property?</p>
                <div className="d-flex flex-column align-items-center footnote-medium text-secondary pb-4">
                  <p>This property will be removed permanently</p>
                  <p>from your favorites</p>
                </div>
              </div>
              <div className="delete-modal-btns d-flex flex-column align-items-center">
                <button type="submit">Delete</button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default FavoritesCard;
