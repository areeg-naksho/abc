import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import UserContext from "../UserContext";

export default function Bar({ data: { resources } }) {
  const [enlarged, setEnlarged] = useState();
  const server = useContext(UserContext);

  const images = [
    { href: server.context + resources.img_1.src },
    { href: server.context + resources.img_2.src },
    { href: server.context + resources.img_3.src },
  ];

  return (
    <div>
      <Box sx={{ width: "100%", height: "70vh", position: "absolute" }}>
        <img
          src={server.context + resources.img_bg.src}
          style={{ position: "absolute", width: "100%", height: "70vh" }}
          alt="gallery bg image"
        />
        <Box
          className="boxmobile"
          sx={{
            width: "100%",
            height: "30vh",
            position: "absolute",
            marginTop: "40vh",
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
            marginTop: "40vh",
          }}
        >
          <p className="textmobile" style={{ width: "70%", marginLeft: "12vw" }}>{resources.key1}</p>
          <p className="textmobile" style={{ width: "70%", marginLeft: "12vw" }}>
            {resources.key2}
          </p>
          <p className="textmobile" style={{ width: "87%", marginLeft: "3vw" }}>
            {resources.key3}
          </p>
          <p className="textmobile" style={{ width: "85%", marginLeft: "5vw" }}>
            {resources.key4}
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
              alt="gallery images"
            />
          </div>
        ))}
      </Box>
      <Box
        style={{
          width: "80vw",
          height: "40vh",
          position: "absolute",
          marginTop: "13vh",
          marginLeft: "10vw",
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
          alt="Enlarged gallery image"
        />
      </Box>
    </div>
  );
}
