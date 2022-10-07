import "./contactList.css";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className="class-list">
      <div>
        <h2>Contacts</h2>
        <Link to="/add">
          <button>Add</button>
        </Link>
      </div>
      {contacts.map((contact) => {
        return (
          <Contact contact={contact} onDelete={onDelete} key={contact.id} />
        );
      })}
    </section>
  );
};

export default ContactList;
