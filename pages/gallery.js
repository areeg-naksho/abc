import Web from "../components/web/gallery";
import Mobile from "../components/mobile/gallery";
import { useCurrentWidth } from "../components/tools";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";
const defaults = {
  key1: "A CASA , WITH RICHARD GINORI",
  key2: "Transform your dining table with Richard Ginori 1735:",
  key3: "With a vast history of craftsmanship spanning over 280 years, Richard Ginori dinnerware is an expression of excellence and is one of Italy's leading manufacturers of high-quality porcelain tableware.",
  key4: "Through a carefully curated tablescape, The Artisan will showcase the timeless beauty and elegance that characterises the Ginori brand. The bespoke menu created by The Artisan culinary team for each event will be presented on Ginori plates in a seamless coming together of the two houses. ",
  img_bg: { src: "/img/gallery-bg.png", width: 1320, height: 990 },
  img_1: { src: "/img/gallery-1.png", width: 389, height: 260 },
  img_2: { src: "/img/gallery-2.png", width: 389, height: 260 },
  img_3: { src: "/img/gallery-3.png", width: 389, height: 260 },
  m_img_bg: { src: "/m-img/gallery-bg.png", width: 751, height: 1069 },
  m_img_1: { src: "/m-img/gallery-1.png", width: 348.21, height: 235.65 },
  m_img_2: { src: "/m-img/gallery-2.png", width: 348.21, height: 235.65 },
};

export default function Page() {
  const [resources, setResources] = useState(defaults);

  const server = useContext(UserContext);
  const getData = async () => {
    const req = await fetch(server.context + "/data");
    const response = await req.json();
    setResources(response.data.resources.gallery);
  };

  useEffect(() => {
    getData();
  }, []);

  if (useCurrentWidth() < 1000) return <Mobile data={{ resources }} />;
  else return <Web data={{ resources }} />;
}
