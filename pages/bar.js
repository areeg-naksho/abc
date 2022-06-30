import Web from "../components/web/bar";
import Mobile from "../components/mobile/bar";
import { useCurrentWidth } from "../components/tools";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";

const defaults = {
  key1: "MEET OUR MIXOLOGIST",
  key2: "A perfect pour is waiting for you! ",
  key3: "Offering a range of fresh and aromatic cocktails, Italian Spritz and special Negroni blends,  The Artisan is your go-to Aperitivo spot in the heart of Dubai.",
  key4: "Join us and meet our mixologist for an evening true to Italian heritage. Salute!",
  key5: "DOWNLOAD PDF MENU",
  cocktailsMenu: "HANDCRAFTED COCKTAILS",
  aperitivoMenu: "APERITIVO MENU LOW IN ALCOHOL HIGH IN SPIRIT",
  wineMenu: "WINE MENU",
  img_bg: { src: "/img/bar-bg2.png", width: 1320, height: 990 },
  img_1: { src: "/img/bar-1.png", width: 392, height: 314 },
  img_2: { src: "/img/bar-2.png", width: 392, height: 314 },
  img_3: { src: "/img/bar-3.png", width: 392, height: 314 },
  m_img_bg: { src: "/m-img/bar-bg.png", width: 751, height: 1069 },
  m_img_1: { src: "/m-img/bar-1.png", width: 348.21, height: 235.65 },
  m_img_2: { src: "/m-img/bar-2.png", width: 348.21, height: 235.65 },
};

const defaultPdfs = {
  cocktail: "/pdf/TheArtisanCocktail.pdf",
  aperitivo: "/pdf/TheArtisanCocktail.pdf",
  wine: "/pdf/wine_menu.pdf",
  food: "/pdf/TheArtisan_FoodMenu.pdf",
  dessert: "/pdf/TheArtisan_DessertMenu.pdf",
};

export default function Page() {
  const [resources, setResources] = useState(defaults);
  const [pdfs, setPdfs] = useState(defaultPdfs);

  const server = useContext(UserContext);
  const getData = async () => {
    const req = await fetch(server.context + "/data");
    const response = await req.json();
    setResources(response.data.resources.bar);
    setPdfs(response.data.pdfs);
  };

  useEffect(() => {
    getData();
  }, []);

  if (useCurrentWidth() < 1000) return <Mobile data={{ resources, pdfs }} />;
  else return <Web data={{ resources, pdfs }} />;
}
