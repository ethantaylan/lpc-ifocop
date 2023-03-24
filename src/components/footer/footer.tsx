import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { useGlobalContext } from "../../context/context";
import { SubMenu } from "../header/sub-menu/sub-menu";
import { PaymentSection } from "../payment-section/payment-section";
import {
  FooterInformations,
  FooterInformationsLinksProps,
  FooterInformationsProps,
} from "./footer-informations";

export const Footer = () => {
  const { primary } = useGlobalContext();

  return (
    <React.Fragment>
      <div
        className="mt-5 mt d-flex justify-content-between secondary"
        style={{ backgroundColor: primary, padding: 70 }}
      >
        <div className="d-flex w-100 flex-column">
          <span className="mb-4 cursor-pointer">
            LE PETIT <span className="bold">COMMERCE</span>
          </span>
          <small className="mb-2 hover-underline cursor-pointer">
            About us
          </small>
          <small className="mb-4 hover-underline cursor-pointer">Contact</small>
          <SubMenu
            firstLabel={
              <span
                className="p-2 d-flex"
                style={{
                  backgroundColor: "rgb(20, 93, 109)",
                  borderRadius: 100,
                }}
              >
                <AiFillLinkedin size={20} />
              </span>
            }
            secondLabel={
              <span
                className="p-2 d-flex"
                style={{
                  backgroundColor: "rgb(20, 93, 109)",
                  borderRadius: 100,
                }}
              >
                <AiFillFacebook size={20} />
              </span>
            }
            thirdLabel={
              <span
                className="p-2 d-flex"
                style={{
                  backgroundColor: "rgb(20, 93, 109)",
                  borderRadius: 100,
                }}
              >
                <AiFillInstagram size={20} />
              </span>
            }
          />
          <small className="mt-4">Made by @ethantaylan with 💚</small>
        </div>
        {FooterInformations.map((t: FooterInformationsProps, index: number) => (
          <ul key={index} className="nav w-25 d-flex flex-column">
            <span className="bold">{t.title}</span>
            <small>
              {t.links.map(
                (link: FooterInformationsLinksProps, index: number) => (
                  <li
                    key={index}
                    className={`my-2 ${
                      link.isImportant && "bold"
                    } cursor-pointer hover-underline`}
                  >
                    {link.title}
                  </li>
                )
              )}
            </small>
          </ul>
        ))}
      </div>
    </React.Fragment>
  );
};
