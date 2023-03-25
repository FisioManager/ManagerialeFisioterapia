import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div id="main-container">
      <div className="flex box-container">
        <div id="about-us-container" className="flex col gap-3 box-40">
          <h1>Chi Siamo</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum at turpis sed elementum. Sed sem lacus, congue ut ante at,
            scelerisque sollicitudin elit. Donec id orci eget erat volutpat convallis. Sed sed tortor magna. Aliquam consectetur maximus risus, vitae
            auctor tellus convallis eget. Aliquam at consequat nisl.
          </p>
          <p>
            Phasellus venenatis odio posuere, rutrum ex eget, aliquam justo. Ut eget nisi auctor, porttitor libero ac, placerat eros. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed blandit vel purus ac varius. Nunc semper auctor velit, at
            efficitur diam mollis vel. Vestibulum ante ipsum primis.
          </p>
          <p>
            Etiam congue imperdiet mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Duis ut arcu eu
            turpis ullamcorper commodo. Quisque auctor ante lectus, sed gravida diam cursus ullamcorper. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec eu tempor mauris.
          </p>
          <div id="photo-container" className="flex gap-3">
            <img src="/images/place-holder-500.png" alt="pippo" />
            <img src="/images/place-holder-500.png" alt="dange" />
            <img src="/images/place-holder-500.png" alt="dani" />
          </div>
        </div>
        <div className="flex box-40">
          <img src="/images/place-holder-500.png" alt="contattaci" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
