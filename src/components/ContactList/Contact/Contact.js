import { Link } from "react-router-dom";
import userIcon from "../../../assets/images/user.png";

const Contact = ({ contact, onDelete }) => {
  const { id, name, email } = contact;
  return (
    <div className="item">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={userIcon} alt="user" />
        <Link to={{ pathname: `user/${id}`, state: { contact: contact } }}>
          <div className="user">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/edit/${id}`}>
          <button className="edit-btn">Edit</button>
        </Link>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
