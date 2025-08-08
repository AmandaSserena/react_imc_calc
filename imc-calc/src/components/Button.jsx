import "./Button.css";

const Button = ({ id, text, type = "button", onClick }) => (
  <button id={id} type={type} onClick={onClick}>
    {text}
  </button>
);

export default Button;
