import React, { useState } from "react";
import { MDBCheckbox } from "mdb-react-ui-kit";
import "../../styles/flightresult.scss";

type Option = {
  label: string;
  value: string | number;
};

type RadioGroupProps = {
  name: string;
  options: Option[];
};

const RadioButtonGroup: React.FC<RadioGroupProps> = ({ name, options }) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleCheckboxChange = (value: string | number) => {
    setCheckedItems({
      ...checkedItems,
      [value]: !checkedItems[value],
    });
  };

  return (
    <div className="checkbox-group">
      {/* {options.map((option) => (
        <MDBCheckbox
          key={option.value}
          name="group1"
          id={`${name}${option.value}Checkbox`}
          value={option.value}
          label={option.label}
          inline
          checked={checkedItems[option.value] || false}
          onChange={() => handleCheckboxChange(option.value)}
        />
      ))} */}
    </div>
  );
};

export default RadioButtonGroup;
