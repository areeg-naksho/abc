import Calendar from "./calender/calendar-contact";
import Box from "@mui/material/Box";
import React, { useContext,useState } from "react";
import Location from "./location";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import UserContext from "../UserContext";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Contact({ data: { resources } }) {
  const [openUploadAlert, setOpenUploadAlert] = useState(false);
  const server = useContext(UserContext);
  return (
    <div>
      <Box sx={{ width: "100%", height: "120vh", position: "absolute" }}>
        <img
          src={server.context + resources.img_bg.src}
          style={{ position: "absolute", width: "100%", height: "120%" }}
          alt="contact bg image"
        />
        <Box className="box" sx={{ width: "24vw", height: "120%" }} />
        <Box
          sx={{
            backgroundColor: "#bedab9",
            width: "40vw",
            height: "108%",
            position: "absolute",
            marginLeft: "43.8vw",
            marginTop: "12vh",
          }}
        />
        <img
          src={server.context + resources.img_1.src}
          style={{
            position: "absolute",
            width: "37.5vw",
            height: "40vh",
            marginLeft: "45.1vw",
            marginTop: "14vh",
          }}
          alt="contact image"
        />
        <Location />
        <Box>
          <TextField
            label="Name"
            variant="outlined"
            color="success"
            style={{
              position: "absolute",
              width: "37.5vw",
              backgroundColor: "white",
              marginLeft: "45.1vw",
              marginTop: "94vh",
              borderRadius: "6px",
            }}
          />
          <TextField
            label="Email address"
            variant="outlined"
            color="success"
            style={{
              backgroundColor: "white",
              position: "absolute",
              width: "37.5vw",
              marginLeft: "45.1vw",
              marginTop: "102vh",
              borderRadius: "6px",
            }}
          />
          <TextField
            label="Phone number"
            variant="outlined"
            color="success"
            style={{
              backgroundColor: "white",
              position: "absolute",
              width: "37.5vw",
              marginLeft: "45.1vw",
              marginTop: "110vh",
              borderRadius: "6px",
            }}
          />
          <TextField
            label="Type your message here"
            color="success"
            rows={4}
            multiline
            style={{
              backgroundColor: "white",
              position: "absolute",
              width: "37.5vw",
              marginLeft: "45.1vw",
              marginTop: "118vh",
              borderRadius: "6px",
            }}
          />
          <Snackbar
        open={openUploadAlert}
        autoHideDuration={6000}
        onClose={() => setOpenUploadAlert(false)}
      >
        <Alert
          onClose={() => setOpenUploadAlert(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Submited Successfully!
        </Alert>
      </Snackbar>
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              color: "white",
              position: "absolute",
              width: "37.5vw",
              height: "4vh",
              marginLeft: "45.1vw",
              marginTop: "136vh",
              borderRadius: "6px",
            }}
            onClick={() =>setOpenUploadAlert(true)}
          >
            Submit
          </Button>
        </Box>
        <Box
          sx={{
            color: "white",
            textAlign: "center",
            width: "23.75vw",
            position: "absolute",
            marginLeft: "3.8vw",
            display: "flex",
            flexDirection: "column",
            marginTop: "18vh",
          }}
        >
          <p style={{ fontSize: "15px" }}>{resources.key2}</p>
          <p
            style={{
              fontSize: "13px",
              width: "70%",
              marginLeft: "3.5vw",
              marginTop: "-0.5vh",
            }}
          >
            {resources.key3}
          </p>
          <p
            style={{
              fontSize: "15px",
              width: "53%",
              marginLeft: "5.5vw",
              marginTop: "2.5vh",
            }}
          >
            {resources.key4}
          </p>
          <a
            className="ahref"
            style={{ fontSize: "15px", marginTop: "-0.5vh" }}
            href={`tel:${resources.mobile}`}
            target="_blank"
            rel="noreferrer"
          >
            {resources.mobile}
          </a>
          <a
            style={{ color: "#bedab9", fontSize: "15px", marginTop: "2vh" }}
            href={`mailto:${resources.email}`}
            target="_blank"
            rel="noreferrer"
          >
            {resources.email}
          </a>
          <p style={{ fontSize: "15px", marginTop: "5vh" }}>{resources.key1}</p>
          <Calendar />
        </Box>
      </Box>
    </div>
  );
}
