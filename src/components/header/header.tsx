import { BsHandbag, BsHeart, BsHeartFill, BsSearch } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { menus } from "../../App";
import { SubMenu } from "./sub-menu/sub-menu";
import { Input } from "@mui/material";
import React from "react";
import { useMatches } from "../../hooks/use-matches";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Breadcrumb } from "../breadcrumb/breadcrumb";

export const Header: React.FC = () => {
  const matches = useMatches();

  const [searchBar, setSearchBar] = React.useState<boolean>(false);
  const [menu, showMenu] = React.useState<boolean>(false);
  const [index, setIndex] = React.useState<number>(0);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!matches) showMenu(true);
    else {
      showMenu(false);
    }
  }, [matches]);

  return (
    <div className="d-flex pt-4 pb-5 w-100 m flex-column text-dark">
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
            <li>
              <SubMenu
                firstLabel="+331 23 45 67 89"
                secondLabel="À propos"
                thirdLabel="Aide"
              />
            </li>
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
        className={`${matches ? "mt-2" : "mt-5"} d-flex w-100 justify-content-${
          matches ? "between" : "between"
        }`}
      >
        <ul
          className={`navbar-nav d-${
            menu ? "flex" : "none"
          } justify-content-between ${
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
            matches ? "end" : "end"
          } justify-content-start flex-column`}
        >
          <SubMenu
            className={`d-flex flex-${matches ? "column" : "row"}`}
            firstLabel={
              <div className="d-flex flex-column">
                <div
                  onClick={() => {
                    setSearchBar(!searchBar);
                  }}
                  className="d-fle align-items-center"
                >
                  <BsSearch />
                  <span className="ms-2">Rechercher</span>
                </div>
                {searchBar && (
                  <Input
                    className="m-0"
                    style={{ width: searchBar ? 120 : 0, transition: "0.5s" }}
                  />
                )}
              </div>
            }
            secondLabel={
              <>
                <BsHeart onClick={() => navigate("/avis")} />
                <span className="ms-2">Laissez un avis</span>
              </>
            }
            thirdLabel={
              <>
                <div className="d-flex">
                  <span
                    className={index === 0 ? "bold" : ""}
                    onClick={() => setIndex(0)}
                  >
                    FR
                  </span>
                  <span className="mx-2 d-flex">|</span>
                  <span
                    className={index === 1 ? "bold" : ""}
                    onClick={() => setIndex(1)}
                  >
                    ENG
                  </span>
                </div>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};
