import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const addCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Form addCollaborator={addCollaborator} />
    </div>
  );
}

export default App;
