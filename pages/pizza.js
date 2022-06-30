import Web from "../components/web/pizza";
import Mobile from "../components/mobile/pizza";
import { useCurrentWidth } from "../components/tools";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";

const defaults = {
  key1: "THE ARTISAN PIZZA",
  key2: "In pizza we crust!",
  key3: "We deliver our woodfire homemade pizzas across Dubai; order online for an extraordinary culinary experience from the comfort of your home.",
  key4: "The tastiest pizza. Don't miss out!",
  foodMenu: "DOWNLOAD MENU",
  img_bg: { src: "/img/pizza-bg.png", width: 1320, height: 990 },
  img_1: { src: "/img/pizza-1.png", width: 392, height: 314 },
  img_2: { src: "/img/pizza-2.png", width: 392, height: 314 },
  img_3: { src: "/img/pizza-3.png", width: 392, height: 314 },
  m_img_bg: { src: "/m-img/pizza-bg.png", width: 751, height: 1069 },
  m_img_1: { src: "/m-img/pizza-1.png", width: 348.21, height: 235.65 },
  m_img_2: { src: "/m-img/pizza-2.png", width: 348.21, height: 235.65 },
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
    setResources(response.data.resources.pizza);
    setPdfs(response.data.pdfs);
  };
  useEffect(() => {
    getData();
  }, []);

  if (useCurrentWidth() < 1000) return <Mobile data={{ resources, pdfs }} />;
  else return <Web data={{ resources, pdfs }} />;
}
