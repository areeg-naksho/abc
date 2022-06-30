import { useState, useLayoutEffect, useEffect, useContext } from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Calendar from "./calender/calendar-home";
import UserContext from "../UserContext";

export default function Home({ data: { resources } }) {
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
    { href: server.context + resources.img_6.src },
  ];
  return (
    <main>
      <Box sx={{ width: "100%", height: "100vh", position: "absolute" }}>
        <img
          src={server.context + resources.img_bg.src}
          style={{ position: "absolute", width: "100%", height: "140%" }}
          alt="landing bg image"
        />
        <Box className="box" sx={{ width: "23.75vw", height: "140vh" }} />
        <Box
          sx={{
            color: "white",
            textAlign: "center",
            width: "100%",
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            marginTop: "11vh",
          }}
        >
          <p style={{ fontSize: "15px", width: "19%", marginLeft: "6.3vw" }}>
            {resources.key1}
          </p>
          <p style={{ fontSize: "13px", width: "19%", marginLeft: "6.3vw" }}>
            {resources.key2}
          </p>
          <p style={{ fontSize: "13px", width: "19%", marginLeft: "6.3vw" }}>
            {resources.key3}
          </p>
          <p style={{ fontSize: "13px", width: "19%", marginLeft: "6vw" }}>
            {resources.key4}
          </p>
          <Calendar />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#bedab9",
          textAlign: "center",
          width: "33%",
          height: "27vh",
          position: "absolute",
          marginTop: "112.8vh",
        }}
      >
        <p style={{ fontSize: "15px", marginTop: "5vh" }}>{resources.hours1}</p>
        <p style={{ fontSize: "15px", marginTop: "5vh" }}>{resources.hours2}</p>
        <p style={{ fontSize: "15px", marginTop: "-1vh" }}>
          {resources.hours3}
        </p>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          textAlign: "center",
          width: "31%",
          height: "27vh",
          position: "absolute",
          marginTop: "112.8vh",
          marginLeft: "34.4%",
        }}
      >
        <p style={{ fontSize: "15px", marginTop: "5vh" }}>
          {resources.address}
        </p>
        <p style={{ fontSize: "15px", marginTop: "5vh" }}>
          {resources.address1}
        </p>
      </Box>
      <Box
        sx={{
          backgroundColor: "#bedab9",
          textAlign: "center",
          width: "33%",
          height: "27vh",
          position: "absolute",
          marginTop: "112.8vh",
          marginLeft: "67%",
        }}
      >
        <p style={{ fontSize: "15px", marginTop: "5vh" }}>
          {resources.reservation}
        </p>
        <br />
        <a
          className="aahref"
          style={{ fontSize: "15px", color: "black" }}
          href={`tel:${resources.mobile}`}
        >
          {resources.mobile}
        </a>
        <br />
        <br />
        <a
          className="aahref"
          style={{ fontSize: "15px", color: "black" }}
          href={`mailto:${resources.email}`}
        >
          {resources.email}
        </a>
      </Box>
      <Box
        sx={{
          backgroundColor: "black",
          width: "100%",
          height: "120vh",
          position: "absolute",
          marginTop: "139.8vh",
        }}
      />
      <Box
      className="instaweb"
        style={{
          color: "white",
          width: "100%",
          fontSize: "38px",
          marginTop: "150vh",
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          justifyItems: "center",
        }}
      >
        <p    style={{ marginTop: "0.5vh", marginLeft: "34vw" }}>
          {resources.text}
        </p>
        <a
          style={{ marginLeft: "1%", color: "#bedab9", textDecoration: "none" }}
          href={"https://www.instagram.com/theartisandubai"}
        >
          {resources.email1}
        </a>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "40vh",
          marginTop: "165vh",
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
            <Grid item md={4} xl={4} key={key}>
              <img
                style={{ height: "90%", width: "100%", cursor: "pointer" }}
                src={`${item.href}`}
                srcSet={`${item.href}`}
                onClick={() => {
                  setEnlarged(item.href);
                }}
                alt="Artisan home images"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        style={{
          width: "45%",
          height: "40%",
          position: "absolute",
          marginTop: "175vh",
          marginLeft: "28vw",
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
          alt="Enlarged landing image"
        />
      </Box>
      <Box
      className="navabottom"
        sx={{
          color: "white",
          width: "100%",
          position: "absolute",
          marginTop: "250vh",
        }}
      >
        <Link href="/">
          <a
            style={{
              fontSize: "20px",
              marginLeft: "20.5%",
              textDecoration: "none",
              color: "white",
            }}
          >
            Home
          </a>
        </Link>
        <Link href="/bar">
          <a
            style={{
              fontSize: "20px",
              marginLeft: "2%",
              textDecoration: "none",
              color: "white",
            }}
          >
            Bar
          </a>
        </Link>
        <Link href="/resto">
          <a
            style={{
              fontSize: "20px",
              marginLeft: "2%",
              textDecoration: "none",
              color: "white",
            }}
          >
            Restaurant
          </a>
        </Link>
        <Link href="/pizza">
          <a
            style={{
              fontSize: "20px",
              marginLeft: "2vw",
              textDecoration: "none",
              color: "white",
            }}
          >
            Casa Pizza
          </a>
        </Link>
        <Link href="/gifting">
          <a
            style={{
              fontSize: "20px",
              marginLeft: "2vw",
              textDecoration: "none",
              color: "white",
            }}
          >
            Corporate Gifting
          </a>
        </Link>
        <Link href="/gallery">
          <a
            style={{
              fontSize: "20px",
              marginLeft: "2vw",
              textDecoration: "none",
              color: "white",
            }}
          >
            Gallery
          </a>
        </Link>
        <Link href="/events">
          <a
            style={{
              fontSize: "20px",
              marginLeft: "2vw",
              textDecoration: "none",
              color: "white",
            }}
          >
            Events
          </a>
        </Link>
        <Link href="/contact">
          <a
            style={{
              fontSize: "20px",
              marginLeft: "2vw",
              textDecoration: "none",
              color: "white",
            }}
          >
            Contact
          </a>
        </Link>
      </Box>
    </main>
  );
}
