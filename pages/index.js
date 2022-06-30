import Web from "../components/web/landing";
import Mobile from "../components/mobile/landing";
import { useCurrentWidth } from "../components/tools";
import { useContext, useEffect, useState } from "react";
import UserContext from "../components/UserContext";

const defaults = {
  key1: "A unique hidden gem with mouthwatering dishes, impeccable service in an art deco setup.",
  key2: "Pairing Italian culinary prestige with the finest ingredients, The Artisan translates Italy’s heritage and beauty. The menu takes its cues from the rolling fields of Tuscany, the eternal hills of Rome, the sparkling Amalfi coast and the ruins of Sicily to showcase Italy’s magic, history and passion.",
  key3: "Taste Italian cuisine, taste Italy.",
  key4: "RESERVATIONS",
  hours1: "OPENING HOURS",
  hours2: "Saturday to Wednesday from 12:00 PM to 12:00 AM",
  hours3: "Thursday to Friday from 12:00 PM to 12:00 AM",
  address: "ADDRESS ",
  address1: "Waldorf Astoria, DIFC, Dubai, UAE ",
  reservation: "RESERVATION NUMBER",
  mobile: "+971 04 338 8133",
  email: "reservations@theartisan.ae",
  text: "FOLLOW US",
  email1: "https://www.instagram.com",
  img_bg: {
    src: "/img/landing-bg.png",
    width: 1320,
    height: 990,
  },
  img_1: { src: "/img/landing-1.png", width: 400, height: 267 },
  img_2: { src: "/img/landing-2.png", width: 400, height: 267 },
  img_3: { src: "/img/landing-3.png", width: 400, height: 267 },
  img_4: { src: "/img/landing-4.png", width: 400, height: 267 },
  img_5: { src: "/img/landing-5.png", width: 400, height: 267 },
  img_6: { src: "/img/landing-6.png", width: 400, height: 267 },
  m_img_bg: { src: "/m-img/landing-bg.png", width: 751, height: 1069 },
};

export default function Page() {
  const [resources, setResources] = useState(defaults);
  const server = useContext(UserContext);
  const getData = async () => {
    const req = await fetch(server.context + "/data");
    const response = await req.json();
    setResources(response.data.resources.index);
  };

  useEffect(() => {
    getData();
  }, []);

  if (useCurrentWidth() < 1000) return <Mobile data={{ resources }} />;
  else return <Web data={{ resources }} />;
}
