import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import UserContext from "../UserContext";
export default function Bar({ data: { resources, pdfs } }) {
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
          alt="restorant bg image"
        />
        <Box
          className="boxmobile"
          sx={{
            width: "100%",
            height: "44vh",
            position: "absolute",
            marginTop: "26vh",
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
            marginTop: "26vh",
          }}
        >
          <p className="textmobile" style={{ width: "85vw", marginLeft: "5vw" }}>{resources.key1}</p>
          <p
          className="textmobile"
          style={{ width: "85vw", marginLeft: "5vw",marginTop:"-1vh" }}
          >
            {resources.key2}
          </p>
          <p
          className="textmobile"
          style={{ width: "85vw", marginLeft: "5vw",marginTop:"-1vh" }}
          >
            {resources.key3}
          </p>
          <p
          className="textmobile"
          style={{ width: "85vw", marginLeft: "5vw",marginTop:"-1vh" }}
          >
            {resources.key4}
          </p>
          <p
          className="textmobile"
          style={{ width: "85vw", marginLeft: "5vw",marginTop:"-1vh" }}
          >
            {resources.key5}
          </p>
          <p
          className="textmobile"
          style={{ width: "85vw", marginLeft: "5vw",marginTop:"-1vh" }}
          >
            {resources.key6}
          </p>
          <p
          className="textmobile"
          style={{ width: "85vw", marginLeft: "5vw" }}
          >
            {resources.key7}
          </p>
          <p
          className="textmobile"
          style={{ width: "85vw", marginLeft: "5vw" }}
          >
            {resources.key8}
          </p>
          <p className="textmobile"  style={{ width: "85vw", marginLeft: "5vw" }}>
            {resources.key9}
          </p>
          <p className="textmobile" style={{ width: "85vw", marginLeft: "5vw" }}>
            {resources.key10}
          </p>
          <a
            className="ahref"
            href={server.context + pdfs.food}
            target="_blank"
            rel="noreferrer"
            style={{marginLeft:"2vw"}}
          >
            {resources.foodMenu}{" "}
            <FileDownloadOutlinedIcon className="downloadicon" />
          </a>
          <a
          style={{marginLeft:"2vw"}}
            className="ahref"
            href={server.context + pdfs.dessert}
            target="_blank"
            rel="noreferrer"
          >
            {resources.desertMenu}{" "}
            <FileDownloadOutlinedIcon className="downloadicon" />
          </a>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          marginTop: "70vh",
          position: "absolute",
          textAlign: "center",
          display:"flex",
          flexDirection:"row",
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
              alt="restorant images"
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
          alt="Enlarged resturant image"
        />
      </Box>
    </div>
  );
}
