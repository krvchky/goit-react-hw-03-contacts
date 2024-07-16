import Contact from "./contact/Contact"
import style from "./ContactList.module.css"

export default function ContactList({contacts}) {
  return (
    <div className={style.contactList}>
      {
        contacts.map(
          (contact, index) => <Contact contact={contact} key={index} />
        )
      }
      
    </div>
  )
}
