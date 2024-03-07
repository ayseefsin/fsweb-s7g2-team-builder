import { useState } from "react";

export const Form = (props) => {
  const { addMember } = props;
  const [form, setForm] = useState({
    name: "aysin",
    email: "ae@ae.com",
    rol: "bakcend developer",
  });
  const changeHandler = (e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
    addMember(form);
  };

  return (
    <div>
      <h3>Member Form</h3>
      <form onSubmit={submitHandler}>
        <label id="name">
          name:{" "}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => changeHandler(e)}
          />
        </label>

        <label>
          email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => changeHandler(e)}
          />
        </label>

        <label>
          rol:{" "}
          <input
            type="text"
            name="rol"
            value={form.rol}
            onChange={(e) => changeHandler(e)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
