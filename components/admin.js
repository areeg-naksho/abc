import {
  useEffect,
  useState,
  useRef,
  useReducer,
  Fragment,
  forwardRef,
  useContext,
} from "react";
import ImageEditor from "./ImageEditor";
import moment from "moment";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import UserContext from "../components/UserContext";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// prettier-ignore
const defaults = {
  "pdfs": {
    "aperitivo": "/pdf/TheArtisan_AperitivoMenu.pdf",
    "cocktail": "/pdf/TheArtisan_CocktailMenu.pdf",
    "wine": "/pdf/TheArtisan_WineMenu.pdf",
    "food": "/pdf/TheArtisan_FoodMenu.pdf",
    "dessert": "/pdf/TheArtisan_DessertMenu.pdf"
  },
  "resources": {
    "head": {
      "img_bg": { "src": "/img/artisan-logo.png", "width": 1320, "height": 990 }
    },
    "bar": {
      "key1": "MEET OUR MIXOLOGIST",
      "key2": "A perfect pour is waiting for you! ",
      "key3": "Offering a range of fresh and aromatic cocktails, Italian Spritz and special Negroni blends,  The Artisan is your go-to Aperitivo spot in the heart of Dubai.",
      "key4": "Join us and meet our mixologist for an evening true to Italian heritage. Salute!",
      "key5": "DOWNLOAD PDF MENU",
      "cocktailsMenu": "HANDCRAFTED COCKTAILS",
      "aperitivoMenu": "APERITIVO MENU LOW IN ALCOHOL HIGH IN SPIRIT",
      "wineMenu": "WINE MENU",
      "img_bg": { "src": "/img/bar-bg2.png", "width": 1320, "height": 990 },
      "img_1": { "src": "/img/bar-1.png", "width": 392, "height": 314 },
      "img_2": { "src": "/img/bar-2.png", "width": 392, "height": 314 },
      "img_3": { "src": "/img/bar-3.png", "width": 392, "height": 314 },
      "m_img_bg": { "src": "/m-img/bar-bg.png", "width": 751, "height": 1069 },
      "m_img_1": { "src": "/m-img/bar-1.png", "width": 348.21, "height": 235.65 },
      "m_img_2": { "src": "/m-img/bar-2.png", "width": 348.21, "height": 235.65 }
    },
    "contact": {
      "key1": "RESERVATIONS",
      "key2": "ADDRESS",
      "key3": "Waldorf Astoria, DIFC, Dubai, UAE",
      "key4": "RESERVATION NUMBER",
      "mobile": "+971 04 338 8133",
      "email": "reservations@theartisan.ae",
      "img_bg": { "src": "/img/contact-bg.png", "width": 1320, "height": 990 },
      "img_1": { "src": "/img/contact-1.png", "width": 414.47, "height": 262.87 },
      "m_img_bg": { "src": "/m-img/contact-bg.png", "width": 751, "height": 1335 },
      "m_img_map": { "src": "/m-img/contact-map.png", "width": 700, "height": 215 }
    },
    "events": {
      "key1": "ARTISAN EVENTS",
      "key2": "A calendar of events and experiences at The Artisan that brings to life the values of the Italian eatery, showcasing art, food and culture.",
      "key3": "With themed concept dinners, music and bespoke special offerings, The Artisan thrives to create memorable experiences. This dinner series aims to showcase Italian crafts and engage with the local community.",
      "key4": "Covering culture, art, architecture, design, music, gastronomy and more, each dinner will make you dream of Italy's most outstanding regions.",
      "key5": "Our monthly dinner series will include a Bar Masterclass followed by a dinner and drinks from our special monthly menu.",
      "key6": "Looking for a space for your private or corporate events? The Artisan is the location for you!",
      "key7": "FOR MORE INFO:",
      "key8": "email@theartisan.ae",
      "key9":"THE DINNER SERIES WITH CHEF LUCA",
      "key10":"May 2021",
      "key11":"A Feast for the Senses",
      "key12":"The Artisan feast for the senses private dining is",
      "key13":"all about creating memorable experiences, for",
      "key14":" what you see, what you can smell, hear and",
      "key15":"taste. Artisan is not traditional, but it utilizes",
      "key16":"traditional cooking methods.",
      "key17":"July 2021",
      "key18":"Septamber 2021",
      "key19":"Novamber 2021",
      "key20":"NEGRONI COCKTAIL MASTERCLASS",
      "key21":"Weekly classes available for groups of 4",
      "key22":"Cost 250 AED per person",
      "key23":"TRUFFLE SEASON",
      "key24":"4 course dinner paired with fine wine",
      "key25":"Cost 550 AED per person",
      "img_bg": { "src": "/img/events-bg.png", "width": 1320, "height": 990 },
      "m_img_bg": { "src": "/m-img/events-bg.png", "width": 751, "height": 1069 },
      "img_bg1": { "src": "/img/events-1.png", "width": 178, "height": 229 },
      "img_bg2":{ "src": "/img/events-2.png", "width": 178, "height": 229 },
      "img_bg3":{ "src": "/img/events-3.png", "width": 178, "height": 229 }
    },
    "gallery": {
      "key1": "A CASA , WITH RICHARD GINORI",
      "key2": "Transform your dining table with Richard Ginori 1735:",
      "key3": "With a vast history of craftsmanship spanning over 280 years, Richard Ginori dinnerware is an expression of excellence and is one of Italy's leading manufacturers of high-quality porcelain tableware.",
      "key4": "Through a carefully curated tablescape, The Artisan will showcase the timeless beauty and elegance that characterises the Ginori brand. The bespoke menu created by The Artisan culinary team for each event will be presented on Ginori plates in a seamless coming together of the two houses. ",
      "img_bg": { "src": "/img/gallery-bg.png", "width": 1320, "height": 990 },
      "img_1": { "src": "/img/gallery-1.png", "width": 389, "height": 260 },
      "img_2": { "src": "/img/gallery-2.png", "width": 389, "height": 260 },
      "img_3": { "src": "/img/gallery-3.png", "width": 389, "height": 260 },
      "m_img_bg": { "src": "/m-img/gallery-bg.png", "width": 751, "height": 1069 },
      "m_img_1": { "src": "/m-img/gallery-1.png", "width": 348.21, "height": 235.65 },
      "m_img_2": { "src": "/m-img/gallery-2.png", "width": 348.21, "height": 235.65 }
    },
    "gifting": {
      "key1": "GIFTING",
      "key2": "Enjoy a selection of unique, festive and exclusive gifts for private and corporate clients. Gifting options range from fresh olive oil, balsamic and chocolates to jams, and Panettone.",
      "key3": "We would be more than happy to assist with your request, do not hesitate to send us an email at",
      "email": "reservations@theartisan.ae",
      "key5": "to inquire or place your order.",
      "img_bg": { "src": "/img/gift-bg.png", "width": 1320, "height": 990 },
      "img_1": { "src": "/img/gift-1.png", "width": 226.71, "height": 258.69 },
      "img_2": { "src": "/img/gift-2.png", "width": 226.71, "height": 258.69 },
      "img_3": { "src": "/img/gift-3.png", "width": 226.71, "height": 258.69 },
      "img_4": { "src": "/img/gift-4.png", "width": 226.71, "height": 258.69 },
      "img_5": { "src": "/img/gift-5.png", "width": 226.71, "height": 258.69 },
      "m_img_bg": { "src": "/m-img/gift-bg.png", "width": 751, "height": 1069 },
      "m_img_1": { "src": "/m-img/gift-1.png", "width": 225, "height": 235.65 },
      "m_img_2": { "src": "/m-img/gift-2.png", "width": 225, "height": 235.65 },
      "m_img_3": { "src": "/m-img/gift-3.png", "width": 225, "height": 235.65 }
    },
    "index": {
      "key1": "A unique hidden gem with mouthwatering dishes, impeccable service in an art deco setup.",
      "key2": "Pairing Italian culinary prestige with the finest ingredients, The Artisan translates Italy’s heritage and beauty. The menu takes its cues from the rolling fields of Tuscany, the eternal hills of Rome, the sparkling Amalfi coast and the ruins of Sicily to showcase Italy’s magic, history and passion.",
      "key3": "Taste Italian cuisine, taste Italy.",
      "key4": "RESERVATIONS",
      "hours1": "OPENING HOURS",
      "hours2": "Saturday to Wednesday from 12:00 PM to 12:00 AM",
      "hours3": "Thursday to Friday from 12:00 PM to 12:00 AM",
      "address": "ADDRESS ",
      "address1": "Waldorf Astoria, DIFC, Dubai, UAE ",
      "reservation": "RESERVATION NUMBER",
      "mobile": "+971 04 338 8133",
      "email": "reservations@theartisan.ae",
      "text": "FOLLOW US",
      "email1": "@theartisandubai",
      "img_bg": { "src": "/img/landing-bg.png", "width": 1320, "height": 990 },
      "img_1": { "src": "/img/landing-1.png", "width": 400, "height": 267 },
      "img_2": { "src": "/img/landing-2.png", "width": 400, "height": 267 },
      "img_3": { "src": "/img/landing-3.png", "width": 400, "height": 267 },
      "img_4": { "src": "/img/landing-4.png", "width": 400, "height": 267 },
      "img_5": { "src": "/img/landing-5.png", "width": 400, "height": 267 },
      "img_6": { "src": "/img/landing-6.png", "width": 400, "height": 267 },
      "m_img_bg": { "src": "/m-img/landing-bg.png", "width": 751, "height": 1069 }
    },
    "pizza": {
      "key1": "THE ARTISAN PIZZA",
      "key2": "In pizza we crust!",
      "key3": "We deliver our woodfire homemade pizzas across Dubai; order online for an extraordinary culinary experience from the comfort of your home.",
      "key4": "The tastiest pizza. Don't miss out!",
      "foodMenu": "DOWNLOAD MENU",
      "img_bg": { "src": "/img/pizza-bg.png", "width": 1320, "height": 990 },
      "img_1": { "src": "/img/pizza-1.png", "width": 392, "height": 314 },
      "img_2": { "src": "/img/pizza-2.png", "width": 392, "height": 314 },
      "img_3": { "src": "/img/pizza-3.png", "width": 392, "height": 314 },
      "m_img_bg": { "src": "/m-img/pizza-bg.png", "width": 751, "height": 1069 },
      "m_img_1": { "src": "/m-img/pizza-1.png", "width": 348.21, "height": 235.65 },
      "m_img_2": { "src": "/m-img/pizza-2.png", "width": 348.21, "height": 235.65 }
    },
    "resto": {
      "key1": "ABOUT THE ARTISAN",
      "key2": "Setting a new standard of Italian cuisine in the Middle East",
      "key3": "The Artisan is everything that an authentic Italian restaurant should be — going beyond food to bring guests a true Italian experience.",
      "key4": "The menu boasts a mix of loved classics made with ingredients sourced directly from the best artisans in Italy.",
      "key5": "Selection of mouth watering dishes, exceptional Italian wines, and exquisite wood fire pizzas, are what makes your experience at The Artisan remarkable as we take you on a gastronomic journey to discover the true taste of Italy.",
      "key6": "Located in the Waldorf Astoria Hotel in  buzzing financial district of Dubai, we welcome you daily for lunch and dinner in our restaurant and every evening at our bar for Aperitivo.",
      "key7": "Celebrate your events in style, dine in a relaxed ambiance.",
      "key8": "Our highly skilled and friendly team will treat you to Italian hospitality, giving you a taste of La Dolce Vita.",
      "key9": "The Artisan is YOUR Italian destination.",
      "foodMenu": "A LA CARTE MENU",
      "desertMenu": "DESSERT MENU",
      "img_bg": { "src": "/img/resto-bg.png", "width": 1320, "height": 990 },
      "img_1": { "src": "/img/resto-1.png", "width": 392, "height": 314 },
      "img_2": { "src": "/img/resto-2.png", "width": 392, "height": 314 },
      "img_3": { "src": "/img/resto-3.png", "width": 392, "height": 314 },
      "m_img_bg": { "src": "/m-img/resto-bg.png", "width": 751, "height": 1069 },
      "m_img_1": { "src": "/m-img/resto-1.png", "width": 348.21, "height": 235.65 },
      "m_img_2": { "src": "/m-img/resto-2.png", "width": 348.21, "height": 235.65 }
    }
  },
  "events": [
    {
      "title": "THE DINNER SERIES WITH CHEF LUCA",
      "date": "AUGUST 2021",
      "description": "A Feast for the Senses The Artisan feast for the senses private dining is all about creating memorable experiences, for what you see, what you can smell, hear and taste. Artisan is not traditional, but it utilizes traditional cooking methods.",
      "img": {"src": "/img/events-1.png", "width": 178, "height": 229}
    },
    {
      "title": "NEGRONI COCKTAIL MASTERCLASS",
      "date": "AUGUST 2021",
      "description": "Weekly classes available for groups of 4,Cost 250 AED per person",
      "img": {"src": "/img/events-2.png", "width": 178, "height": 229}
    },
    {
      "title": "TRUFFLE SEASON",
      "date": "SEPTEMBER 2021",
      "description": "4 course dinner paired with fine wine, Cost 550 AED per person",
      "img": {"src": "/img/events-3.png", "width": 178, "height": 229}
    }
  ]
};

const SECTION_TITLES = {
  index: "Landing Page",
  bar: "Bar",
  resto: "Restaurant",
  pizza: "Pizza A Casa",
  gifting: "Corporate Gifting",
  gallery: "Gallery",
  events: "Events",
  contact: "Contact Us",
};

const PDF_TITLES = {
  food: "Food Menu",
  dessert: "Dessert Menu",
  aperitivo: "Aperitivo Menu",
  cocktail: "Cocktail Menu",
  wine: "Wine Menu",
};

const ACTION_REPLACE = "ACTION_REPLACE";
const ACTION_UPDATE_TEXT = "ACTION_UPDATE_TEXT";
const ACTION_UPDATE_EVENT = "ACTION_UPDATE_EVENT";

function datePickerToDataDate(date) {
  return moment(date).format("MMMM YYYY").toUpperCase();
}

function dataDateToDatePicker(date) {
  return moment(date, "MMMM YYYY").format("YYYY-MM");
}

export default function Page({ logout }) {
  const dataChangingReducer = (prev, { action, payload }) => {
    const _new = JSON.parse(JSON.stringify(prev));
    switch (action) {
      case ACTION_REPLACE:
        return payload;
      case ACTION_UPDATE_TEXT:
        _new.resources[payload.section][payload.key] = payload.value;
        return _new;
      case ACTION_UPDATE_EVENT:
        _new.events[payload.event][payload.key] = payload.value;
        return _new;
      default:
        return prev;
    }
  };

  const [data, changeData] = useReducer(dataChangingReducer, defaults);
  const server = useContext(UserContext);
  const [files, setFiles] = useState({});
  const [images, setImages] = useState({});
  const [visibleSection, setVisibleSection] = useState();
  const [openAddUserModal, setOpenAddUserModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [openUploadAlert, setOpenUploadAlert] = useState(false);

  const getData = async () => {
    const req = await fetch(server.context + "/data");
    const response = await req.json();
    changeData({ action: ACTION_REPLACE, payload: response.data });
  };

  const updateVisibleSection = (section) => {
    if (visibleSection === section) {
      setVisibleSection(null);
    } else {
      setVisibleSection(section);
    }
  };
  const Refs = useRef({});

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let index = Object.keys(SECTION_TITLES).indexOf(visibleSection);
    if (index + 1) {
      window.scrollTo(0, 51 + index * 51);
    } else {
      window.scrollTo(0, 0);
    }
  }, [visibleSection]);

  const save = async () => {
    const form = new FormData();
    form.append("data", JSON.stringify(data));

    for (let file of Object.keys(files)) {
      form.append(file, files[file][0]);
    }

    for (let image of Object.keys(images)) {
      const editor = Refs.current[image];
      const blob = await new Promise((resolve) =>
        editor.getCanvas().toBlob(resolve)
      );
      form.append(images[image], blob);
    }

    fetch(server.context + "/updateData", { method: "POST", body: form })
      .then((res) => res.json())
      .then((res) => window.location.reload(true))
      .then(() => {
        setOpenUploadAlert(true);
      })
      .catch((err) => console.error(err));
  };

  const validateAddUser = (email, password, confirm) => {
    const message = "";
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email || !password || !confirm) {
      message = "Missing Required Fields";
      return message;
    } else if (!regEmail.test(email)) {
      message = "Email is not valid";
      return message;
    } else if (password !== confirm) {
      message = "The password and confirmation password do not match";
      return message;
    } else if (password.length < 6) {
      message = "The password is too short";
      return message;
    } else return (message = "");
  };

  const saveUser = async () => {
    const validation = validateAddUser(email, password, confirmPassword);
    if (validation === "") {
      await fetch(server.context + "/addUser", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then(() => {
          setOpenAddUserModal(false);
          setOpenAlert(true);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else setValidationMessage(validation);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <div>
      <div
        className="header"
        style={{
          marginBottom: "30px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={logout}
          style={{ borderRadius: "10px", marginLeft: "80%" }}
        >
          Logout
        </Button>
      </div>
      <section
        id="pdfs"
        style={{
          marginTop: "50px",
        }}
      >
        <label
          className="section-label"
          onClick={() => updateVisibleSection("pdfs")}
        >
          PDFs
        </label>
        <div style={{ display: visibleSection === "pdfs" ? "" : "none" }}>
          {Object.keys(PDF_TITLES).map((menu) => {
            let newPdfName =
              files[data.pdfs[menu]] &&
              files[data.pdfs[menu]][0] &&
              files[data.pdfs[menu]][0].name
                ? files[data.pdfs[menu]][0].name
                : null;

            return (
              <div className="pdf" key={menu}>
                <a
                  className="pdf-link"
                  href={server.context + data.pdfs[menu]}
                  alt={PDF_TITLES[menu]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/link-icon.svg" alt="#" />
                  {PDF_TITLES[menu]}
                </a>
                <input
                  type="file"
                  accept="application/pdf"
                  name={data.pdfs[menu]}
                  multiple={false}
                  style={{ display: "none" }}
                  ref={(el) => (Refs.current["pdfs-" + menu] = el)}
                  onChange={(e) =>
                    setFiles({ ...files, [e.target.name]: e.target.files })
                  }
                />
                <Button
                  variant="contained"
                  color="success"
                  style={{ borderRadius: "20px" }}
                  onClick={() => Refs.current["pdfs-" + menu].click()}
                >
                  Add/Change PDF
                </Button>
                {newPdfName ? (
                  <Fragment>
                    <Button
                      variant="contained"
                      color="success"
                      style={{ borderRadius: "20px" }}
                      onClick={(e) =>
                        setFiles({ ...files, [data.pdfs[menu]]: "" })
                      }
                    >
                      Clear
                    </Button>
                    <label>{newPdfName}</label>
                  </Fragment>
                ) : (
                  <span
                    style={{ display: "inline-block", minWidth: "5rem" }}
                  ></span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {Object.keys(SECTION_TITLES).map((section) => (
        <section key={section} id={section}>
          <label
            className="section-label"
            onClick={() => updateVisibleSection(section)}
          >
            {SECTION_TITLES[section]}
          </label>
          <div style={{ display: visibleSection === section ? "" : "none" }}>
            {Object.keys(data.resources[section])
              .filter(
                (res) => !res.startsWith("img") && !res.startsWith("m_img")
              )
              .map((res) => (
                <div key={res}>
                  <label>
                    {res && res.replaceAll
                      ? res.replaceAll("key", "text ")
                      : ""}
                  </label>
                  <textarea
                    name={res}
                    cols="100"
                    rows="3"
                    onChange={(e) =>
                      changeData({
                        action: ACTION_UPDATE_TEXT,
                        payload: { section, key: res, value: e.target.value },
                      })
                    }
                    value={data.resources[section][res]}
                  />
                </div>
              ))}
            {Object.keys(data.resources[section])
              .filter((res) => res.startsWith("img") || res.startsWith("m_img"))
              .filter((res) => res !== "m_img_map")
              .map((res) => (
                <ImageEditor
                  key={section + res}
                  ref={(el) => (Refs.current[section + res] = el)}
                  image={server.context + data.resources[section][res].src}
                  width={data.resources[section][res].width}
                  height={data.resources[section][res].height}
                  onChange={() =>
                    setImages({
                      ...images,
                      [section + res]: data.resources[section][res].src,
                    })
                  }
                />
              ))}
            {section === "events" ? (
              <table style={{ margin: "auto", tableLayout: "fixed" }}>
                {data.events?.map((event, i) => (
                  <Fragment key={i}>
                    <tbody>
                      {" "}
                      <tr style={{ height: 10 }}>
                        <th>Title</th>
                        <td>
                          <input
                            type="text"
                            style={{ width: "100%" }}
                            onChange={(e) =>
                              changeData({
                                action: ACTION_UPDATE_EVENT,
                                payload: {
                                  event: i,
                                  key: "title",
                                  value: e.target.value,
                                },
                              })
                            }
                            value={event.title}
                          />
                        </td>
                        <td rowSpan={3}>
                          <ImageEditor
                            ref={(el) => (Refs.current["events-img-" + i] = el)}
                            image={server.context + event.img.src}
                            width={event.img.width}
                            height={event.img.height}
                            onChange={() =>
                              setImages({
                                ...images,
                                ["events-img-" + i]: event.img.src,
                              })
                            }
                          />
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      {" "}
                      <tr style={{ height: 10 }}>
                        <th>Date</th>
                        <td>
                          <input
                            type="month"
                            value={dataDateToDatePicker(event.date)}
                            onChange={(e) =>
                              changeData({
                                action: ACTION_UPDATE_EVENT,
                                payload: {
                                  event: i,
                                  key: "date",
                                  value: datePickerToDataDate(e.target.value),
                                },
                              })
                            }
                          />
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <th>Description</th>
                        <td>
                          <textarea
                            cols="70"
                            rows="5"
                            onChange={(e) =>
                              changeData({
                                action: ACTION_UPDATE_EVENT,
                                payload: {
                                  event: i,
                                  key: "description",
                                  value: e.target.value,
                                },
                              })
                            }
                            value={event.description}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Fragment>
                ))}
              </table>
            ) : null}
          </div>
        </section>
      ))}

      <div
        style={{
          textAlign: "center",
          width: "100%",
          height: "30px",
        }}
      >
        <Button
          variant="contained"
          endIcon={<SaveIcon />}
          color="success"
          style={{ marginTop: "10px", borderRadius: "20px" }}
          onClick={save}
        >
          Upload / Save
        </Button>
        <Button
          variant="contained"
          endIcon={<SaveIcon />}
          color="success"
          style={{
            marginTop: "10px",
            marginLeft: "10px",
            borderRadius: "20px",
          }}
          onClick={() => setOpenAddUserModal(true)}
        >
          Add new admin
        </Button>
      </div>
      <div>
        <Dialog
          open={openAddUserModal}
          onClose={() => {
            setOpenAddUserModal(false);
          }}
        >
          <DialogTitle>Add new User</DialogTitle>
          <DialogContentText
            sx={{ justifyContent: "center", marginLeft: "20px", color: "red" }}
          >
            {validationMessage}
          </DialogContentText>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="newUserEmail"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="dense"
              id="newUserPassword"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
              helperText={password.length <= 6 ? "Password Too Short" : ""}
            />

            <TextField
              margin="dense"
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => setConfirmPassword(e.target.value)}
              helperText={
                confirmPassword === password ? "" : " Password not match"
              }
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={() => setOpenAddUserModal(false)}>Cancel</Button>
            <Button onClick={() => saveUser()}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>

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
          Data uploaded Successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          User Added Successfully!
        </Alert>
      </Snackbar>

      <style jsx>{`
        .header {
          display: flex;
          width: 100%;
          background-color: #bedab9;
          align-items: center;
          justify-content: center;
        }
        .section-label {
          cursor: pointer;
          border: 1px solid #bedab9;
          line-height: 50px;
          font-weight: 700;
          font-size: 32px;
          margin-top: 10px;
          width: 100%;
          color: #bedab9;
          padding-top: 17px;
        }
        .pdf-link {
          display: inline-flex;
          min-width: 13rem;
          text-decoration: underline;
          text-underline-offset: 3px;
          font-size: 20px;
          color: #bedab9;
        }
        .pdf-link img {
          width: 20px;
          margin-right: 5px;
        }

        label {
          display: block;
          text-align: center;
          font-size: 24px;
          min-width: 100px;
          margin-top: 25px;
          margin-bottom: 10px;
          color: #bedab9;
        }
        div.pdf {
          width: fit-content;
        }
        div.pdf,
        textarea {
          display: block;
          margin: auto;
          border-color: #bedab9;
        }
        th {
          text-align: right;
        }
        th,
        td {
          vertical-align: top;
        }
      `}</style>
    </div>
  );
}
