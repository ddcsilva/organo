import Banner from "./components/Banner";
import InputText from "./components/InputText";

function App() {
  return (
    <div className="App">
      <Banner />
      <InputText label="Nome" placeholder="Digite o seu nome" />
      <InputText label="Cargo" placeholder="Digite o seu cargo" />
      <InputText label="Imagem" placeholder="Digite o endereço da sua imagem" />
    </div>
  );
}

export default App;
