const Contattaci = () => {
  return (
    <div id="main-content" className="flex box-container">
    <div className="flex box-40">
      <div className="form flex col">
        <div className="form-input flex gap active">
          <img src="images/icons/user.png" alt="user" />
          <input
            className="active"
            type="text"
            placeholder="Nome Cognome"
          />
        </div>
        <div className="form-input flex gap">
          <img src="images/icons/email.png" alt="email" />
          <input
            type="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="form-input flex v-top gap">
          <img src="images/icons/pencil.png" alt="pencil" />
          <textarea
            maxLength={200}
            type="text"
            placeholder="Scrivici qua tutto quello che desideri"
          />
        </div>
      </div>
    </div>
    <div className="flex box-40">
      <img src="/images/place-holder-500.png" alt="contattaci" />
    </div>
  </div>
  );
};

export default Contattaci;
