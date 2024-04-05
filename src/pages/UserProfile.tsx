import ".././styles/root.scss";
import ".././styles/userprofile.scss";
import FooterComponent from "../components/ui/FooterComponent";
import NavigationBarWhite from "../components/ui/NavigationBarWhite";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-router-dom";
import { FormControl, FormSelect } from "react-bootstrap";
import { EmailConfirmation } from "../components/ui/svg/EmailConfirmation";
import { UploadProfileImg } from "../components/ui/svg/UploadProfileImg";
import { DropImage } from "../components/ui/svg/DropImage";

const UserProfile = () => {
  const [showLegal, setShowLegal] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showNationality, setShowNationality] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [modal_, setShowModal] = useState(false);
  const [seconds, setSeconds] = useState(13);
  const [showTimer, setShowTimer] = useState(false);
  const [imgModal, setShowImgModal] = useState(false);
  const [cancelEdit, setCancelEdit] = useState({
    legal: "Edit",
    email: "Edit",
    contact: "Edit",
    nationality: "Edit",
    travel: "Edit",
    password: "Edit",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setShowTimer(false);
        setSeconds(12);
      }

      if (seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [showTimer, seconds]);

  const legalRef = useRef<any>();
  // const emailRef = useRef();
  // const contactRef = useRef();
  // const nationalityRef = useRef();
  // const travelRef = useRef();
  // const passwordRef = useRef();
  const grayOutEditButtonSiblings = () => {};

  return (
    <>
      <NavigationBarWhite />
      <div className="content">
        <div className="profile-info-grp">
          <div className="profile-info">
            <div className="profile-pic">
              <button
                className="upload-profileimg-btn position-relative"
                onClick={() => {
                  setShowImgModal(true);
                }}
              >
                <UploadProfileImg _width={24} _height={24} />
              </button>
              <Modal
                show={imgModal}
                onHide={() => setShowImgModal(false)}
                dialogClassName="modal- 500w"
                className="img-modal"
                centered
              >
                <Modal.Header closeButton>Change Profile Picture</Modal.Header>
                <Modal.Body>
                  <div className="profile-upload-modal ">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <DropImage _height={64} _width={64} />

                      <div className="profile-dropzone d-flex flex-column align-items-center gap-1 padding-4">
                        <p className="callout-medium">2 MB max</p>
                        <p className="callout-medium">
                          JPEG, BMP or PNG files only
                        </p>
                        <p className="footnote-medium text-secondary">
                          Click to upload or drag and drop file here!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="upload-profileimg"
                      style={{ width: "100%" }}
                    >
                      Upload profile picture
                    </button>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
            <div className="info-grp d-flex flex-column gap-1">
              <div className="user-name">Christian Mae Marichan</div>
              <div className="body d-flex">christianMarichan28@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="info-grp d-flex justify-content-center">
          <div className="general-info">
            <div className="primary-traveler">
              <div className="primary-info">
                <div className="header d-flex flex-column">
                  <h1 className="title m-0">Account Info</h1>
                  <p className="m-0">
                    GalaGO! uses this information to autofill forms, speeding up
                    your booking process!
                  </p>
                </div>
                <div className="info">
                  <div className="legal-name">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="info-text">
                        <body>Legal Name</body>
                        <p className="m-0 pb-2">Christian Mae Marichan</p>
                      </div>
                      <p
                        className="edit-btn"
                        ref={legalRef}
                        data-text={cancelEdit.legal}
                        onClick={() => {
                          setShowLegal((prev) => !prev);
                          setCancelEdit((prev) => ({
                            ...prev,
                            legal: prev.legal === "Cancel" ? "Edit" : "Cancel",
                          }));
                          grayOutEditButtonSiblings();
                        }}
                      >
                        {cancelEdit.legal}
                      </p>
                    </div>
                    {showLegal && (
                      <>
                        <Form>
                          <Row>
                            <Col>
                              <FloatingLabel
                                controlId="floatingArea"
                                id="first-name"
                                label="First Name"
                                style={{ width: "100%" }}
                              >
                                <FormControl type="text"></FormControl>
                              </FloatingLabel>
                            </Col>
                            <Col>
                              <FloatingLabel
                                controlId="floatingArea"
                                id="middle-name"
                                label="Middle Name"
                              >
                                <FormControl type="text"></FormControl>
                              </FloatingLabel>
                            </Col>
                            <Col>
                              <FloatingLabel
                                controlId="floatingArea"
                                id="last-name"
                                label="Last Name"
                              >
                                <FormControl type="text"></FormControl>
                              </FloatingLabel>
                            </Col>
                          </Row>
                        </Form>{" "}
                        <div className="d-flex flex-row-reverse pt-4 pb-1">
                          <button
                            type="submit"
                            className="submit-btn"
                            onClick={() => {
                              setShowLegal((prev) => !prev);
                              setCancelEdit((prev) => ({
                                ...prev,
                                legal:
                                  prev.legal === "Edit" ? "Cancel" : "Edit",
                              }));
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="email-address">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="info-text">
                        <body>Email Address</body>
                        <p className="m-0 pb-2">christiachan@gmail.com</p>
                      </div>
                      <p
                        className="edit-btn"
                        data-text={
                          cancelEdit.email === "Cancel"
                            ? "active"
                            : "not-selected"
                        }
                        onClick={() => {
                          setShowEmail((prev) => !prev);
                          setCancelEdit((prev) => ({
                            ...prev,
                            email: prev.email === "Cancel" ? "Edit" : "Cancel",
                          }));
                        }}
                      >
                        {cancelEdit.email}
                      </p>
                    </div>
                    {showEmail && (
                      <>
                        <Form>
                          <Row>
                            <Col>
                              <FloatingLabel
                                controlId="floatingArea"
                                id="email-add"
                                label="Email Address"
                              >
                                <FormControl type="email"></FormControl>
                              </FloatingLabel>
                            </Col>
                          </Row>
                        </Form>
                        <div className="d-flex flex-row-reverse pt-4 pb-1">
                          <button
                            // type="submit"
                            className="submit-btn"
                            onClick={() => {
                              setShowModal(true);
                            }}
                          >
                            Send Link
                          </button>
                          <Modal
                            show={modal_}
                            onHide={() => setShowModal(false)}
                            dialogClassName="modal-500w"
                            className="confirm-email-modal"
                            centered
                          >
                            <Modal.Body>
                              <div className="d-flex flex-column align-items-center gap-4">
                                <EmailConfirmation
                                  _width={160}
                                  _height={153.22}
                                />
                                <h1>Confirm your email</h1>
                                <div className="d-flex flex-column align-items-center gap-1">
                                  <p>
                                    You've got mail at [email]! Check your inbox
                                    (or spam)
                                  </p>
                                  <p>
                                    And confirm your email address to continue
                                    your signup.
                                  </p>
                                </div>
                                <div className="countdown-text ">
                                  <div className="d-flex flex-row-reverse">
                                    {showTimer && (
                                      <p>
                                        Resend in{" "}
                                        <span>
                                          {" "}
                                          {seconds < 12
                                            ? `${seconds}`
                                            : seconds}
                                          {"s"}
                                        </span>
                                      </p>
                                    )}
                                  </div>
                                  <button
                                    className="resend-Email"
                                    onClick={() => {
                                      setShowTimer(true);
                                    }}
                                  >
                                    Resend Email
                                  </button>
                                </div>
                              </div>
                            </Modal.Body>
                          </Modal>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="contact-number-grp">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="info-text">
                        <body>Contact Number</body>
                        <p className="m-0 pb-2">+63 917 123 4567</p>
                      </div>
                      <p
                        className="edit-btn"
                        onClick={() => {
                          setShowContact((prev) => !prev);
                          setCancelEdit((prev) => ({
                            ...prev,
                            contact:
                              prev.contact === "Cancel" ? "Edit" : "Cancel",
                          }));
                        }}
                      >
                        {cancelEdit.contact}
                      </p>
                    </div>
                    {showContact && (
                      <>
                        <Form>
                          <Row>
                            <Col>
                              <FloatingLabel
                                controlId="floatingArea"
                                id="contact-num"
                                label="Contact Number"
                                style={{ width: "100%" }}
                              >
                                <FormControl
                                  type="text"
                                  className="custom-input"
                                ></FormControl>
                              </FloatingLabel>
                            </Col>
                          </Row>
                        </Form>
                        <div className="d-flex flex-row-reverse pt-4 pb-1">
                          <button
                            type="submit"
                            className="submit-btn"
                            onClick={() => {
                              setShowContact(false);
                              setCancelEdit((prev) => ({
                                ...prev,
                                contact:
                                  prev.contact === "Cancel" ? "Edit" : "Cancel",
                              }));
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="nationality-grp">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="info-text">
                        <body>Nationality</body>
                        <p className="m-0 mb-3">Philippines</p>
                      </div>
                      <p
                        className="edit-btn"
                        onClick={() => {
                          setShowNationality((prev) => !prev);
                          setCancelEdit((prev) => ({
                            ...prev,
                            nationality:
                              prev.nationality === "Cancel" ? "Edit" : "Cancel",
                          }));
                        }}
                      >
                        {cancelEdit.nationality}
                      </p>
                    </div>
                    {showNationality && (
                      <>
                        <Form>
                          <Row>
                            <Col>
                              <FormSelect
                                className="nationality-select"
                                size="lg"
                              >
                                <option>Philippines</option>
                                {/* <option value="1">Philippines</option> */}
                                <option value="2">South Korea</option>
                                <option value="3">United Kingdom</option>
                              </FormSelect>
                            </Col>
                          </Row>
                        </Form>
                        <div className="d-flex flex-row-reverse pt-4 pb-1">
                          <button
                            type="submit"
                            className="submit-btn"
                            onClick={() => {
                              setShowNationality(false);
                              setCancelEdit((prev) => ({
                                ...prev,
                                nationality:
                                  prev.nationality === "Edit"
                                    ? "Cancel"
                                    : "Edit",
                              }));
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="travel-document-grp">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="info-text">
                        <body>Travel</body>
                        <p className="m-0 mb-3">
                          1234-5678-9123 • August 14, 2025
                        </p>
                      </div>
                      <p
                        className="edit-btn"
                        onClick={() => {
                          setShowDocuments((prev) => !prev);
                          setCancelEdit((prev) => ({
                            ...prev,
                            travel:
                              prev.travel === "Cancel" ? "Edit" : "Cancel",
                          }));
                        }}
                      >
                        {cancelEdit.travel}
                      </p>
                    </div>
                    {showDocuments && (
                      <>
                        <Form>
                          <Row>
                            <Col>
                              <FloatingLabel
                                controlId="floatingArea"
                                id="travel-docu-num"
                                label="Travel Document Number"
                              >
                                <FormControl type="text"></FormControl>
                              </FloatingLabel>
                            </Col>
                            <Col>
                              <FloatingLabel
                                controlId="floatingArea"
                                id="docu-expdate"
                                label="Travel Document Expiration Date"
                              >
                                <FormControl type="text"></FormControl>
                              </FloatingLabel>
                            </Col>
                          </Row>
                        </Form>
                        <div className="d-flex flex-row-reverse pt-4 pb-1">
                          <button
                            type="submit"
                            className="submit-btn"
                            onClick={() => {
                              setShowDocuments(false);
                              setCancelEdit((prev) => ({
                                ...prev,
                                travel:
                                  prev.travel === "Edit" ? "Cancel" : "Edit",
                              }));
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="password-grp">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="info-text">
                        <body>Password</body>
                        <p className="m-0 mb-3">Last updated 2 months ago</p>
                      </div>
                      <p
                        className="edit-btn"
                        onClick={() => {
                          setShowPassword((prev) => !prev);
                          setCancelEdit((prev) => ({
                            ...prev,
                            password:
                              prev.password === "Cancel" ? "Edit" : "Cancel",
                          }));
                        }}
                      >
                        {cancelEdit.password}
                      </p>
                    </div>
                    {showPassword && (
                      <>
                        <Form className="d-flex flex-column gap-3">
                          <Col>
                            <FloatingLabel
                              controlId="floatingArea"
                              id="old-pass"
                              label="Old Password *"
                            >
                              <FormControl type="password"></FormControl>
                            </FloatingLabel>
                          </Col>
                          <Col>
                            <FloatingLabel
                              controlId="floatingArea"
                              id="new-pass"
                              label="New Password *"
                            >
                              <FormControl type="password"></FormControl>
                            </FloatingLabel>
                          </Col>
                          <Col>
                            <FloatingLabel
                              controlId="floatingArea"
                              id="confirm-pass"
                              label="Confirm Password *"
                              // onFocus={handleOnFocus}
                              // onBlur={handleBlur}
                              // className={inputClassName}
                            >
                              <FormControl type="password"></FormControl>
                            </FloatingLabel>
                          </Col>
                        </Form>
                        <div className="d-flex flex-row-reverse pt-4 pb-1">
                          <button
                            type="submit"
                            className="submit-btn"
                            onClick={() => {
                              setShowPassword(false);
                              setCancelEdit((prev) => ({
                                ...prev,
                                password:
                                  prev.password === "Edit" ? "Cancel" : "Edit",
                              }));
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default UserProfile;
