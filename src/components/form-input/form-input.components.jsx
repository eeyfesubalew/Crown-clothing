import React from "react";
import "./form.input.style.scss";

const FormInput = ({ handleChange, label, ...other }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...other} />
    {label ? (
      <label
        className={`${other.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : (
      ""
    )}
  </div>
);
export default FormInput;
