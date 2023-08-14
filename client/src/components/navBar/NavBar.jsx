import React from "react";
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

import "./navBar.scss"

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Chora's Den</span>
        </Link>
        <HomeOutlined />
        <LightModeOutlined />
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
          <img src="/assets/unknown.jpg" alt="" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
