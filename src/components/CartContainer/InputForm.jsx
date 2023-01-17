import React from "react";
import "./inputForm.css";

function InputForm(props) {
  return (
    <div>
      <label>{props.title}</label>
      <input
        required
        value={props.value}
        name={props.field}
        type="text"
        onChange={props.onChange}
      />
    </div>
   );  
}

export default InputForm;