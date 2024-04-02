import React, { useState } from "react";
import "../../styles/favoritespage.scss";
import { Link } from "react-router-dom";
import { PopDots } from "../ui/svg/PopDots";
import { Form, Modal, ModalBody, Row, Alert } from "react-bootstrap";
import { ConfusedGalaGo } from "../ui/svg/ConfusedGalaGo";
import { Success } from "../ui/svg/Success";

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
  const [inputCount, setInputCount] = React.useState("");
  const [showFavDropdown, setShowFavDropdown] = useState(false);
  const [showRenameFavModal, setShowRenameFavModal] = useState(false);
  const [showDeleteFavModal, setShowDeleteFavModal] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = React.useState(false);
  const [showRenameAlert, setShowRenameAlert] = React.useState(false);

  const toggleFavDropdown = () => {
    setShowFavDropdown((prev) => !prev);
  };

  const handleChange = (e: { target: { value: any } }) => {
    const data = e.target.value.split("");
    console.log(data);
    setInputCount(e.target.value);
  };
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   if (value.length <= 50) {
  //     setInputCount(event.target.value);
  //   }
  // };
  return (
    <div className="favorites-card">
      <Link to="/favorites" style={{ textDecoration: "none" }}>
        <div className="img-cont">
          <img {...props} src={image} alt="" />
        </div>
      </Link>

      <div
        className="favorite-info"
        onMouseLeave={() => setShowFavDropdown(false)}
      >
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
                  <input
                    type="text"
                    placeholder="Favorites Name"
                    value={inputCount}
                    onChange={(e) => handleChange(e)}
                  ></input>
                  <p className="footnote-medium">
                    {inputCount.length} /50 characters
                  </p>
                </Row>
                <Row>
                  <button
                    type="submit"
                    disabled={!inputCount}
                    onClick={() => {
                      setShowRenameFavModal(false);
                      setShowRenameAlert(true);
                      setTimeout(() => {
                        setShowRenameAlert(false);
                      }, 2000);
                    }}
                  >
                    Save
                  </button>
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
                <button
                  onClick={() => {
                    setShowDeleteFavModal(false);
                    setShowDeleteAlert(true);
                    setTimeout(() => setShowDeleteAlert(false), 2000);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </ModalBody>
        </Modal>
        {showRenameAlert && (
          <div className="create-fav-alert">
            <Success /> Property rename successfully!
          </div>
        )}
        {showDeleteAlert && (
          <div className="create-fav-alert">
            <Success /> Property deleted successfully!{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesCard;
