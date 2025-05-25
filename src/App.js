import Banner from "./components/Banner";
import InputText from "./components/InputText";

function App() {
  return (
    <div className="App">
      <Banner />
      <InputText label="Nome" />
      <InputText label="Cargo" />
      <InputText label="Imagem" />
    </div>
  );
}

export default App;
