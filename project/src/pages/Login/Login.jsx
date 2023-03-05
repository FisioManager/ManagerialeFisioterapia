const Login = () => {
  return (
    <div id="main-container" className="flex center box-container">
      <div className="flex center box-40">
        <img src="/images/place-holder-500.png" alt="login" />
      </div>
      <div className="flex col center box-40 gap-5">
        <h1>Buongiorno Dottore</h1>
        <div className="credenziali flex col">
          <div className="credenziali-input flex gap active">
            <img src="images/email.png" alt="email" />
            <input
              className="active"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="credenziali-input flex gap">
            <img src="images/password.png" alt="psw" />
            <input type="password" placeholder="password" />
          </div>
          <div className="options flex space-between">
            <div className="flex gap-05">
              <input type="checkbox" id="ricordami" name="ricordami" value="0"/>
              <p>ricordami</p>
            </div>
            <a href="/">ho dimenticato la password</a>
          </div>
        </div>
        <div className="flex center col gap">
          <button type="submit">Log In</button>
          <button type="submit">Crea un Account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
