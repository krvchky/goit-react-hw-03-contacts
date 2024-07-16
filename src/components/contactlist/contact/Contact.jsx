import { FiUser, FiPhone } from "react-icons/fi";

export default function Contact({contact}) {
  return (
    <div>
      <div>
        <FiUser />
        {contact.name}
      </div>
      <div>
        <FiPhone />
        {contact.number}
      </div>
      <button>delete</button>
    </div>
  )
}
