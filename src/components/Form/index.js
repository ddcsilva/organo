import { useState } from "react";
import InputText from "../InputText";
import Dropdown from "../Dropdown";
import Button from "../Button";
import "./Form.css";

const Form = () => {
  const times = ["Programação", "Front-End", "Data Science", "Devops", "UX e Design"];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário enviado => ", nome, cargo, imagem, time);
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <InputText
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={nome}
          onChange={(value) => setNome(value)}
        />
        <InputText
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={cargo}
          onChange={(value) => setCargo(value)}
        />
        <InputText
          label="Imagem"
          placeholder="Digite o endereço da sua imagem"
          value={imagem}
          onChange={(value) => setImagem(value)}
        />
        <Dropdown required={true} label="Time" itens={times} value={time} onChange={(value) => setTime(value)} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
