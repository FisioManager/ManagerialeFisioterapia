import "./ContactUs.scss";
import Introduction from "./../../components/Introduction/Introduction";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ContactUs = () => {
  const [focusedElement, setFocusedElement] = useState("user");
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  const handleFocus = (event, isBlur = false) => {
    if (event.target.id === "user") {
      setFocusedElement(isBlur ? event.target.id : "user");
    } else if (event.target.id === "email") {
      setFocusedElement(isBlur ? event.target.id : "email");
    } else if (event.target.id === "message") {
      setFocusedElement(isBlur ? event.target.id : "message");
    }
  };

  useEffect(() => {
    const userContainer = document.getElementById("user-container");
    const emailContainer = document.getElementById("email-container");
    const messageContainer = document.getElementById("message-container");

    emailContainer.addEventListener("click", () => {
      emailContainer.classList.add("active");
      setFocusedElement("email");
    });

    emailContainer.addEventListener("blur", () => {
      emailContainer.classList.remove("active");
    });

    userContainer.addEventListener("click", () => {
      userContainer.classList.add("active");
      setFocusedElement("user");
    });

    userContainer.addEventListener("blur", () => {
      userContainer.classList.remove("active");
    });

    messageContainer.addEventListener("click", () => {
      messageContainer.classList.add("active");
      setFocusedElement("message");
    });

    messageContainer.addEventListener("blur", () => {
      messageContainer.classList.remove("active");
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
        titolo={"Scrivi nel form sotto qualcosa"}
        testo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velligula venenatis, vehicula velit id, aliquet nibh."}
      />
      <div className="flex box-container">
      <div className="flex col gap-4 box-30">
        <form className="flex col">
          <div className={"form-input flex gap " + (focusedElement === "user" ? "active" : "")} onFocus={handleFocus} id="user-container">
            <img src={theme === "dark" ? "images/icons/user-negative.png" : "images/icons/user.png"} alt="user" />
            <input
              className={focusedElement === "user" ? "active" : ""}
              onFocus={handleFocus}
              onBlur={(event) => handleFocus(event, true)}
              type="text"
              placeholder="Nome Cognome"
              id="user"
            />
          </div>
          <div className={"form-input flex gap " + (focusedElement === "email" ? "active" : "")} onFocus={handleFocus} id="email-container">
            <img src={theme === "dark" ? "images/icons/email-negative.png" : "images/icons/email.png"} alt="email" />
            <input
              type="email"
              placeholder="example@gmail.com"
              id="email"
              className={focusedElement === "email" ? "active" : ""}
              onFocus={handleFocus}
              onBlur={(event) => handleFocus(event, true)}
            />
          </div>
          <div className={"form-input flex v-top gap " + (focusedElement === "message" ? "active" : "")} onFocus={handleFocus} id="message-container">
            <img src={theme === "dark" ? "images/icons/pencil-negative.png" : "images/icons/pencil.png"} alt="pencil" />
            <textarea
              id="message"
              className={focusedElement === "message" ? "active" : ""}
              onFocus={handleFocus}
              onBlur={(event) => handleFocus(event, true)}
              maxLength={500}
              type="text"
              placeholder="Scrivici qua tutto quello che desideri"
            />
          </div>
        </form>
        <div className="flex">
          <button type="submit">Invia</button>
        </div>
      </div>
      <div className="flex box-30">
        <img src="/images/place-holder-500.png" alt="contattaci" />
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
