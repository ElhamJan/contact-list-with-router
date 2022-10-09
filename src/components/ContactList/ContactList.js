import "./contactList.css";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import { useEffect, useState } from "react";
import getContacts from "../../services/getContactsService";
import deleteContactService from "../../services/deleteContactService";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [allContacts, setAllContacts] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
      setAllContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteContactHandler = async (id) => {
    try {
      await deleteContactService(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
    const search = e.target.value;

    if (search !== "") {
      const filteredContacts = allContacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });

      setContacts(filteredContacts);
    } else {
      setContacts(allContacts);
    }
  };

  return (
    <section className="list-wrapper">
      <div className="contact-list">
        <div className="list-header">
          <h2>Contacts</h2>
          <Link to="/add">
            <button>Add</button>
          </Link>
        </div>
        <div>
          <input type="text" value={searchInput} onChange={changeHandler} />
        </div>
        {contacts ? (
          contacts.map((contact) => {
            return (
              <Contact
                contact={contact}
                onDelete={deleteContactHandler}
                key={contact.id}
              />
            );
          })
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
