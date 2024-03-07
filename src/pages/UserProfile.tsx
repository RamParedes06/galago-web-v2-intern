import React, { useState } from "react";
import ".././styles/userprofile.scss";
import { Form } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FormControl } from "react-bootstrap";

const UserProfile = () => {
  const [showLegal, setShowLegal] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showNationality, setShowNationality] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [cancelEdit, setCancelEdit] = useState({
    legal: "Edit",
    email: "Edit",
    contact: "Edit",
    nationality: "Edit",
    travel: "Edit",
    password: "Edit",
  });

  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputClassName = isFocused ? "teal" : "gray";

  return (
    <div className="content">
      <div className="profile-info-grp">
        <div className="profile-info">
          <div className="profile-pic"></div>
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
                    <a
                      className="edit-btn"
                      onClick={() => {
                        setShowLegal((prev) => !prev);
                        setCancelEdit((prev) => ({
                          ...prev,
                          legal: prev.legal === "Cancel" ? "Edit" : "Cancel",
                        }));
                      }}
                    >
                      {cancelEdit.legal}
                    </a>
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
                          className="btn"
                          onClick={() => {
                            setShowLegal((prev) => !prev);
                            setCancelEdit((prev) => ({
                              ...prev,
                              legal: prev.legal === "Edit" ? "Cancel" : "Edit",
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
                    <a
                      className="edit-btn"
                      onClick={() => {
                        setShowEmail((prev) => !prev);
                        setCancelEdit((prev) => ({
                          ...prev,
                          email: prev.email === "Cancel" ? "Edit" : "Cancel",
                        }));
                      }}
                    >
                      {cancelEdit.email}
                    </a>
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
                          type="submit"
                          className="btn"
                          onClick={() => {
                            setShowEmail((prev) => !prev);
                            setCancelEdit((prev) => ({
                              ...prev,
                              email: prev.email === "Edit" ? "Cancel" : "Edit",
                            }));
                          }}
                        >
                          Send Link
                        </button>
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
                    <a
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
                    </a>
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
                              <FormControl type="text"></FormControl>
                            </FloatingLabel>
                          </Col>
                        </Row>
                      </Form>
                      <div className="d-flex flex-row-reverse pt-4 pb-1">
                        <button
                          type="submit"
                          className="btn"
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
                      <p className="m-0 pb-2">Philippines</p>
                    </div>
                    <a className="edit-btn">Edit</a>
                  </div>
                </div>
                <div className="travel-document-grp">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="info-text">
                      <body>Travel</body>
                      <p className="m-0 pb-2">
                        1234-5678-9123 • August 14, 2025
                      </p>
                    </div>
                    <a
                      className="edit-btn"
                      onClick={() => {
                        setShowDocuments((prev) => !prev);
                        setCancelEdit((prev) => ({
                          ...prev,
                          nationality:
                            prev.nationality === "Cancel" ? "Edit" : "Cancel",
                        }));
                      }}
                    >
                      {cancelEdit.nationality}
                    </a>
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
                              style={{ width: "50%" }}
                            >
                              <FormControl type="text"></FormControl>
                            </FloatingLabel>
                          </Col>
                          <Col>
                            <FloatingLabel
                              controlId="floatingArea"
                              id="docu-expdate"
                              label="Travel Document Expiration Date"
                              style={{ width: "50%" }}
                            >
                              <FormControl type="text"></FormControl>
                            </FloatingLabel>
                          </Col>
                        </Row>
                      </Form>
                      <div className="d-flex flex-row-reverse pt-4 pb-1">
                        <button
                          type="submit"
                          className="btn"
                          onClick={() => {
                            setShowDocuments(false);
                            setCancelEdit((prev) => ({
                              ...prev,
                              nationality:
                                prev.nationality === "Edit" ? "Cancel" : "Edit",
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
                      <p className="m-0">Last updated 2 months ago</p>
                    </div>
                    <a
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
                    </a>
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
                          {/* <input
                          type="text"
                          id="confirm-pass"
                          placeholder="Confirm Password*"
                          style={{ width: "100%" }}
                        ></input> */}
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
                          className="btn"
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
  );
};

export default UserProfile;
