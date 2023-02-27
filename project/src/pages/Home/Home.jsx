import React from "react";
import Section from "./../../components/Section/Section";
import Introduction from "./../../components/Introduction/Introduction";

const Home = () => {
  return (
    <>
      <div id="body">
        <Introduction />
        <Section
          src={"/images/place-holder-500.png"}
          titolo={"Titolo della descrizione"}
          testo={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id tincidunt sapien, a pretium justo. Praesent at hendrerit tortor, eget efficitur urna. Vestibulum imperdiet lectus nibh, eget interdum dui sollicitudin non. In scelerisque euismod nisl sit amet cursus. Ut ut massa ac est porta finibus."
          }
        />
      </div>
    </>
  );
};

export default Home;
