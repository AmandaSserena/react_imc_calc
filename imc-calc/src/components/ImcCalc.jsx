import { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";

function ImcCalc({ onCalc }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalc(height, weight);
  };

  const handleClear = () => {
    setHeight("");
    setWeight("");
  };

  const validDigits = (txt) => txt.replace(/[^0-9.,]/g, "");

  const handleHeightChange = (e) => setHeight(validDigits(e.target.value));
  const handleWeightChange = (e) => setWeight(validDigits(e.target.value));

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              id="height"
              placeholder="Exemplo 1,75"
              value={height}
              onChange={handleHeightChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              id="weight"
              placeholder="Exemplo 70,5"
              value={weight}
              onChange={handleWeightChange}
            />
          </div>
        </div>

        <div className="action-control">
          <Button id="calc-btn" text="Calcular" type="submit" />
          <Button id="clear-btn" text="Limpar" onClick={handleClear} />
        </div>
      </form>
    </div>
  );
}

export default ImcCalc;
