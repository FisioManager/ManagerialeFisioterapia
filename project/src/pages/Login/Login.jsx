import "./Login.scss";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Login = () => {
  const [focusedElement, setFocusedElement] = useState("email");
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  // useEffect is called every time the location variable change (that is passed as second parameter with [location])
  useEffect(() => {
    const emailContainer = document.getElementById("email-container");
    const passwordContainer = document.getElementById("password-container");

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
      <div className="flex box-container">
        <div className="flex box-30">
          <img src="/images/place-holder-500.png" alt="login" />
        </div>
        <div className="flex col box-30 gap-4">
          <h1>Buongiorno Dottore</h1>
          <div>
          <form className="flex col">
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
          <div className="options flex space-evenly">
              <div className="flex gap-05">
                <input type="checkbox" id="ricordami" name="ricordami" value="0" />
                <p>ricordami</p>
              </div>
              <a href="/">dimenticato la password?</a>
          </div>
          </div>
          <div className="flex col gap">
            <Link to="/manager">
              <button>Log In</button>
            </Link>
            <Link to="/register">
              <button>Crea un Account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
