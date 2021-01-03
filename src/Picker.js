import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

export const PickerWrapper = styled.div`
  .swatch {
    width: 100px;
    height: 50px;
    background: ${(p) => p.color};
  }
`;

const Picker = () => {
  const [color, setColor] = useState("#000000");

  return (
    <>
      <PickerWrapper color={color}>
        <div className="swatch" />
      </PickerWrapper>
    </>
  );
};

export default Picker;
