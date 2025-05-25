import "./Form.css";
import InputText from "../InputText";
import Dropdown from "../Dropdown";
import Button from "../Button";

const Form = () => {
  const times = ["Programação", "Front-End", "Data Science", "Devops", "UX e Design"];

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário enviado");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <InputText required={true} label="Nome" placeholder="Digite o seu nome" />
        <InputText required={true} label="Cargo" placeholder="Digite o seu cargo" />
        <InputText label="Imagem" placeholder="Digite o endereço da sua imagem" />
        <Dropdown required={true} label="Time" itens={times} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
