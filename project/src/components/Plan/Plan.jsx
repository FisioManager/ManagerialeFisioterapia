const Plan = ({ title, pro, cons, price, method, onPlanSelect, isSelected }) => {
    return (
    <div className={"plan flex col h-top gap " + (isSelected ? "selected" : "")}>
      <h1>{title}</h1>
      {pro.map((func) => (
        <div key={func} className="funzionalità flex gap-2">
          <img src="images/icons/check.png" alt="check" />
          <p>{func}</p>
        </div>
      ))}
      {cons.map((func) => (
        <div key={func} className="funzionalità flex gap-2">
          <img src="images/icons/cross.png" alt="cross" />
          <p>{func}</p>
        </div>
      ))}
      <div className="flex price">
        <h1>
            {(price === "Free" ? "Free" : price + (method === "Annuali" ? " €/anno" : " €/mese")) } 
        </h1>
      </div>
      <button type="submit" onClick={() => onPlanSelect(title)}>Scegli</button>
    </div>
  );
};

export default Plan;
