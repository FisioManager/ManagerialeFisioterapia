import "./ContactUs.scss";
import Introduction from "./../../components/Introduction/Introduction";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ContactUs = () => {
  const [focusedElement, setFocusedElement] = useState("user");
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  useEffect(() => {
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
          <div className={"form-field flex gap " + (focusedElement === "user" ? "active" : "")} id="user-container" onClick={() => setFocusedElement("user")}>
            <img src={theme === "dark" ? "images/icons/user-negative.png" : "images/icons/user.png"} alt="user" />
            <input
              className={focusedElement === "user" ? "active" : ""}
              type="text"
              placeholder="Nome Cognome"
              id="user"
            />
          </div>
          <div className={"form-field flex gap " + (focusedElement === "email" ? "active" : "")}  id="email-container" onClick={() => setFocusedElement("email")}>
            <img src={theme === "dark" ? "images/icons/email-negative.png" : "images/icons/email.png"} alt="email" />
            <input
              type="email"
              placeholder="example@gmail.com"
              id="email"
              className={focusedElement === "email" ? "active" : ""}
            />
          </div>
          <div className={"form-field flex v-top gap " + (focusedElement === "message" ? "active" : "")} id="message-container" onClick={() => setFocusedElement("message")}>
            <img src={theme === "dark" ? "images/icons/pencil-negative.png" : "images/icons/pencil.png"} alt="pencil" />
            <textarea
              id="message"
              className={focusedElement === "message" ? "active" : ""}
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
