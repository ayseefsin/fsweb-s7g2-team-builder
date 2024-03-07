import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
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
  const [willUpdateMember, setWillUpdateMember] = useState(null);
  const addMemberToTeam = (member) => {
    setMembers([...members, member]);
  };

  return (
    <div className="App">
      <Form addMember={addMemberToTeam} willUpdateMember={willUpdateMember} />
      <ul>
        {members.map((member, i) => (
          <li key={i}>
            {member.name} - {member.email} - {member.rol} -{" "}
            <button onClick={() => setWillUpdateMember(member)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
