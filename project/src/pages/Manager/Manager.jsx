import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Manager.scss";

const Manager = () => {
  const navigate = useNavigate();

  async function populateQuote() {
    const response = await fetch("http://localhost:3000/api/quote", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = response.json();
  }

  useEffect(() => {
    // const token = localStorage.getItem('token')
    // if(token) {
    //    const user = jwt.decode(token)
    //     if(!user) {
    //       console.log("Something went wrong")
    //       localStorage.removeItem('token')
    //       navigate('/login')
    //     }
    //     else {
    //       populateQuote()
    //     }
    // }
  }, []);

  return (
    <div id="main-container">
      <div className="flex box-container">
        <p>Manager here</p>
      </div>
    </div>
  );
};

export default Manager;
