import "./Home.scss";
import Section from "./../../components/Section/Section";
import Introduction from "./../../components/Introduction/Introduction";

const Home = () => {
  return (
    <div id="main-container">
      <Introduction
        titolo={"Mega Titolo catchy che introduce il sito"}
        testo={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velligula venenatis, vehicula velit id, aliquet nibh."
        }
      />
      <Section
        src={"/images/place-holder-500.png"}
        titolo={"Titolo della descrizione"}
        testo={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id tincidunt sapien, a pretium justo. Praesent at hendrerit tortor, eget efficitur urna. Vestibulum imperdiet lectus nibh, eget interdum dui sollicitudin non. In scelerisque euismod nisl sit amet cursus. Ut ut massa ac est porta finibus."
        }
        mode={true}
      />
      <Section
        src={"/images/place-holder-500.png"}
        titolo={"Titolo della seconda descrizione"}
        testo={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id tincidunt sapien, a pretium justo. Praesent at hendrerit tortor, eget efficitur urna. Vestibulum imperdiet lectus nibh, eget interdum dui sollicitudin non. In scelerisque euismod nisl sit amet cursus. Ut ut massa ac est porta finibus."
        }
        mode={false}
      />
    </div>
  );
};

export default Home;
