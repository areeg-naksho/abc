import { useContext } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import UserContext from "../UserContext";

export default function Home({ data: { resources } }) {
  const server = useContext(UserContext);

  return (
    <div>
      <Box sx={{ width: "100%", height: "70vh", position: "absolute" }}>
        <img
          src={server.context + resources.img_bg.src}
          style={{ position: "absolute", width: "100%", height: "70vh" }}
          alt=" landing bg image"
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
            width: "95%",
            position: "absolute",
            marginLeft: "3.8vw",
            display: "flex",
            flexDirection: "column",
            marginTop: "50vh",
          }}
        >
          <p className="textmobile"  style={{ width: "85vw", marginLeft: "5vw" }}>{resources.key1}</p>
          <p className="textmobile"  style={{ width: "85vw", marginLeft: "5vw" }}>{resources.key2}</p>
          <p className="textmobile" style={{ width: "85vw", marginLeft: "5vw" }}>
            {resources.key3}
          </p>
        </Box>
      </Box>
      <Box
      className="instabox"
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <p style={{color: "black",marginTop: "-0.01vh" }}>
          {resources.text}
        </p>
        <a
          style={{ color: "#bedab9", textDecoration: "none",marginLeft:"1vw" }}
          href={"https://www.instagram.com/theartisandubai"}
        >
          {resources.email1}
        </a>
      </Box>
      <Box
        sx={{
          backgroundColor: "#bedab9",
          textAlign: "center",
          width: "100vw",
          height: "10vh",
          position: "absolute",
          marginTop: "74.5vh",
        }}
      >
        <p className="textmobile" style={{ marginTop: "1vh" }}>
          {resources.hours1}
        </p>
        <p className="textmobile" style={{ marginTop: "-1vh" }}>
          {resources.hours2}
        </p>
        <p className="textmobile" style={{ marginTop: "-1vh" }}>
          {resources.hours3}
        </p>
      </Box>
      <Box
        sx={{
          backgroundColor: "#bedab9",
          textAlign: "center",
          width: "50vw",
          height: "10vh",
          position: "absolute",
          marginTop: "86vh",
        }}
      >
        <p className="textmobile" style={{ marginTop: "1vh" }}>
          {resources.address}
        </p>
        <p className="textmobile" style={{ marginTop: "-1vh" }}>
          {resources.address1}
        </p>
      </Box>
      <Box
        sx={{
          backgroundColor: "#bedab9",
          textAlign: "center",
          width: "50vw",
          height: "10vh",
          position: "absolute",
          marginTop: "86vh",
          marginLeft: "50vw",
        }}
      >
        <p className="textmobile" style={{ marginTop: "1vh",marginLeft:'1vw' }}>
          {resources.reservation}
        </p>
        <Box style={{ marginTop: "1vh",display:"flex",flexDirection:"column", }}>
          <a
            className="ahref"
            style={{ color: "black",marginLeft:'-1vw' }}
            href={`tel:${resources.mobile}`}
          >
            {resources.mobile}
          </a>
          <a
            className="ahref"
            style={{ color: "black",marginTop:"1vh",marginLeft:'1vw' }}
            href={`mailto:${resources.email1}`}
          >
            {resources.email}
          </a>
        </Box>
      </Box>
      <Button
        className="aahref"
        href="https://widget.reserveout.com/en/rowidget?key=zyiHvuKgJSHhKrxwi&vi=4070001"
        sx={{
          backgroundColor: "#bedab9",
          width: "30vw",
          height: "4vh",
          position: "absolute",
          marginLeft: "36vw",
          marginTop: "43vh",
          color: "black",
          borderRadius: "8px",
        }}
      >
        Book Now
      </Button>
    </div>
  );
}
