import { useEffect, useState } from "react";
import getOneContact from "../../services/getOneContactService";
import updateContact from "../../services/updateContactService";

const EditContact = ({ history, match }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("All fields are mandatory!");
      return;
    }
    try {
      await updateContact(match.params.id, contact);
      history.push("/");
    } catch (error) {}
  };

  useEffect(() => {
    // const localFetch = async () => {
    //   try {
    //     const { data } = await getOneContact(match.params.id);
    //     setContact({ name: data.name, email: data.email });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // localFetch();
    getOneContact(match.params.id)
      .then((res) => setContact({ name: res.data.name, email: res.data.email }))
      .catch((err) => console.log(err));
  }, []);

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
      <button type="submit" className="add-btn">
        Edit
      </button>
    </form>
  );
};

export default EditContact;
