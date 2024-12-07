import React, { Component } from "react";

const NavBar = ({ totalCounters, totalValues }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        {(totalValues && <i class="bi bi-basket3-fill"></i>) ||
          (!totalValues && <i class="bi bi-basket3"></i>)}
        <a className="navbar-brand" href="#">
          Total Items
          <span className="badge bg-pill bg-secondary m-2">{totalValues}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
