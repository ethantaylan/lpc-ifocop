import React from "react";
import { menus } from "../../App";
import PaymentOptionsImg from "../../assets/payments-options.png";

export const PaymentSection = () => {
  return (
    <>
      <hr className="d-flex my-5" />
      <div className="d-flex w-100 justify-content-between">
        <ul className="navbar-nav d-flex flex-column mr-auto">
          <span className="bold mb-4 d-flex">Vue d'ensemble</span>

          {menus.map((menu: any, index: number) => (
            <li
              style={{ whiteSpace: "nowrap" }}
              key={index}
              className={`nav-item me-3 ${menu.haveDropDown && "dropdown"}`}
            >
              <a
                className={`nav-link semi-bold ${
                  menu.haveDropDown && " dropdown-toggle"
                }`}
                href={menu.url ? menu.url : "#"}
                id={menu.haveDropDown && "navbarDropdown"}
                data-bs-toggle={menu.haveDropDown && "dropdown"}
                role={menu.haveDropDown && "button"}
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="d-flex align-items-end">
          <img width={550} style={{objectFit: 'contain'}} src={PaymentOptionsImg} />
        </div>
      </div>
    </>
  );
};
