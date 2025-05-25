import "./Button.css";

const Button = (props) => {
  return (
    <button className="button" onClick={props.aoClicar}>
      {props.children}
    </button>
  );
};

export default Button;
