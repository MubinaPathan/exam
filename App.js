import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(true);
  const [list, setList]= useState([]);

  const saveMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message == ""){
      setValid(false);
      return;
    } else {
 }
  };

  return (
    <div className="container border border-dark m-5 p-2 alert alert-success">
      <div className="bg-secondary p-2 text-dark">
        <span className="h1">MyChatApp </span>
        <span className="h6">By Mubina Pathan</span>
      </div>
      <div className="d-flex">
        <div>
          <input
          type="text"
          className={
            valid
            ? " form-control-lg m-2 w-100 border border-dark"
            : " form-control-lg m-2 w-100 border border-danger"
          }
          onChange={saveMessage}
          placeholder={valid ? "enter msg " : "message cannot be blank"}
          ></input>
        </div>
        <input
        type="button"
        value="send"
        className=" btn btn-success m-2 btn-lg border border-dark"
        onclick={sendMessage}
        ></input>
      </div>
      <div
      id="chatWindow"
      className="form-control w-100 p-3 border border-success"
      ></div>
      </div>
);
        }

        export default App;