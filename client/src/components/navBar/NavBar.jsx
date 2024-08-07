import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  EmailOutlined,
  GridOnOutlined,
  HomeOutlined,
  NotificationsOutlined,
  PersonOutlined,
  SearchOutlined,
  Update,
} from "@mui/icons-material";

import "./navBar.scss";
import { AuthContext } from "../../context/AuthContext";
import { makeRequest } from "../../axios";
import { ModalContext } from "../../context/ModalContext";

const NavBar = () => {
  const [accountDrawer, setAccountDrawer] = useState(false);

  const { user: currentUser } = useContext(AuthContext);
  const { renderModal, toggleModal } = useContext(ModalContext);

  const toggleAccountDrawer = () => {
    setAccountDrawer(!accountDrawer);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await makeRequest.post("/auth/logout");
      localStorage.clear();
      console.log("user successfully logged out");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const renderAccountDrawer = () => {
    if (accountDrawer === false) return null;

    return (
      <div className="accountOptionsDrawer">
        <div>
          <button onClick={toggleModal}>
            <span>Account settings</span>
          </button>
          <hr />
        </div>
        <div>
          <button onClick={handleLogout}>
            <span>Logout</span>
          </button>
          <hr />
        </div>
      </div>
    );
  };

  return (
    <>
      {renderModal && <Update />}
      <div className="navBar">
        <div className="navBarLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>Chora's Den</span>
          </Link>
          <HomeOutlined />
          {/*  <LightModeOutlined /> */}
          <GridOnOutlined />
          <div className="searchInput">
            <SearchOutlined />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="navBarRight">
          <div className="navBarItem">
            <button onClick={toggleAccountDrawer}>
              <PersonOutlined style={{ color: "white" }} />
            </button>
          </div>
          {renderAccountDrawer()}
          <EmailOutlined />
          <NotificationsOutlined />
          <Link
            to={`profile/${currentUser.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="user">
              <img src={currentUser.profilePic} alt="" />
              <span>{currentUser.name}</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
