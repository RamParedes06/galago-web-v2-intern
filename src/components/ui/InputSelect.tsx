import React, { useState } from "react";

function InputSelect({ placeholder, icon, id, label, options }: any) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="select-input">
      <label htmlFor={id}>{label}</label>
      <div className="icon-input">
        <select
          id={id}
          // onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            borderColor: isFocused || inputValue !== "" ? "#016e7f" : "#d9d9d9",
          }}
        >
          <option value="">{placeholder}</option>
          {options.map((option: any, index: any) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* <div className="icon">
          {React.cloneElement(icon, {
            _color: isFocused || inputValue !== "" ? "#016e7f" : "#d9d9d9",
          })}
        </div> */}
      </div>
    </div>
  );
}

export default InputSelect;
