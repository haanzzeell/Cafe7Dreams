import { useContext, createContext, useState } from "react";
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import foodImage from "./images/home.jpg";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { AutoComplete } from "antd";

const styles = makeStyles((theme) => ({}));
const themes = {
  light: {
    background: "#E8DFD8",
    color: "#F8F8FF",
    backgroundSize: "100%",
  },
  dark: {
    background: "#c7a68f",
    color: "#330852",
    backgroundSize: "100%",
  },
};
const ThemeContext = createContext();

export default function Header() {
  const classes = styles();

  const [valueTheme, setValueTheme] = useState(themes.light);
  const theme = useContext(ThemeContext);
  return (
    <body>
      <ThemeContext.Provider value={valueTheme}>
        <div
          style={{
            backgroundColor: valueTheme.background,
            margin: "auto",
          }}
        >
          <marquee
            style={{ height: "30px", fontWeight: "bold", color: "#FFFAFA" }}
            bgcolor="#523A28"
            align="center"
            direction="left"
            scrollamount="10"
          >
            {" "}
            Annyeong Chingu ^_^ Selamat datang di Cafe 7 Dream
          </marquee>
          <button
            style={{ backgroundColor: "#201710" }}
            className="button"
            onClick={() =>
              setValueTheme(
                valueTheme === themes.light ? themes.dark : themes.light
              )
            }
          >
            <FontAwesomeIcon icon={faHome} style={{ color: "#E8DFD8" }} />
          </button>

          <center>
            <div className="judul">
              <h3 style={{ fontFamily: "Fantasy" }}>Cafe 7 Dream</h3>
              <div className="gambar">
                <center>
                  <Link to="/home">
                    <img
                      src={foodImage}
                      style={{
                        resizeMode: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                  </Link>
                </center>
              </div>
            </div>
          </center>
        </div>
      </ThemeContext.Provider>
    </body>
  );
}
