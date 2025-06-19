



function ColorInput({ onColorChange }) {

  return (
    <>
      <label htmlFor="color-input">Choose a Color: </label>
      <input 
      type="text" 
      name="color-input" 
      placeholder="Enter a color"
      onChange={e => onColorChange(e.target.value)} />
    </>
  );
}

export default ColorInput;
