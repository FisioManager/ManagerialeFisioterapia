const Login = () => {
  return (
    <div id="body" className="login-page">
      <div id="#login-illustration">
        <img src="/images/place-holder-500.png" alt="login" />
      </div>
      <div id="login-form">
        <h1>Buongiorno Dottore</h1>
        <div id="credenziali">
          <div className="credenziali-input active">
            <img src="images/email.png" alt="email" />
            <input className="active" type="email" placeholder="example@gmail.com"/>
          </div>
          <div className="credenziali-input">
            <img src="images/password.png" alt="psw" />
          <input type="password" placeholder="password"/>
          </div>
        </div>
        <div id="options">
          <div id="ricordami-container">
          <input type="checkbox" id="ricordami" name="ricordami" value="0"/>
          <p>ricordami</p>
          </div>
          <a href="/">ho dimenticato la password</a>
        </div>
        <div id="login-buttons">
          <button type="submit">Log In</button>
          <button type="submit">Crea un Account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
