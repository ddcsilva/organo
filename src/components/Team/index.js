import "./Team.css";
import Collaborator from "../Collaborator";

const Team = (props) => {
  const backgroundColor = { backgroundColor: props.secondaryColor };
  const borderColor = { borderColor: props.primaryColor };

  return (
    <section className="team" style={backgroundColor}>
      <h3 style={borderColor}>{props.name}</h3>
      <div className="collaborators">
        {props.collaborators.map((collaborator) => (
          <Collaborator
            key={collaborator.name}
            name={collaborator.name}
            role={collaborator.role}
            image={collaborator.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
