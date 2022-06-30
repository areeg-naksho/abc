import { useEffect, useState, useLayoutEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UserContext from "../UserContext";

export default function Gifting({ data: { resources } }) {
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
    { href: server.context + resources.img_4.src },
    { href: server.context + resources.img_5.src },
  ];

  return (
    <div>
      <Box sx={{ width: "100%", height: "100vh", position: "absolute" }}>
        <img
          src={server.context + resources.img_bg.src}
          style={{ position: "absolute", width: "100%", height: "120%" }}
          alt="gifting bg image"
        />
        <Box className="box" sx={{ width: "23.75vw", height: "120vh" }} />
        <Box
          sx={{
            color: "white",
            textAlign: "center",
            width: "23.75vw",
            position: "absolute",
            marginLeft: "3.8vw",
            display: "flex",
            flexDirection: "column",
            marginTop: "17.5vh",
          }}
        >
          <p style={{ fontSize: "15px" }}>{resources.key1}</p>
          <p style={{ fontSize: "13px", width: "85.5%", marginLeft: "1.8vw" }}>
            {resources.key2}
          </p>
          <p style={{ fontSize: "13px", width: "80%", marginLeft: "2.5vw" }}>
            {resources.key3}
          </p>
          <a
            style={{ fontSize: "13px", color: "#bedab9", marginTop: "-1.5vh" }}
            href={`mailto:${resources.email}`}
            target="_blank"
            rel="noreferrer"
          >
            {resources.email}
          </a>
          <p style={{ fontSize: "15px", marginTop: "-0.01vh" }}>
            {resources.key5}
          </p>
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
          {images.map((item, index) => (
            <Grid item md={4} xl={2.4} key={index}>
              <img
                style={{ height: "35vh", width: "100%", cursor: "pointer" }}
                src={`${item.href}`}
                srcSet={`${item.href}`}
                onClick={() => {
                  setEnlarged(item.href);
                }}
                alt="gifting images"
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        style={{
          width: "30%",
          height: "65%",
          position: "absolute",
          marginTop: "80vh",
          marginLeft: "35%",
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
          alt="Artisan  gifting image"
        />
      </Box>
    </div>
  );
}
