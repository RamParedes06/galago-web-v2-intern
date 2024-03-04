import React, { useState } from "react";
import ".././styles/userprofile.scss";
import { Form } from "react-router-dom";
import { FloatingLabel, FormControl, FormLabel, Row } from "react-bootstrap";

const UserProfile = () => {
  const [showLegal, setShowLegal] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="content">
      <div className="profile-info-grp">
        <div className="profile-info">
          <div className="profile-pic">image</div>
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
                        setShowLegal(true);
                      }}
                    >
                      Edit
                    </a>
                  </div>
                  {showLegal && (
                    <>
                      <Form>
                        <div className="d-flex gap-2">
                          <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            placeholder="First Name"
                          ></input>
                          <input
                            type="text"
                            id="middle-name"
                            name="middle-name"
                            placeholder="Middle Name"
                          ></input>
                          <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            placeholder="Last Name"
                          ></input>
                        </div>
                      </Form>{" "}
                      <div className="d-flex flex-row-reverse pt-4 pb-1">
                        <button
                          type="submit"
                          className="btn"
                          onClick={() => {
                            setShowLegal(false);
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
                        setShowEmail(true);
                      }}
                    >
                      Edit
                    </a>
                  </div>
                  {showEmail && (
                    <>
                      <Form>
                        <div className="d-flex gap-2">
                          <input
                            type="text"
                            id="email-add"
                            name="email-add"
                            placeholder="Email Address"
                            style={{ width: "100%" }}
                          ></input>
                        </div>
                      </Form>
                      <div className="d-flex flex-row-reverse pt-4 pb-1">
                        <button
                          type="submit"
                          className="btn"
                          onClick={() => {
                            setShowEmail(false);
                          }}
                        >
                          Save
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
                        setShowContact(true);
                      }}
                    >
                      Edit
                    </a>
                  </div>
                  {showContact && (
                    <>
                      <Form>
                        <div className="d-flex gap-2">
                          <input
                            type="text"
                            id="contact-num"
                            name="contact-num"
                            placeholder="Contact Number"
                            style={{ width: "100%" }}
                          ></input>
                        </div>
                      </Form>
                      <div className="d-flex flex-row-reverse pt-4 pb-1">
                        <button
                          type="submit"
                          className="btn"
                          onClick={() => {
                            setShowContact(false);
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
                        setShowDocuments(true);
                      }}
                    >
                      Edit
                    </a>
                  </div>
                  {showDocuments && (
                    <>
                      <Form>
                        <div className="d-flex gap-2">
                          <input
                            type="text"
                            id="travel-docu-num"
                            name="travel-docu-num"
                            placeholder="Travel Document Number"
                            style={{ width: "50%" }}
                          ></input>
                          <input
                            type="text"
                            id="docu-expdate"
                            name="docu-expdate"
                            placeholder="Travel Document Expiration Date"
                            style={{ width: "50%" }}
                          ></input>
                        </div>
                      </Form>
                      <div className="d-flex flex-row-reverse pt-4 pb-1">
                        <button
                          type="submit"
                          className="btn"
                          onClick={() => {
                            setShowDocuments(false);
                          }}
                        >
                          Save
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <div className="expiration-date-grp">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="info-text">
                      <body>Password</body>
                      <p className="m-0">Last updated 2 months ago</p>
                    </div>
                    <a
                      className="edit-btn"
                      onClick={() => {
                        setShowPassword(true);
                      }}
                    >
                      Edit
                    </a>
                  </div>
                  {showPassword && (
                    <>
                      <Form>
                        <div className="d-flex flex-column gap-2">
                          <input
                            type="text"
                            id="old-pass"
                            name="old-pass"
                            placeholder="Old Password*"
                            style={{ width: "100%" }}
                          ></input>
                          <input
                            type="text"
                            id="new-pass"
                            name="new-pass"
                            placeholder="New Password*"
                            style={{ width: "100%" }}
                          ></input>
                          <input
                            type="text"
                            id="confirm-pass"
                            name="confirm-pass"
                            placeholder="Confirm Password*"
                            style={{ width: "100%" }}
                          ></input>
                        </div>
                      </Form>
                      <div className="d-flex flex-row-reverse pt-4 pb-1">
                        <button
                          type="submit"
                          className="btn"
                          onClick={() => {
                            setShowPassword(false);
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
