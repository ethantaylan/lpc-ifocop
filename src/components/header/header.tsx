import { BsHandbag, BsHeart, BsHeartFill, BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { menus } from "../../App";
import { SubMenu } from "./sub-menu/sub-menu";
import { Input } from "@mui/material";
import React from "react";
import { useGlobalContext, useGlobalDispatch } from "../../context/context";

export const Header: React.FC = () => {
  const [searchBar, setSearchBar] = React.useState<boolean>(false);
  const [like, setLike] = React.useState<boolean>(false);

  const { showCart } = useGlobalContext();

  const dispatch = useGlobalDispatch();

  const handleOpenCart = () => {
    dispatch({
      type: showCart ? true : false,
      payload: null,
    });
  };

  return (
    <div className="d-flex py-5 w-100 flex-column text-dark">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <span className="cursor-pointer">
          LE PETIT <span className="bold">COMMERCE</span>
        </span>
        <ul className="navbar-nav d-flex flex-row mr-auto">
          <SubMenu
            firstLabel="+331 23 45 67 89"
            secondLabel="À propos"
            thirdLabel="Aide"
          />
        </ul>
      </div>
      <div className="mt-5 d-flex w-100 justify-content-between">
        <ul className="navbar-nav d-flex flex-row mr-auto">
          {menus.map((menu: any, index: number) => (
            <li
              style={{ whiteSpace: "nowrap" }}
              key={index}
              className={`nav-item me-3 ${menu.haveDropDown && "dropdown"}`}
            >
              <NavLink
                style={{ opacity: 0.75 }}
                className={`nav-link ${
                  menu.haveDropDown && " dropdown-toggle"
                }`}
                to={menu.url ? menu.url : "#"}
                id={menu.haveDropDown && "navbarDropdown"}
                data-bs-toggle={menu.haveDropDown && "dropdown"}
                role={menu.haveDropDown && "button"}
              >
                {menu.title}
              </NavLink>
              {menu.haveDropDown && (
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href={menu.dropdownUrl}>
                    {menu.dropdownUrl}
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="d-flex align-items-center justify-content-center">
          <Input
            className="me-3"
            style={{ width: searchBar ? 200 : 0, transition: "0.5s" }}
          />
          <SubMenu
            firstLabel={
              <BsSearch
                onClick={() => {
                  setSearchBar(!searchBar);
                }}
              />
            }
            secondLabel={
              like ? (
                <BsHeartFill onClick={() => setLike(!like)} />
              ) : (
                <BsHeart onClick={() => setLike(!like)} />
              )
            }
            thirdLabel={<BsHandbag onClick={() => handleOpenCart()} />}
          />
        </div>
      </div>
    </div>
  );
};
