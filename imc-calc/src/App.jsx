import { useState } from "react";
import { data } from "./data/data";
import ImcCalc from "./components/ImcCalc.jsx";
import ImcTable from "./components/ImcTable.jsx";
import "./App.css";

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");
  const [classification, setClassification] = useState(""); // NEW
  const [obesity, setObesity] = useState("");               // NEW

  const handleCalc = (heightStr, weightStr) => {
    const h = parseFloat(String(heightStr).replace(",", "."));
    const w = parseFloat(String(weightStr).replace(",", "."));
    if (!h || !w || h <= 0 || w <= 0) return;

    const imcVal = w / (h * h);       // número
    const result = imcVal.toFixed(2); // string pra mostrar
    setImc(result);

    const faixa = data?.find(d => imcVal >= d.min && imcVal <= d.max); // use imcVal!
    if (faixa) {
      setInfo(faixa.info);
      setInfoClass(faixa.infoClass || "");
      setClassification(faixa.classification || ""); // NEW
      setObesity(faixa.obesity || "");               // NEW
    } else {
      setInfo("IMC calculado");
      setInfoClass("");
      setClassification("");
      setObesity("");
    }
  };

  const handleReset = () => {
    setImc(""); setInfo(""); setInfoClass("");
    setClassification(""); setObesity("");
  };

 


  return (
    <div className="container">
      {!imc ? (
        <ImcCalc onCalc={handleCalc} />
      ) : (
        <ImcTable
          result={imc}
          info={info}
          infoClass={infoClass}
          classification={classification} // NEW
          obesity={obesity}               // NEW
          onReset={handleReset}
        />
      )}
    </div>
  );
}

export default App;
