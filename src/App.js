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
      email: "ze@ae.com",
      rol: "frontend",
    },
    { name: "hades", email: "hd@ae.com", rol: "backend" },
  ];
  const [members, setMembers] = useState(initialMembers);
  const [editingMember, setEditingMember] = useState(null);
  const addMemberToTeam = (member) => {
    setMembers([...members, member]);
  };
  const updateMember = (memberUpdateObj) => {
    const updatedMembers = members.map((m) => {
      if (m.email === editingMember.email) {
        return memberUpdateObj;
      } else {
        return m;
      }
    });
    setEditingMember(null);
    setMembers(updatedMembers);
  };

  return (
    <div className="App">
      <Form
        addMember={addMemberToTeam}
        editingMember={editingMember}
        editMember={updateMember}
      />
      <ul>
        {members.map((member, i) => (
          <li key={i}>
            {member.name} - {member.email} - {member.rol} -{" "}
            <button onClick={() => setEditingMember(member)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
