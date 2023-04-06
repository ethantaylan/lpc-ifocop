import React from "react";
import { menus } from "../../App";
import PaymentOptionsImg from "../../assets/payments-options.png";
import { useMatches } from "../../hooks/use-matches";
import { NavLink } from "react-router-dom";

export const PaymentSection = () => {
  const matches = useMatches();

  return (
    <React.Fragment>
      <hr className="d-flex my-5" />
      <div
        className={`d-flex w-100 justify-content-between ${
          matches ? "flex-column" : ""
        }`}
      >
        <ul className="navbar-nav d-flex flex-column mr-auto">
          <span className="bold mb-4 d-flex">Vue d'ensemble</span>

          {menus.map((menu: any, index: number) => (
            <li
              style={{ whiteSpace: "nowrap" }}
              key={index}
              className={`nav-item me-3 ${menu.haveDropDown && "dropdown"}`}
            >
              <NavLink
                onClick={() => window.scrollTo(0, 0)}
                className={`nav-link semi-bold ${
                  menu.haveDropDown && " dropdown-toggle"
                }`}
                to={menu.url ? menu.url : "#"}
                id={menu.haveDropDown && "navbarDropdown"}
                data-bs-toggle={menu.haveDropDown && "dropdown"}
                role={menu.haveDropDown && "button"}
              >
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={`d-flex mt-5 justify-content-center align-items-end`}>
          <img
            width={matches ? 320 : 550}
            style={{ objectFit: "contain" }}
            src={PaymentOptionsImg}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
