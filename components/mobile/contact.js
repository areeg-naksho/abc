import Box from "@mui/material/Box";
import React, { useContext } from "react";
import Location from "./location";
import UserContext from "../UserContext";
export default function Page({ data: { resources } }) {
  const server = useContext(UserContext);
  return (
    <div>
      <Box sx={{ width: "100%", height: "70vh", position: "absolute" }}>
        <img
          src={server.context + resources.img_bg.src}
          style={{ position: "absolute", width: "100%", height: "70vh" }}
          alt="contact bg image"
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
            backgroundColor: "#bedab9",
            width: "100%",
            height: "20vh",
            position: "absolute",
            marginTop: "70vh",
          }}
        />
        <Location />
        <Box
          sx={{
            color: "white",
            textAlign: "center",
            position: "absolute",
            marginLeft: "3.8vw",
            display: "flex",
            flexDirection: "column",
            marginTop: "48vh",
          }}
        >
          <p className="textmobile" style={{ marginTop:"-4vh",marginLeft: "35vw" }}>
            {resources.key1}
          </p>
          <p className="textmobile" style={{marginLeft: "35vw" }}>{resources.key2}</p>
          <p
          className="textmobile"
            style={{
              marginLeft: "35vw"
            }}
          >
            {resources.key3}
          </p>
          <p
          className="textmobile"
            style={{
              marginLeft: "35vw"
            }}
          >
            {resources.key4}
          </p>
          <a
            className="ahref"
            style={{ marginLeft: "35vw" }}
            href={`tel:${resources.mobile}`}
            target="_blank"
            rel="noreferrer"
          >
            {resources.mobile}
          </a>
          <a
            className="ahref"
            style={{ marginLeft: "35vw",marginTop:"1vh" }}
            href={`mailto:${resources.email}`}
            target="_blank"
            rel="noreferrer"
          >
            {resources.email}
          </a>
        </Box>
      </Box>
    </div>
  );
}
