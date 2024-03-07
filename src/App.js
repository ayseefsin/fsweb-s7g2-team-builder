import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Form } from "./components/From";

function App() {
  const initialMembers = [
    {
      name: "aysin",
      email: "ae@ae.com",
      rol: "backend",
    },
    {
      name: "zeus",
      email: "ae@ae.com",
      rol: "frontend",
    },
    { name: "hades", email: "hd@ae.com", rol: "backend" },
  ];
  const [members, setMembers] = useState(initialMembers);
  const addMemberToTeam = (member) => {
    setMembers([...members, member]);
  };
  return (
    <div className="App">
      <Form addMember={addMemberToTeam} />
      <ul>
        {members.map((member) => (
          <li>
            {member.name} - {member.email} - {member.rol}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
