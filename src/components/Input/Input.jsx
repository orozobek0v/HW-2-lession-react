import React from "react";
import "./input.css"

export default function Input() {
  return (
    <div>
      <form className="form">
      <input type="login" className="input__login"></input>
        <input type="password" className="input__password"></input>
      </form>
    </div>
  );
}
