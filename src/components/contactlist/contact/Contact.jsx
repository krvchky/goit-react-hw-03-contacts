import { FiUser, FiPhone } from "react-icons/fi";
import style from "./Contact.module.css";  


export default function Contact({ contact, onDelete }) {
  return (
    <div className={style.contactItem}> 
      <div>
        <FiUser />
        {contact.name}
      </div>
      <div>
        <FiPhone />
        {contact.number}
      </div>
      <div className={style.containerBtn}><button className={style.deleteButton} onClick={() => onDelete(contact.id)}>delete</button> {/* Додаємо обробник для видалення */}</div>
      
    </div>
  )
}
