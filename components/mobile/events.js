import { useContext } from "react";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import UserContext from "../UserContext";

export default function Events({ data: { resources, events } }) {
  const server = useContext(UserContext);

  const SLIDE_COUNT = 3;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div>
      <Box sx={{ width: "100%", height: "70vh", position: "absolute" }}>
        <img
          src={server.context + resources.img_bg.src}
          style={{ position: "absolute", width: "100%", height: "70vh" }}
          alt="events bg image"
        />
        <Box
          className="boxmobile"
          sx={{
            width: "100%",
            height: "40vh",
            position: "absolute",
            marginTop: "30vh",
          }}
        />
        {/* <Box sx={{ backgroundColor: "#bedab9", width: "100%", height: "20vh", position: "absolute", marginTop: "70vh" }} /> */}
        <Box
          sx={{
            color: "white",
            textAlign: "center",
            position: "absolute",
            marginLeft: "3.8vw",
            display: "flex",
            flexDirection: "column",
            marginTop: "30vh",
          }}
        >
          <p
          className="textmobile"
            style={{
              width: "70%",
              marginLeft: "3.5vw",
              marginTop: "-0.3vh",
            }}
          ></p>
          <p
          className="textmobile"
            style={{
              width: "87%",
              marginLeft: "1.7vw",
              marginTop: "1vh",
            }}
          >
            {resources.key1}
          </p>
          <p
          className="textmobile"
            style={{
              width: "87%",
              marginLeft: "1.7vw",
              marginTop: "-0.3vh",
            }}
          >
            {resources.key2}
          </p>
          <p
          className="textmobile"
            style={{
              width: "87%",
              marginLeft: "1.7vw",
              marginTop: "-0.3vh",
            }}
          >
            {resources.key3}
          </p>
          <p
          className="textmobile"
            style={{
              width: "85%",
              marginLeft: "2vw",
              marginTop: "-0.3vh",
            }}
          >
            {resources.key4}
          </p>
          <p
          className="textmobile"
            style={{
              width: "87%",
              marginLeft: "1.7vw",
              marginTop: "-0.3vh",
            }}
          >
            {resources.key5}
          </p>
          <p
          className="textmobile"
            style={{
              width: "87%",
              marginLeft: "1.7vw",
              marginTop: "-0.3vh",
            }}
          >
            {resources.key6}
          </p>
          <p
          className="textmobile"
            style={{
              width: "87%",
              marginLeft: "1.7vw",
              marginTop: "-0.3vh",
            }}
          >
            {resources.key7}
          </p>
          <a
          
          className="ahref"
            style={{
              width: "87%",
              marginLeft: "1.7vw",
              marginTop: "-0.5vh",
            }}
            href={`mailto:${resources.key8}`}
            target="_blank"
            rel="noreferrer"
          >
            {resources.key8}
          </a>
        </Box>
        <Swiper
          style={{ marginTop: "70vh", position: "absolute" }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
              sx={{
                color: "black",
                width: "100%",
                position: "absolute",
                marginLeft: "15vw",
                marginTop: "-80px",
              }}
            >
              <p className="textmobile" style={{ position: "absolute" }}>
                {resources.key23}
              </p>
              <p
              className="textmobile"
                style={{
                  position: "absolute",
                  marginTop: "8vh",
                }}
              >
                {resources.key24}
              </p>
              <p
              className="textmobile"
                style={{
                  position: "absolute",
                  marginTop: "10vh",
                }}
              >
                {resources.key25}
              </p>
            </Box>
            <img
              src={server.context + resources.img_bg3.src}
              style={{
                position: "absolute",
                width: "30vw",
                height: "50vh",
                marginLeft: "25.6vw",
                marginTop: "1vh",
              }}
              alt="events first image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                color: "black",
                width: "100%",
                position: "absolute",
                marginLeft: "10vw",
                marginTop: "-120px",
              }}
            >
              <p className="textmobile" style={{ position: "absolute"}}>
                {resources.key9}
              </p>
              <p
              className="textmobile"
                style={{
                  position: "absolute",
                  marginTop: "2vh",
                }}
              >
                {resources.key10}
              </p>
              <p
              className="textmobile"
                style={{
                  position: "absolute",
                  marginTop: "4vh",
                }}
              >
                {resources.key11}
              </p>
              <p
              className="textmobile"
                style={{
                  position: "absolute",
                  marginTop: "6vh",
                }}
              >
                {resources.key12}
              </p>
              <p
              className="textmobile"
                style={{
                  position: "absolute",
                  marginTop: "8vh",
                }}
              >
                {resources.key13}
              </p>
              <p
              className="textmobile"
                style={{
                  position: "absolute",
                  marginTop: "10vh",
                }}
              >
                {resources.key14}
              </p>
              <p
              className="textmobile"
                style={{
                  position: "absolute",
                  marginTop: "12vh",
                }}
              >
                {resources.key15}
              </p>
              <p
              className="textmobile"
                style={{
                  position: "absolute",
                  marginTop: "14vh",
                }}
              >
                {resources.key16}
              </p>
              <p
            className="textmobile"
            style={{
              position: "absolute",
              marginTop: "16vh",
            }}
          >
            {resources.key17}
          </p>
          <p
            className="textmobile"
            style={{
              position: "absolute",
              marginTop: "18vh",
            }}
          >
            {resources.key18}
          </p>
          <p
            className="textmobile"
            style={{
              position: "absolute",
              marginTop: "20vh",
            }}
          >
            {resources.key19}
          </p>
            </Box>
            <img
              src={server.context + resources.img_bg1.src}
              style={{
                width: "30vw",
                height: "50vh",
                marginLeft: "25.6vw",
                marginTop: "1vh",
              }}
              alt="events first image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                color: "black",
                width: "100%",
                position: "absolute",
                marginLeft: "10vw",
                marginTop: "-80px",
              }}
            >
              <p className="textmobile" style={{ position: "absolute"}}>
                {resources.key20}
              </p>
              <p
              className="textmobile"
                style={{
                  position: "absolute",
                  marginTop: "8vh",
                }}
              >
                {resources.key21}
              </p>
              <p
              className="textmobile"
                style={{
                  position: "absolute",
                  marginTop: "10vh",
                }}
              >
                {resources.key22}
              </p>
            </Box>
            <img
              src={server.context + resources.img_bg2.src}
              style={{
                position: "absolute",
                width: "30vw",
                height: "260.5px",
                marginLeft: "25.6vw",
                marginTop: "1vh",
              }}
              alt="events first image"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </div>
  );
}
