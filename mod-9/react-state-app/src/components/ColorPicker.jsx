import { useState } from "react";
import ColorInput from "./ColorInput";

function ColorPicker() {
  const [color, setColor] = useState("white");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div>
      <h2 className="text-5xl">Color Picker</h2>

      <ColorInput onColorChange={handleColorChange} />

      <div style={{ backgroundColor: color }}>
        Current Color: {color}
      </div>
    </div>
  );
}

export default ColorPicker;
