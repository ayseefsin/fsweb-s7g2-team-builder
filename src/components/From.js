import { useState } from "react";

export const Form = () => {
  const [form, setForm] = useState({
    name: "aysin",
    email: "ae@ae.com",
    rol: "bakcend developer",
  });
  const changeHandler = (e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
  };

  return (
    <div>
      <h3>Member Form</h3>
      <form>
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
