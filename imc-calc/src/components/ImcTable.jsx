import Button from "./Button";
import "./ImcTable.css";
import { data } from "../data/data";

function ImcTable({ result, info, infoClass, classification, obesity, onReset }) {
  return (
    <div id="result-container">
      {/* Título no formato do print */}
      <h2>
        Seu IMC:
        <span id="imc-number"> {result}</span>
      </h2>

      {/* Situação atual */}
      <p id="imc-info">
        Situação atual: <span className={infoClass}>{info}</span>
      </p>

      {/* Tabela de faixas */}
      <h3>Confira as classificações:</h3>
      <div id="imc-table">
        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>

        {data.map((row, i) => (
          <div className="table-data" key={i}>
            <p>{row.classification}</p>
            <p className={row.infoClass}>{row.info}</p>
            <p style={{ textAlign: "center" }}>{row.obesity}</p>
          </div>
        ))}
      </div>

      <div className="action-control">
        <Button id="reset-btn" text="VOLTAR" onClick={onReset} />
      </div>
    </div>
  );
}

export default ImcTable;
