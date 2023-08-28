import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  DarkModeOutlined,
  EmailOutlined,
  GridOnOutlined,
  HomeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  PersonOutlined,
  SearchOutlined,
} from "@mui/icons-material";

import "./navBar.scss";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const { user: currUser } = useContext(AuthContext);

  return (
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
        <PersonOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="user">
          <img src={currUser.profilePic} alt="" />
          <span>{currUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
