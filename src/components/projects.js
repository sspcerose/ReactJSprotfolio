import { v4 as uuidv4 } from "uuid";
import philtrip from "../img/philtrip.png";
import itfits from "../img/itfitss.png";
import music from "../img/music.png";
import dorm from "../img/dorm.jpg";
import mangan from "../img/mangan.jpg";
import shoecenter from "../img/shoecenter.jpg";
import mbtc from "../img/mbtc.png";

const projects = [
  {
    id: uuidv4(),
    name: "ITFITS",
    desc: "An E-Commerce System",
    img: itfits,
  },
  {
    id: uuidv4(),
    name: "Mangan Tayo",
    desc: "An food blog platform",
    img: mangan,
  },
  {
    id: uuidv4(),
    name: "Shoe Center",
    desc: "An E-Commerce System",
    img: shoecenter,
  },
  {
    id: uuidv4(),
    name: "MBTC",
    desc: "A Booking system",
    img: mbtc,
  },
  {
    id: uuidv4(),
    name: "PhilTrip",
    desc: "A Booking System",
    img: philtrip,
  },
];

export default projects;
