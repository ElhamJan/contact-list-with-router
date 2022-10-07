import { Link } from "react-router-dom";
import userIcon from "../../../assets/images/user.png";

const Contact = ({ contact, onDelete }) => {
  const { id, name, email } = contact;
  return (
    <div className="item">
      <img src={userIcon} alt="user" />
      <Link to={`user/${id}`}>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </Link>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
