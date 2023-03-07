import Introduction from "./../../components/Introduction/Introduction";
import Plan from "./../../components/Plan/Plan";
import React, { useState } from "react";

const Prodotti = () => {
  const [selectedPlan, setSelectedPlan] = useState("Standard");

  const handlePlanSelect = (planTitle) => {
    setSelectedPlan(planTitle);
  };

  return (
    <div id="main-container" className="flex col">
      <Introduction
        titolo={"Scegli un piano tra quelli disponibili"}
        testo={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velligula venenatis, vehicula velit id, aliquet nibh."
        }
      />
      <div id="prodotti" className="flex gap-5">
        <Plan 
          title={"Limitata"}
          pro={["Funzionalità A"]}
          cons={["Funzionalità B", "Funzionalità C", "Funzionalità D", "Funzionalità E"]}
          price={"Free"}
          onPlanSelect={handlePlanSelect}
          isSelected={selectedPlan === "Limitata"}
        />
        <Plan 
          title={"Standard"}
          pro={["Funzionalità A","Funzionalità B"]}
          cons={["Funzionalità C", "Funzionalità D", "Funzionalità E"]}
          price={"99"}
          onPlanSelect={handlePlanSelect}
          isSelected={selectedPlan === "Standard"}
        />
        <Plan 
          title={"Premium"}
          pro={["Funzionalità A", "Funzionalità B", "Funzionalità C", "Funzionalità D", "Funzionalità E"]}
          cons={[]}
          price={"99"}
          onPlanSelect={handlePlanSelect}
          isSelected={selectedPlan === "Premium"}
        />
      </div>
    </div>
  );
};

export default Prodotti;
