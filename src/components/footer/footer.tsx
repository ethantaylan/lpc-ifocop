import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { useGlobalContext } from "../../context/context";
import { SubMenu } from "../header/sub-menu/sub-menu";
import {
  FooterInformations,
  FooterInformationsLinksProps,
  FooterInformationsProps,
} from "./footer-informations";

export const Footer = () => {
  const { primary } = useGlobalContext();

  return (
    <div
      className="mt-5 d-flex justify-content-between secondary"
      style={{ backgroundColor: primary, padding: 70 }}
    >
      <div className="d-flex w-100 flex-column">
        <span className="mb-4 cursor-pointer">
          LE PETIT <span className="bold">COMMERCE</span>
        </span>
        <small className="mb-2">About us</small>
        <small className="mb-4">Contact</small>
        <SubMenu
          firstLabel={
            <span
              className="p-2 d-flex"
              style={{ backgroundColor: "rgb(20, 93, 109)", borderRadius: 100 }}
            >
              <AiFillLinkedin size={20} />
            </span>
          }
          secondLabel={
            <span
              className="p-2 d-flex"
              style={{ backgroundColor: "rgb(20, 93, 109)", borderRadius: 100 }}
            >
              <AiFillFacebook size={20} />
            </span>
          }
          thirdLabel={
            <span
              className="p-2 d-flex"
              style={{ backgroundColor: "rgb(20, 93, 109)", borderRadius: 100 }}
            >
              <AiFillInstagram size={20} />
            </span>
          }
        />
        <small className="mt-4">Made by @ethantaylan</small>
      </div>
      {FooterInformations.map((t: FooterInformationsProps) => (
        <ul className="nav w-25 d-flex flex-column">
          <span className="bold">{t.title}</span>
          <small>
            {t.links.map((link: FooterInformationsLinksProps) => (
              <li className={`my-2 ${link.isImportant && 'bold'}`}>{link.title}</li>
            ))}
          </small>
        </ul>
      ))}
    </div>
  );
};
