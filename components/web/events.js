import { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import UserContext from "../UserContext";
export default function Events({ data: { resources } }) {
  const [viewportTop, setViewportTop] = useState();
  const server = useContext(UserContext);
  useEffect(() => {
    const handleScroll = () => setViewportTop(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Box sx={{ width: "100%", height: "100vh", position: "absolute" }}>
        <img
          src={server.context + resources.img_bg.src}
          style={{ position: "absolute", width: "100%", height: "130%" }}
          alt="events bg image"
        />
        <Box className="box" sx={{ width: "23.75vw", height: "130vh" }} />
        <Box
          sx={{
            backgroundColor: "#bedab9",
            width: "40vw",
            height: "115vh",
            position: "absolute",
            marginLeft: "43.8vw",
            marginTop: "12vh",
          }}
        />
        <Box
          sx={{
            color: "black",
            width: "22.75vw",
            position: "absolute",
            marginLeft: "45.5vw",
            marginTop: "15vh",
          }}
        >
          <p style={{ width: "100%", position: "absolute", fontSize: "11px" }}>
            {resources.key9}
          </p>
          <p
            style={{
              width: "100%",
              position: "absolute",
              fontSize: "13px",
              marginTop: "4vh",
            }}
          >
            {resources.key10}
          </p>
          <p
            style={{
              width: "100%",
              position: "absolute",
              fontSize: "11px",
              marginTop: "8vh",
            }}
          >
            {resources.key11}
          </p>
          <p
            style={{
              width: "100%",
              position: "absolute",
              fontSize: "10px",
              marginTop: "11vh",
            }}
          >
            {resources.key12}
          </p>
          <p
            style={{
              width: "100%",
              position: "absolute",
              fontSize: "10px",
              marginTop: "13vh",
            }}
          >
            {resources.key13}
          </p>
          <p
            style={{
              width: "100%",
              position: "absolute",
              fontSize: "11px",
              marginTop: "15vh",
            }}
          >
            {resources.key14}
          </p>
          <p
            style={{
              width: "100%",
              position: "absolute",
              fontSize: "11px",
              marginTop: "17vh",
            }}
          >
            {resources.key15}
          </p>
          <p
            style={{
              width: "100%",
              position: "absolute",
              fontSize: "11px",
              marginTop: "19vh",
            }}
          >
            {resources.key16}
          </p>
          <p
            style={{
              width: "100%",
              position: "absolute",
              fontSize: "13px",
              marginTop: "23vh",
            }}
          >
            {resources.key17}
          </p>
          <p
            style={{
              width: "100%",
              position: "absolute",
              fontSize: "13px",
              marginTop: "25vh",
            }}
          >
            {resources.key18}
          </p>
          <p
            style={{
              width: "100%",
              position: "absolute",
              fontSize: "13px",
              marginTop: "27vh",
            }}
          >
            {resources.key19}
          </p>
        </Box>
        <img
          src={server.context + resources.img_bg1.src}
          style={{
            position: "absolute",
            width: "170px",
            height: "220px",
            marginLeft: "68vw",
            marginTop: "15vh",
          }}
          alt="events first image"
        />
        <hr
          style={{
            width: "36.5vw",
            height: "0.1vh",
            backgroundColor: "black",
            borderColor: "black",
            marginTop: "51vh",
            position: "absolute",
            marginLeft: "45.5vw",
          }}
        />
        <Box
          sx={{
            color: "black",
            width: "20vw",
            position: "absolute",
            marginLeft: "64vw",
            marginTop: "53vh",
          }}
        >
          <p style={{ position: "absolute", fontSize: "11px" }}>
            {resources.key20}
          </p>
          <p
            style={{ position: "absolute", fontSize: "11px", marginTop: "8vh",width:"80%" }}
          >
            {resources.key21}
          </p>
          <p
            style={{
              position: "absolute",
              fontSize: "11px",
              marginTop: "14vh",
            }}
          >
            {resources.key22}
          </p>
        </Box>
        <img
          src={server.context + resources.img_bg2.src}
          style={{
            position: "absolute",
            width: "190px",
            height: "220px",
            marginLeft: "45.5vw",
            marginTop: "53vh",
          }}
          alt="events second image"
        />
        <hr
          style={{
            width: "36.5vw",
            height: "0.1vh",
            backgroundColor: "black",
            borderColor: "black",
            marginTop: "89vh",
            position: "absolute",
            marginLeft: "45.5vw",
          }}
        />
        <Box
          sx={{
            color: "black",
            width: "23.75vw",
            position: "absolute",
            marginLeft: "45.5vw",
            marginTop: "91vh",
          }}
        >
          <p style={{ position: "absolute", fontSize: "11px" }}>
            {resources.key23}
          </p>
          <p
            style={{ position: "absolute", fontSize: "11px", marginTop: "8vh" }}
          >
            {resources.key24}
          </p>
          <p
            style={{
              position: "absolute",
              fontSize: "11px",
              marginTop: "14vh",
            }}
          >
            {resources.key25}
          </p>
        </Box>
        <img
          src={server.context + resources.img_bg3.src}
          style={{
            position: "absolute",
            width: "190px",
            height: "220px",
            marginLeft: "65.5vw",
            marginTop: "91vh",
          }}
          alt="events third image"
        />
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
          <p
            style={{
              fontSize: "13px",
              width: "70%",
              marginLeft: "3.5vw",
              marginTop: "-0.5vh",
            }}
          ></p>
          <p style={{ fontSize: "15px" }}>{resources.key1}</p>
          <p style={{ fontSize: "13px", width: "87%", marginLeft: "1.7vw" }}>
            {resources.key2}
          </p>
          <p style={{ fontSize: "13px", width: "87%", marginLeft: "1.7vw" }}>
            {resources.key3}
          </p>
          <p style={{ fontSize: "13px", width: "85%", marginLeft: "2vw" }}>
            {resources.key4}
          </p>
          <p style={{ fontSize: "13px", width: "87%", marginLeft: "1.7vw" }}>
            {resources.key5}
          </p>
          <p style={{ fontSize: "13px", width: "87%", marginLeft: "1.7vw" }}>
            {resources.key6}
          </p>
          <p style={{ fontSize: "15px" }}>{resources.key7}</p>
          <a
            style={{ fontSize: "15px", color: "#bedab9" }}
            href={`mailto:${resources.key8}`}
            target="_blank"
            rel="noreferrer"
          >
            {resources.key8}
          </a>
        </Box>
      </Box>
    </div>
  );
}
