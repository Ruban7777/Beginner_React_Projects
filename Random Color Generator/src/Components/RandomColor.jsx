import { useState } from "react";

const RandomColor = () => {
  const [typeofColor, setTypeofColor] = useState("");
  const [color, setColor] = useState("");

  function RandomNoGenerator(max) {
    return Math.floor(Math.random() * max);
  }

  function handleHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";

    for (let i = 0; i < 6; i++) {
      hexcolor += hex[RandomNoGenerator(hex.length)];
    }

    setColor(hexcolor);
    setTypeofColor("hex");
  }

  function handleRgbColor() {
    const R = RandomNoGenerator(256);
    const G = RandomNoGenerator(256);
    const B = RandomNoGenerator(256);

    setColor(`rgb(${R}, ${G}, ${B})`);
    setTypeofColor("rgb");
  }

  function handleRandomColor() {
    if (Math.random() < 0.5) {
      handleHexColor();
    } else {
      handleRgbColor();
    }
  }

  return (
    <div style={{ background: color }}>
      <center>
        <div>
          <button onClick={handleHexColor}>Generate HEX Color</button>
          <button onClick={handleRgbColor}>Generate RGB Color</button>
          <button onClick={handleRandomColor}>Generate Random Color</button>
        </div>
      </center>

      <div className="background">
        <h3>{typeofColor === "rgb" ? "RGB color" : "HEX color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
