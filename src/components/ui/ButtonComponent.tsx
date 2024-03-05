import React, { ButtonHTMLAttributes } from "react";
import { Button } from "react-bootstrap";
import "../../styles/button.scss";

type ButtonComponentProps = {
  buttonText: string;
  buttonClass?: string;
  buttonStyle?: {};
};
function ButtonComponent({
  buttonText,
  buttonClass,
  buttonStyle,
}: ButtonComponentProps) {
  return (
    <>
      <Button className={buttonClass} style={buttonStyle}>
        <p>{buttonText}</p>
      </Button>
    </>
  );
}

export default ButtonComponent;
