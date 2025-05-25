import "./InputText.css";

const InputText = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  return (
    <div className="input-text">
      <label>{props.label}</label>
      <input placeholder={placeholderModificado} required={props.required} />
    </div>
  );
};

export default InputText;
