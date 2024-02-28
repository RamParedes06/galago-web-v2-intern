import React, { ButtonHTMLAttributes } from "react";
import { Button } from "react-bootstrap";
import "../../styles/button.scss";

type ButtonComponentProps = {
  buttonText: string;
  buttonClass?: string;
};
function ButtonComponent({ buttonText, buttonClass }: ButtonComponentProps) {
  return (
    <>
      <Button className={buttonClass}>
        <p>{buttonText}</p>
      </Button>
    </>
  );
}

export default ButtonComponent;
