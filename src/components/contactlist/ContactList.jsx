
import Contact from "./contact/Contact";
import style from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className={style.contactList}>
      {
        contacts.map(
          (contact, index) => <Contact contact={contact} key={index} onDelete={onDelete} />
        )
      }
    </div>
  )
}
