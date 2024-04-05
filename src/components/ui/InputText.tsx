import React, { useState } from "react";

function InputText({ placeholder, icon, id, label }: any) {
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
    <div className="text-input">
      <label htmlFor={id}>{label}</label>
      <div className="icon-input">
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          style={{
            borderColor: isFocused || inputValue !== "" ? "#016e7f" : "#d9d9d9",
          }}
        />
        <div className="icon">
          {React.cloneElement(icon, {
            _color: isFocused || inputValue !== "" ? "#016e7f" : "#d9d9d9",
          })}
        </div>
      </div>
    </div>
  );
}

export default InputText;
