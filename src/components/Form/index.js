import { useState } from "react";
import InputText from "../InputText";
import Dropdown from "../Dropdown";
import Button from "../Button";
import "./Form.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addCollaborator({
      name,
      position,
      image,
      team,
    });

    setName("");
    setPosition("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <InputText
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={name}
          onChange={(value) => setName(value)}
        />
        <InputText
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={position}
          onChange={(value) => setPosition(value)}
        />
        <InputText
          label="Imagem"
          placeholder="Digite o endereço da sua imagem"
          value={image}
          onChange={(value) => setImage(value)}
        />
        <Dropdown required={true} label="Time" items={props.teams} value={team} onChange={(value) => setTeam(value)} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
