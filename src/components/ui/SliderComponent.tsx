import { Slider, RangeSlider, Row, Col, InputGroup, InputNumber } from "rsuite";
// (Optional) Import component styles. If you are using Less, import the `index.less` file.
import "rsuite/Slider/styles/index.css";
import "rsuite/RangeSlider/styles/index.css";

import { useState } from "react";

//? https://rsuitejs.com/components/slider/#examples
function SliderComponent({ ...props }) {
  const [value, setValue] = useState(0);
  return (
    <div>
      <Row>
        <Col md={10}>
          <Slider
            progress
            style={{ marginTop: 16 }}
            value={value}
            onChange={(value) => {
              setValue(value);
            }}
            {...props}
          />
        </Col>
      </Row>
    </div>
  );
}

export default SliderComponent;
