import Avatar1 from "../assets/coachs/1.jpg";
import Avatar2 from "../assets/coachs/2.jpg";
import Avatar3 from "../assets/coachs/3.jpg";
import Avatar4 from "../assets/coachs/4.jpg";

export interface UsersProps {
  userName: string;
  imgSrc: string;
  index: number;
}

export const Users: UsersProps[] = [
  {
    userName: "Amélie",
    imgSrc: Avatar1,
    index: 0,
  },
  {
    userName: "Charlotte",
    imgSrc: Avatar2,
    index: 1,
  },
  {
    userName: "Eloïse",
    imgSrc: Avatar3,
    index: 2,
  },
  {
    userName: "Gabriel",
    imgSrc: Avatar4,
    index: 3,
  },
];
