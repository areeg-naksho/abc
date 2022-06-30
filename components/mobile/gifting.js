import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import UserContext from "../UserContext";

export default function Gifting({ data: { resources } }) {
  const [enlarged, setEnlarged] = useState();
  const server = useContext(UserContext);

  const images = [
    { href: server.context + resources.img_1.src },
    { href: server.context + resources.img_2.src },
    { href: server.context + resources.img_3.src },
    { href: server.context + resources.img_4.src },
    { href: server.context + resources.img_5.src },
  ];

  return (
    <div>
      <Box sx={{ width: "100%", height: "70vh", position: "absolute" }}>
        <img
          src={server.context + resources.img_bg.src}
          style={{ position: "absolute", width: "100%", height: "70vh" }}
          alt="gifting bg image"
        />
        <Box
          className="boxmobile"
          sx={{
            width: "100%",
            height: "20vh",
            position: "absolute",
            marginTop: "50vh",
          }}
        />
        <Box
          sx={{
            color: "white",
            textAlign: "center",
            position: "absolute",
            marginLeft: "3.8vw",
            display: "flex",
            flexDirection: "column",
            marginTop: "50vh",
          }}
        >
          <p className="textmobile" style={{ width: "85.5%", marginLeft: "8vw" }}>{resources.key1}</p>
          <p className="textmobile" style={{ width: "85.5%", marginLeft: "5vw" }}>
            {resources.key2}
          </p>
          <p className="textmobile" style={{ width: "80%", marginLeft: "8vw" }}>
            {resources.key3}
          </p>
          <a
          className="ahref"
            style={{ color: "#bedab9",marginTop: "-0.5vh", marginLeft: "3vw" }}
            href={`mailto:${resources.email}`}
            target="_blank"
            rel="noreferrer"
          >
            {resources.email}
          </a>
          <p className="textmobile" style={{ marginTop: "-0.01vh", marginLeft: "3vw" }}>
            {resources.key5}
          </p>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          marginTop: "70vh",
          position: "absolute",
          display:"flex",
          flexDirection:"row",
          textAlign: "center",
          zIndex: enlarged ? "0" : "100",
        }}
      >
        {images.map((item) => (
          <div key={item}>
            <img
              style={{ height: "25vh", width: "100%" }}
              src={`${item.href}`}
              srcSet={`${item.href}`}
              onClick={() => {
                setEnlarged(item.href);
              }}
              alt="gifting images"
            />
          </div>
        ))}
      </Box>
      <Box
        className="boxinlarge"
        style={{
          width: "56vw",
          marginTop: "27vh",
          marginLeft: "21vw",
          cursor: enlarged ? "pointer" : "auto",
        }}
      >
        <img
          src={enlarged}
          style={{
            width: "100%",
            height: "100%",
            visibility: enlarged ? "visible" : "hidden",
          }}
          onClick={() => {
            setEnlarged(null);
          }}
          alt="Enlarged gifting image"
        />
      </Box>
    </div>
  );
}
