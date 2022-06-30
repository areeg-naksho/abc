import Web from "../components/web/contact";
import Mobile from "../components/mobile/contact";
import { useCurrentWidth } from "../components/tools";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";

const defaults = {
  key1: "RESERVATIONS",
  key2: "ADDRESS",
  key3: "Waldorf Astoria, DIFC, Dubai, UAE",
  key4: "RESERVATION NUMBER",
  mobile: "+971 04 338 8133",
  email: "reservations@theartisan.ae",
  img_bg: { src: "/img/contact-bg.png", width: 1320, height: 990 },
  img_1: { src: "/img/contact-1.png", width: 414.47, height: 262.87 },
  m_img_bg: { src: "/m-img/contact-bg.png", width: 751, height: 1335 },
  m_img_map: { src: "/m-img/contact-map.png", width: 700, height: 215 },
};

export default function Page() {
  const [resources, setResources] = useState(defaults);

  const server = useContext(UserContext);
  const getData = async () => {
    const req = await fetch(server.context + "/data");
    const response = await req.json();
    setResources(response.data.resources.contact);
  };

  useEffect(() => {
    getData();
  }, []);

  if (useCurrentWidth() < 1000) return <Mobile data={{ resources }} />;
  else return <Web data={{ resources }} />;
}
