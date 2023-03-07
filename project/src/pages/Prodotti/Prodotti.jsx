import Introduction from "./../../components/Introduction/Introduction";
import Plan from "./../../components/Plan/Plan";
import Switch from "./../../components/Switch/Switch";
import React, { useState } from "react";

const Prodotti = () => {
  const [selectedPlan, setSelectedPlan] = useState("Standard");
  const [selectedMethod, setSelectedMethod] = useState("Annuali");

  const handlePlanSelect = (planTitle) => {
    setSelectedPlan(planTitle);
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div id="main-container" className="flex col">
      <Introduction
        titolo={"Scegli un piano tra quelli disponibili"}
        testo={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velligula venenatis, vehicula velit id, aliquet nibh."
        }
      />
      <div id="prodotti" className="flex col gap-5">
        <div id="mensili-annuali" className="flex gap">
          <p>Mensili</p>
          <Switch method={selectedMethod} onMethodSelect={handleMethodSelect} />
          <p>Annuali</p>
        </div>
        <div className="flex gap-5">
          <Plan
            title={"Limitata"}
            pro={["Funzionalità A"]}
            cons={[
              "Funzionalità B",
              "Funzionalità C",
              "Funzionalità D",
              "Funzionalità E",
            ]}
            price={"Free"}
            method={selectedMethod}
            onPlanSelect={handlePlanSelect}
            isSelected={selectedPlan === "Limitata"}
          />
          <Plan
            title={"Standard"}
            pro={["Funzionalità A", "Funzionalità B"]}
            cons={["Funzionalità C", "Funzionalità D", "Funzionalità E"]}
            price={"99"}
            method={selectedMethod}
            onPlanSelect={handlePlanSelect}
            isSelected={selectedPlan === "Standard"}
          />
          <Plan
            title={"Premium"}
            pro={[
              "Funzionalità A",
              "Funzionalità B",
              "Funzionalità C",
              "Funzionalità D",
              "Funzionalità E",
            ]}
            cons={[]}
            price={"99"}
            method={selectedMethod}
            onPlanSelect={handlePlanSelect}
            isSelected={selectedPlan === "Premium"}
          />
        </div>
      </div>
    </div>
  );
};

export default Prodotti;
