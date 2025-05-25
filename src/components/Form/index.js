import "./Form.css";
import InputText from "../InputText";
import Dropdown from "../Dropdown";

const Form = () => {
  const times = ["Programação", "Front-End", "Data Science", "Devops", "UX e Design"];

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <InputText label="Nome" placeholder="Digite o seu nome" />
        <InputText label="Cargo" placeholder="Digite o seu cargo" />
        <InputText label="Imagem" placeholder="Digite o endereço da sua imagem" />
        <Dropdown label="Time" itens={times} />
      </form>
    </section>
  );
};

export default Form;
