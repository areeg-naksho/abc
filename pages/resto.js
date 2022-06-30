import Web from "../components/web/resto";
import Mobile from "../components/mobile/resto";
import { useCurrentWidth } from "../components/tools";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";

const defaults = {
  key1: "ABOUT THE ARTISAN",
  key2: "Setting a new standard of Italian cuisine in the Middle East",
  key3: "The Artisan is everything that an authentic Italian restaurant should be — going beyond food to bring guests a true Italian experience.",
  key4: "The menu boasts a mix of loved classics made with ingredients sourced directly from the best artisans in Italy.",
  key5: "Selection of mouth watering dishes, exceptional Italian wines, and exquisite wood fire pizzas, are what makes your experience at The Artisan remarkable as we take you on a gastronomic journey to discover the true taste of Italy.",
  key6: "Located in the Waldorf Astoria Hotel in  buzzing financial district of Dubai, we welcome you daily for lunch and dinner in our restaurant and every evening at our bar for Aperitivo.",
  key7: "Celebrate your events in style, dine in a relaxed ambiance.",
  key8: "Our highly skilled and friendly team will treat you to Italian hospitality, giving you a taste of La Dolce Vita.",
  key9: "The Artisan is YOUR Italian destination.",
  foodMenu: "A LA CARTE MENU",
  desertMenu: "DESSERT MENU",
  img_bg: { src: "/img/resto-bg.png", width: 1320, height: 990 },
  img_1: { src: "/img/resto-1.png", width: 392, height: 314 },
  img_2: { src: "/img/resto-2.png", width: 392, height: 314 },
  img_3: { src: "/img/resto-3.png", width: 392, height: 314 },
  m_img_bg: { src: "/m-img/resto-bg.png", width: 751, height: 1069 },
  m_img_1: { src: "/m-img/resto-1.png", width: 348.21, height: 235.65 },
  m_img_2: { src: "/m-img/resto-2.png", width: 348.21, height: 235.65 },
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
    setResources(response.data.resources.resto);
    setPdfs(response.data.pdfs);
  };

  useEffect(() => {
    getData();
  }, []);

  if (useCurrentWidth() < 1000) return <Mobile data={{ resources, pdfs }} />;
  else return <Web data={{ resources, pdfs }} />;
}
