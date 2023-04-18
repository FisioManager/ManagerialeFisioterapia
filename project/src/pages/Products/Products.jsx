import "./Products.scss";
import Introduction from "./../../components/Introduction/Introduction";
import Plan from "./../../components/Plan/Plan";
import Switch from "./../../components/Switch/Switch";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [selectedPlan, setSelectedPlan] = useState("Standard"); // control the state of the selected plan (handle change of background of selected plan)
  const [selectedMethod, setSelectedMethod] = useState("Month"); // control the state of the selected method (handle /mese /anno depending on the switch position)
  const methods = ["Year", "Month"]; // this is needed by the switch component to set the correspoonding method when clicked

  return (
    <div id="main-container">
      <Introduction
        titolo={"Scegli un piano tra quelli disponibili"}
        testo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velligula venenatis, vehicula velit id, aliquet nibh."}
      />
      <div className="box-container flex col gap-5">
        <div id="month-year" className="box-100 flex gap">
          <p>Mensili</p>
          {/* we pass to the switch the methods array, the index of the selected method, the function(method) to change the state */}
          <Switch methods={methods} index={methods.indexOf(selectedMethod)} setSelectedMethod={setSelectedMethod} />
          <p>Annuali</p>
        </div>
        <div className="flex gap-5">
          {/* for each plan we pass the selected method in order to choose between /mese /anno, the plan in order to handle the background and the function to change the plan */}
          <Plan
            title={"Limitata"}
            pro={["Funzionalità A"]}
            cons={["Funzionalità B", "Funzionalità C", "Funzionalità D", "Funzionalità E"]}
            price={"Free"}
            method={selectedMethod}
            plan={selectedPlan}
            changePlan={setSelectedPlan}
          />
          <Plan
            title={"Standard"}
            pro={["Funzionalità A", "Funzionalità B"]}
            cons={["Funzionalità C", "Funzionalità D", "Funzionalità E"]}
            price={"99.00"}
            method={selectedMethod}
            plan={selectedPlan}
            changePlan={setSelectedPlan}
          />
          <Plan
            title={"Premium"}
            pro={["Funzionalità A", "Funzionalità B", "Funzionalità C", "Funzionalità D", "Funzionalità E"]}
            cons={[]}
            price={"149.00"}
            method={selectedMethod}
            plan={selectedPlan}
            changePlan={setSelectedPlan}
          />
        </div>
        <Link to="/checkout">
              <button>Continua</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
