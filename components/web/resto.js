import { useEffect, useState, useLayoutEffect, useContext } from "react";
import Box from "@mui/material/Box";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Grid from "@mui/material/Grid";
import UserContext from "../UserContext";

export default function Bar({ data: { resources, pdfs } }) {
  const [displaystate, setDisplaystate] = useState("");
  const [enlarged, setEnlarged] = useState();
  const [viewportTop, setViewportTop] = useState();
  const server = useContext(UserContext);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 400) {
        setDisplaystate("");
      } else {
        setDisplaystate("none");
        setEnlarged(null);
      }
    });
  });
  const images = [
    { href: server.context + resources.img_1.src },
    { href: server.context + resources.img_2.src },
    { href: server.context + resources.img_3.src },
  ];
  return (
    <div>
      <Box sx={{ width: "100%", height: "100vh", position: "absolute" }}>
        <img
          src={server.context + resources.img_bg.src}
          style={{ position: "absolute", width: "100%", height: "120%" }}
          alt="restorent bg image"
        />
        <Box className="box" sx={{ width: "23.75vw", height: "120vh" }} />
        <Box
          sx={{
            color: "white",
            textAlign: "center",
            width: "25vw",
            position: "absolute",
            marginLeft: "3.8vw",
            display: "flex",
            flexDirection: "column",
            marginTop: "10vh",
          }}
        >
          <p style={{ fontSize: "12px" }}>{resources.key1}</p>
          <p
            style={{
              fontSize: "12px",
              width: "68%",
              marginLeft: "4vw",
              marginTop: "-0.05vh",
            }}
          >
            {resources.key2}
          </p>
          <p
            style={{
              fontSize: "12px",
              width: "65%",
              marginLeft: "4.1vw",
              marginTop: "-0.05vh",
            }}
          >
            {resources.key3}
          </p>
          <p
            style={{
              fontSize: "12px",
              width: "65%",
              marginLeft: "4vw",
              marginTop: "-0.05vh",
            }}
          >
            {resources.key4}
          </p>
          <p
            style={{
              fontSize: "12px",
              width: "70%",
              marginLeft: "3.5vw",
              marginTop: "-0.05vh",
            }}
          >
            {resources.key5}
          </p>
          <p
            style={{
              fontSize: "12px",
              marginLeft: "3.5vw",
              width: "70%",
              marginTop: "-0.05vh",
            }}
          >
            {resources.key6}
          </p>
          <p
            style={{
              fontSize: "12px",
              width: "70%",
              marginLeft: "3.5vw",
              marginTop: "-0.05vh",
            }}
          >
            {resources.key7}
          </p>
          <p
            style={{
              fontSize: "12px",
              width: "65%",
              marginLeft: "4vw",
              marginTop: "-0.05vh",
            }}
          >
            {resources.key8}
          </p>
          <p
            style={{
              fontSize: "12px",
              marginTop: "-0.05vh",
              fontStyle: "italic",
            }}
          >
            {resources.key9}
          </p>
          <p style={{ fontSize: "12px", marginTop: "-0.05vh" }}>
            {resources.key10}
          </p>
          <a
            className="ahref"
            href={server.context + pdfs.food}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: "15px", marginTop: "2vh" }}
          >
            {resources.foodMenu}{" "}
            <FileDownloadOutlinedIcon
              style={{
                marginTop: "-0.6vh",
                marginLeft: "0.5vw",
                position: "absolute",
              }}
            />
          </a>
          <a
            className="ahref"
            href={server.context + pdfs.dessert}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: "15px", marginTop: "2vh" }}
          >
            {resources.desertMenu}{" "}
            <FileDownloadOutlinedIcon
              style={{
                marginTop: "-0.6vh",
                marginLeft: "0.5vw",
                position: "absolute",
              }}
            />
          </a>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "40vh",
          marginTop: "130vh",
          position: "absolute",
          textAlign: "center",
          zIndex: enlarged ? "0" : "100",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{ width: "88%", marginLeft: "auto", marginRight: "auto" }}
        >
          {images.map((item, key) => (
            <Grid key={key} item md={6} xl={4}>
              <img
                style={{ height: "35vh", width: "100%", cursor: "pointer" }}
                src={`${item.href}`}
                srcSet={`${item.href}`}
                onClick={() => {
                  setEnlarged(item.href);
                }}
                alt=" resturant images"
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        style={{
          width: "45%",
          height: "60%",
          position: "absolute",
          marginTop: "80vh",
          marginLeft: "26vw",
          cursor: enlarged ? "pointer" : "auto",
          display: displaystate,
        }}
      >
        <img
          className="imgg"
          src={enlarged}
          style={{
            width: "100%",
            height: "100%",
            visibility: enlarged ? "visible" : "hidden",
          }}
          onClick={() => {
            setEnlarged(null);
          }}
          alt="Artisan resturant image"
        />
      </Box>
    </div>
  );
}
