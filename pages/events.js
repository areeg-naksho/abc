import Web from "../components/web/events";
import Mobile from "../components/mobile/events";
import { useCurrentWidth } from "../components/tools";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";

const defaults = {
  key1: "ARTISAN EVENTS",
  key2: "A calendar of events and experiences at The Artisan that brings to life the values of the Italian eatery, showcasing art, food and culture.",
  key3: "With themed concept dinners, music and bespoke special offerings, The Artisan thrives to create memorable experiences. This dinner series aims to showcase Italian crafts and engage with the local community.",
  key4: "Covering culture, art, architecture, design, music, gastronomy and more, each dinner will make you dream of Italy's most outstanding regions.",
  key5: "Our monthly dinner series will include a Bar Masterclass followed by a dinner and drinks from our special monthly menu.",
  key6: "Looking for a space for your private or corporate events? The Artisan is the location for you!",
  key7: "FOR MORE INFO:",
  key8: "email@theartisan.ae",
  key9: "THE DINNER SERIES WITH CHEF LUCA",
  key10: "May 2021",
  key11: "A Feast for the Senses",
  key12: "The Artisan feast for the senses private dining is",
  key13: "all about creating memorable experiences, for",
  key14: " what you see, what you can smell, hear and",
  key15: "taste. Artisan is not traditional, but it utilizes",
  key16: "traditional cooking methods.",
  key17: "July 2021",
  key18: "Septamber 2021",
  key19: "Novamber 2021",
  key20: "NEGRONI COCKTAIL MASTERCLASS",
  key21: "Weekly classes available for groups of 4",
  key22: "Cost 250 AED per person",
  key23: "TRUFFLE SEASON",
  key24: "4 course dinner paired with fine wine",
  key25: "Cost 550 AED per person",
  img_bg: { src: "/img/events-bg.png", width: 1320, height: 990 },
  m_img_bg: { src: "/m-img/events-bg.png", width: 751, height: 1069 },
  img_bg1: { src: "/img/events-1.png", width: 178, height: 229 },
  img_bg2: { src: "/img/events-2.png", width: 178, height: 229 },
  img_bg3: { src: "/img/events-3.png", width: 178, height: 229 },
};

export default function Page() {
  const [resources, setResources] = useState(defaults);

  const server = useContext(UserContext);
  const getData = async () => {
    const req = await fetch(server.context + "/data");
    const response = await req.json();
    setResources(response.data.resources.events);
  };

  useEffect(() => {
    getData();
  }, []);

  if (useCurrentWidth() < 1000) return <Mobile data={{ resources }} />;
  else return <Web data={{ resources }} />;
}
