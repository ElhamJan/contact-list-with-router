import { useState } from "react";
import "./addContact.css";

const AddContact = ({ addContactHandler, history }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("All fields are mandatory!");
      return;
    }
    addContactHandler(contact);
    setContact({ name: "", email: "" });
    history.push("/");
  };

  return (
    <form onSubmit={submitForm}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className="form-control">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};

export default AddContact;
