import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect,useState,useContext } from "react";

export default function Header({ current }) {
  function changeBg() {
    var navbar = document.getElementById("myTopnav");
    var scrollValue = window.scrollY;
    if (scrollValue < 150) {
      navbar.classList.remove("bgColor");
    } else {
      navbar.classList.add("bgColor");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeBg);
  });
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function closenavbar() {
    var x = document.getElementById("myTopnav");
    if (x.className != "topnav") {
      x.className = "topnav";
    } else {
    }
  }
  const getClassName = (path) => (current === path ? "current" : "link");

  return (
    <div
      className="head"
      id="header"
      style={{
        color: "white",
        width: "100%",
        position: "fixed",
        zIndex: "200",
        fontSize: "1.3vw",
        marginTop: "-0.7vh",
      }}
    >
      <div className="topnav" id="myTopnav">
        <img
          className="logo"
          src="img\artisan-logo.png"
          style={{ position: "absolute" }}
          alt="artisan logo"
        />
        <Link href="/">
          <a
            className={getClassName("/") + " navbar-item-home"}
            onClick={closenavbar}
          >
            Home
          </a>
        </Link>
        <Link href="/bar">
          <a
            className={getClassName("/bar") + " navbar-items"}
            onClick={closenavbar}
          >
            Bar
          </a>
        </Link>
        <Link href="/resto">
          <a
            className={getClassName("/resto") + " navbar-items"}
            onClick={closenavbar}
          >
            Restaurant
          </a>
        </Link>
        <Link href="/pizza">
          <a
            className={getClassName("/pizza") + " navbar-items"}
            onClick={closenavbar}
          >
            Casa Pizza
          </a>
        </Link>
        <Link href="/gifting">
          <a
            className={getClassName("/gifting") + " navbar-items"}
            onClick={closenavbar}
          >
            Corporate Gifting
          </a>
        </Link>
        <Link href="/gallery">
          <a
            className={getClassName("/gallery") + " navbar-items"}
            onClick={closenavbar}
          >
            Gallery
          </a>
        </Link>
        <Link href="/events">
          <a
            className={getClassName("/events") + " navbar-items"}
            onClick={closenavbar}
          >
            Events
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={getClassName("/contact") + " navbar-items"}
            onClick={closenavbar}
          >
            Contact
          </a>
        </Link>
        <div
          className="social"
          style={{  marginTop: "-1.5%" }}
        >
          <a
            className="navbar-item-facebook"
            href="https://www.facebook.com/pg/theartisandubai"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="img\fbw.png"
              style={{ width: "9.5px", height: "20px" }}
              alt="facebook"
            />
          </a>
          <a
            className="navbar-item-instagram"
            href="https://www.instagram.com/theartisandubai"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="img\instaw.png"
              style={{ width: "20px", height: "20px" }}
              alt="instagram"
            />
          </a>
          <a
            className="navbar-item-whatsapp"
            href="https://wa.me/+971585798323?text=I%20would%20like%20to%20order%20please"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="img\waw.png"
              style={{ width: "20px", height: "20px" }}
              alt="Whatsapp"
            />
          </a>
        </div>
        <div className="nav-icon">
          <div
            //   href='javascript:void(0);'
            className="icon"
            onClick={() => {
              myFunction();
            }}
          >
            <i className="fa fa-bars">
              <MenuIcon />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
