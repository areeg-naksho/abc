import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import UserContext from "../UserContext";

export default function Bar({ data: { resources, pdfs } }) {
  const [enlarged, setEnlarged] = useState();
  const server = useContext(UserContext);

  const images = [
    { href: server.context + resources.img_1.src},
    { href: server.context + resources.img_2.src},
    { href: server.context + resources.img_3.src},
  ];

  return (
    <div>
      <Box sx={{ width: "100%", height: "70vh", position: "absolute" }}>
        <img
          src={server.context + resources.img_bg.src}
          style={{ position: "absolute", width: "100%", height: "70vh" }}
          alt="pizza bg image"
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
            marginTop: "45vh",
          }}
        >
          <p className="textmobile">{resources.key1}</p>
          <p className="textmobile"  style={{ fontStyle: "italic" }}>
            {resources.key2}
          </p>
          <p className="textmobile" >
            {resources.key3}
          </p>
          <p className="textmobile">
            {resources.key4}
          </p>
          <a
            className="ahref"
            href={server.context + pdfs.food}
            target="_blank"
            rel="noreferrer"
          >
            {resources.foodMenu}
            <FileDownloadOutlinedIcon className="downloadicon" />
          </a>
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
              alt="pizza images"
            />
          </div>
        ))}
      </Box>
      <Box
      className="boxinlarge"
      style={{
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
          alt="Enlarged pizza image"
        />
      </Box>
    </div>
  );
}
