import "./Register.scss";
import Introduction from "../../components/Introduction/Introduction";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Register = () => {
  const [focusedElement, setFocusedElement] = useState("user");
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  // useEffect is called every time the location variable change (that is passed as second parameter with [location])
  useEffect(() => {
    const userContainer = document.getElementById("user-container");
    const emailContainer = document.getElementById("email-container");
    const passwordContainer = document.getElementById("password-container");

    // add events when clicking the div, it should add class 'add'
    userContainer.addEventListener("click", () => {
      userContainer.classList.add("active");
      setFocusedElement("user");
    });
    userContainer.addEventListener("blur", () => {
      userContainer.classList.remove("active");
    });

    // add events when clicking the div, it should add class 'add'
    emailContainer.addEventListener("click", () => {
      emailContainer.classList.add("active");
      setFocusedElement("email");
    });
    emailContainer.addEventListener("blur", () => {
      emailContainer.classList.remove("active");
    });

    // add events when clicking the div, it should add class 'add'
    passwordContainer.addEventListener("click", () => {
      passwordContainer.classList.add("active");
      setFocusedElement("password");
    });

    passwordContainer.addEventListener("blur", () => {
      passwordContainer.classList.remove("active");
    });

    window.matchMedia("(prefers-color-scheme: dark)").matches ? setTheme("dark") : setTheme("light")
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        const colorScheme = event.matches ? "dark" : "light";
        setTheme(colorScheme);
    });
  }, [location]);
  return (
    <div id="main-container">
      <Introduction
        titolo={"Registrati alla nostra piattaforma gratuitamente"}
        testo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velligula venenatis, vehicula velit id, aliquet nibh."}
      />
      <div className="flex box-container">
        <div className="flex col box-30 gap-4">
          <h1>Compila i seguenti campi</h1>
          <form className="flex col">
            <div className={"form-field flex gap " + (focusedElement === "user" ? "active" : "")} id="user-container">
              <img src={theme === "dark" ? "images/icons/user-negative.png" : "images/icons/user.png"} alt="user" />
              <input
                className={focusedElement === "user" ? "active" : ""}
                type="text"
                placeholder="Nome Cognome"
                id="user"
              />
            </div>
            <div className={"form-field flex gap " + (focusedElement === "email" ? "active" : " ")} id="email-container">
              <img src={theme === "dark" ? "images/icons/email-negative.png" : "images/icons/email.png"} alt="email" />
              <input
                className={focusedElement === "email" ? "active" : ""}
                id="email"
                type="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div
              className={"form-field flex gap " + (focusedElement === "password" ? "active" : " ")}
              id="password-container"
            >
              <img src={theme === "dark" ? "images/icons/password-negative.png" : "images/icons/password.png"} alt="psw" />
              <input
                className={focusedElement === "password" ? "active" : ""}
                id="password"
                type="password"
                placeholder="password"
              />
            </div>
          </form>
          <Link to="/"> { /*add here api register*/ }
            <button>Continua</button>
          </Link>
        </div>
        <div className="flex box-30">
          <img src="/images/place-holder-500.png" alt="register" />
        </div>
      </div>
    </div>
  );
};

export default Register;
