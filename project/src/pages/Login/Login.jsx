import "./Login.scss";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Login = () => {
  const [focusedElement, setFocusedElement] = useState("email");
  const location = useLocation();

  // handle focus/blur of inputs components email and password
  const handleFocus = (event, isBlur = false) => {
    if (event.target.id === "email") {
      setFocusedElement(isBlur ? event.target.id : "email");
    } else if (event.target.id === "password") {
      setFocusedElement(isBlur ? event.target.id : "password");
    }
  };

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
  }, [location]);

  return (
    <div id="main-container" className="flex box-container">
      <div className="flex box-40">
        <img src="/images/place-holder-500.png" alt="login" />
      </div>
      <div className="flex col box-40 gap-4">
        <h1>Buongiorno Dottore</h1>
        <div className="credenziali flex col">
          <div 
            className={"credenziali-input flex gap " + (focusedElement === "email" ? "active" : " ")}
            onFocus={handleFocus}
            id="email-container"
          >
            <img src="images/icons/email.png" alt="email" />
            <input
              className={focusedElement === "email" ? "active" : ""}
              onFocus={handleFocus}
              onBlur={(event) => handleFocus(event, true)}
              id="email"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div
            className={"credenziali-input flex gap " + (focusedElement === "password" ? "active" : " ")}
            onFocus={handleFocus}
            id="password-container"
          >
            <img src="images/icons/password.png" alt="psw" />
            <input
              className={focusedElement === "password" ? "active" : ""}
              onFocus={handleFocus}
              onBlur={(event) => handleFocus(event, true)}
              id="password"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="options flex space-between">
            <div className="flex gap-05">
              <input
                type="checkbox"
                id="ricordami"
                name="ricordami"
                value="0"
              />
              <p>ricordami</p>
            </div>
            <a href="/">ho dimenticato la password</a>
          </div>
        </div>
        <div className="flex col gap">
          <Link to="/manageriale">
            <button>Log In</button>
          </Link>
          <button>Crea un Account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
