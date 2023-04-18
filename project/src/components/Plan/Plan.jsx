import "./Plan.scss";

/*
  title: the title of the plan
  pro: the list of the functionalities that the plan provide
  cons: the list of the functionalities that the plan does not provide
  price: the cost of the plan per year (it will eventually be divided to take the monthly amount)
  method: it tells the method (yearly or monthly)
  plan: it contains the currently selected plan
  setSelectedPlan: it's the function that can change the state of plan 
*/
const Plan = ({ title, pro, cons, price, method, plan, changePlan }) => {

  return (
    <div className={"plan flex space-evenly col " + (plan === title ? "selected" : "")} onClick={() => changePlan(title)}>
      <h1>{title}</h1>
      <div className="flex col gap">
        {pro.map((func) => (
          <div key={func} className="flex gap-2">
            <img src="images/icons/check.png" alt="check" />
            <p>{func}</p>
          </div>
        ))}
        {cons.map((func) => (
        <div key={func} className="flex gap-2">
          <img src="images/icons/cross.png" alt="cross" />
          <p>{func}</p>
        </div>
      ))}
      </div>

      <div className="flex price">
        <h1>{price === "Free" ? "Free" : method === "Year" ? price + " €/anno" : (Math.round((price * 100) / 9) / 100).toFixed(2) + " €/mese"}</h1>
      </div>
    </div>
  );
};

export default Plan;
