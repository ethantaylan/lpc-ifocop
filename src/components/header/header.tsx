import { BsHandbag, BsHeart, BsSearch } from "react-icons/bs";
import { SubMenu } from "./sub-menu/sub-menu";

interface Menus {
  title: string;
  url: string;
  haveDropDown?: boolean;
}

export const menus: Menus[] = [
  { title: "Accueil", url: "/" },
  { title: "Nos Produits", url: "/products" },
  { title: "Points de vente", url: "/shops" },
  { title: "Réservation", url: "/booking" },
  { title: "Avis", url: "/feedbacks" },
  { title: "La boutique", url: "/shop" },
  { title: "Actualités", url: "/news" },
  { title: "Options", url: "/options" },
];

export const Header: React.FC = () => (
  <div className="d-flex py-5 w-100 flex-column text-dark">
    <div className="d-flex flex-row justify-content-between align-items-center">
      <span className="cursor-pointer">
        LE PETIT <span className="bold">COMMERCE</span>
      </span>
      <ul className="navbar-nav d-flex flex-row mr-auto">
        <SubMenu
          firstLabel="+331 42 25 64 78"
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
            {menu.haveDropDown && (
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
      <SubMenu
        firstLabel={<BsSearch />}
        secondLabel={<BsHeart />}
        thirdLabel={<BsHandbag />}
      />
    </div>
  </div>
);
