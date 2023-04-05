import { BsHandbag, BsHeart, BsHeartFill, BsSearch } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { menus } from "../../App";
import { SubMenu } from "./sub-menu/sub-menu";
import { Input } from "@mui/material";
import React from "react";
import { useGlobalContext, useGlobalDispatch } from "../../context/context";
import { useMatches } from "../../hooks/use-matches";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Header: React.FC = () => {
  const matches = useMatches();

  const [searchBar, setSearchBar] = React.useState<boolean>(false);
  const [like, setLike] = React.useState<boolean>(false);
  const [menu, showMenu] = React.useState<boolean>(false);

  const { showCart } = useGlobalContext();

  const dispatch = useGlobalDispatch();
  const navigate = useNavigate();

  const handleOpenCart = () => {
    dispatch({
      type: showCart ? true : false,
      payload: null,
    });
  };

  React.useEffect(() => {
    if (!matches) showMenu(true);
    else {
      showMenu(false);
    }
  }, [matches]);

  return (
    <div className="d-flex py-5 w-100 m flex-column text-dark">
      <div className={`d-flex justify-content-between align-items-center`}>
        <span
          onClick={() => navigate("/")}
          style={{ whiteSpace: "nowrap" }}
          className="cursor-pointer"
        >
          LE PETIT <span className="bold">COMMERCE</span>
        </span>

        {!matches && (
          <ul className="navbar-nav d-flex flex-row mr-auto">
            <SubMenu
              firstLabel="+331 23 45 67 89"
              secondLabel="À propos"
              thirdLabel="Aide"
            />
          </ul>
        )}

        {matches && (
          <>
            {menu ? (
              <AiOutlineClose
                onClick={() => showMenu(!menu)}
                className="cursor-pointer"
                size={20}
              />
            ) : (
              <AiOutlineMenu
                onClick={() => showMenu(!menu)}
                className="cursor-pointer"
                size={20}
              />
            )}
          </>
        )}
      </div>
      <div
        className={`${
          matches ? "mt-2" : "mt-5"
        } d-flex w-100 justify-content-${matches ? "between" : "between"}`}
      >
        <ul
          className={`navbar-nav d-${menu ? "flex" : "none"}  ${
            !matches ? "flex-row" : "flex-column"
          }  mr-auto`}
        >
          {menus.map((menu: any, index: number) => (
            <li
              onClick={matches ? () => showMenu(false) : undefined}
              style={{ whiteSpace: "nowrap" }}
              key={index}
              className={`nav-item me-3  d-${menu ? "flex" : "none"} ${
                menu.haveDropDown && "dropdown"
              }`}
            >
              <NavLink
                style={{ opacity: 0.7 }}
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
        <div
          className={`d-flex align-items-${
            matches ? "start" : "center"
          } justify-content-center`}
        >
          <Input
            className="m-0"
            style={{ width: searchBar ? 120 : 0, transition: "0.5s" }}
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
