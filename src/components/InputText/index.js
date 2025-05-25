import "./InputText.css";

const InputText = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  const onChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="input-text">
      <label>{props.label}</label>
      <input value={props.value} onChange={onChange} required={props.required} placeholder={placeholderModificado} />
    </div>
  );
};

export default InputText;
