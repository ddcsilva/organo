import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
function App() {
  const [collaborators, setCollaborators] = useState([]);

  const addCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Form addCollaborator={addCollaborator} />
      <Team name="Programação" />
      <Team name="Front-End" />
      <Team name="Data Science" />
    </div>
  );
}

export default App;
