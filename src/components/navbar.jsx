import React from "react";

const NavBar = ({ totalCounters, totalValues }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        {totalValues ? (
          <>
            <i className="bi bi-basket3-fill"></i>
            <h5>
				Total Value
              <span className="badge bg-success m-2 ">{totalValues} $</span>
            </h5>
          </>
        ) : (
          <i className="bi bi-basket3"></i>
        )}
        <a className="navbar-brand" href="#">
          Total Items
          <span className="badge bg-pill bg-secondary m-2">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
