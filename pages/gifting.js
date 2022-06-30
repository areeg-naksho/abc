import Web from "../components/web/gifting";
import Mobile from "../components/mobile/gifting";
import { useCurrentWidth } from "../components/tools";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";

const defaults = {
  key1: "GIFTING",
  key2: "Enjoy a selection of unique, festive and exclusive gifts for private and corporate clients. Gifting options range from fresh olive oil, balsamic and chocolates to jams, and Panettone.",
  key3: "We would be more than happy to assist with your request, do not hesitate to send us an email at",
  email: "reservations@theartisan.ae",
  key5: "to inquire or place your order.",
  img_bg: { src: "/img/gift-bg.png", width: 1320, height: 990 },
  img_1: { src: "/img/gift-1.png", width: 226.71, height: 258.69 },
  img_2: { src: "/img/gift-2.png", width: 226.71, height: 258.69 },
  img_3: { src: "/img/gift-3.png", width: 226.71, height: 258.69 },
  img_4: { src: "/img/gift-4.png", width: 226.71, height: 258.69 },
  img_5: { src: "/img/gift-5.png", width: 226.71, height: 258.69 },
  m_img_bg: { src: "/m-img/gift-bg.png", width: 751, height: 1069 },
  m_img_1: { src: "/m-img/gift-1.png", width: 225, height: 235.65 },
  m_img_2: { src: "/m-img/gift-2.png", width: 225, height: 235.65 },
  m_img_3: { src: "/m-img/gift-3.png", width: 225, height: 235.65 },
};

export default function Page() {
  const [resources, setResources] = useState(defaults);

  const server = useContext(UserContext);
  const getData = async () => {
    const req = await fetch(server.context + "/data");
    const response = await req.json();
    setResources(response.data.resources.gifting);
  };

  useEffect(() => {
    getData();
  }, []);

  if (useCurrentWidth() < 1000) return <Mobile data={{ resources }} />;
  else return <Web data={{ resources }} />;
}
