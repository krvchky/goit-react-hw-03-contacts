
import { useState } from "react";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactlist/ContactList";
import SearchBox from "../searchBox/SearchBox";
import style from './App.module.css';

export default function App() {
    const [contacts, setContacts] = useState(
        [
            { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
            { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
            { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
            { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
        ]
    );

    const [filteredContacts, setFilteredContacts] = useState(contacts);

    // Функція видалення контакту
    const deleteContact = (id) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);
        setFilteredContacts(updatedContacts);
    };

    // Функція пошуку контактів
    const searchContacts = (searchTerm) => {
        if (searchTerm === "") {
            setFilteredContacts(contacts);
        } else {
            const filtered = contacts.filter(contact =>
                contact.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredContacts(filtered);
        }
    };

    return (
        <div className={style.container}>
            <h1>Phonebook</h1>
            <ContactForm contacts={contacts} setContacts={(newContacts) => {
                setContacts(newContacts);
                setFilteredContacts(newContacts); // Оновлюємо відфільтровані контакти
            }} />
            <SearchBox onSearch={searchContacts} />
            <ContactList contacts={filteredContacts} onDelete={deleteContact} />
        </div>
    );
}



// import { useState, useEffect } from "react";
// import ContactForm from "../contactForm/ContactForm";
// import ContactList from "../contactlist/ContactList";
// import SearchBox from "../searchBox/SearchBox";
// import style from './App.module.css';

// export default function App() {
  
//     const [contacts, setContacts] = useState([
//       { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
//       { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
//       { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
//       { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
//   ]);

//     // Завантаження контактів з localStorage при завантаженні сторінки
//     useEffect(() => {
//         const storedContacts = localStorage.getItem('contacts');
//         if (storedContacts) {
//             setContacts(JSON.parse(storedContacts));
//         }
//     }, []);

//     // Збереження контактів у localStorage при зміні контактів
//     useEffect(() => {
//         localStorage.setItem('contacts', JSON.stringify(contacts));
//     }, [contacts]);

//     const [filteredContacts, setFilteredContacts] = useState([]);

//     // Функція додавання нового контакту
//     const addContact = (newContact) => {
//         const updatedContacts = [...contacts, newContact];
//         setContacts(updatedContacts);
//         setFilteredContacts(updatedContacts);
//     };

//     // Функція видалення контакту
//     const deleteContact = (id) => {
//         const updatedContacts = contacts.filter(contact => contact.id !== id);
//         setContacts(updatedContacts);
//         setFilteredContacts(updatedContacts);
//     };

//     // Функція пошуку контактів
//     const searchContacts = (searchTerm) => {
//         if (searchTerm === "") {
//             setFilteredContacts(contacts);
//         } else {
//             const filtered = contacts.filter(contact =>
//                 contact.name.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//             setFilteredContacts(filtered);
//         }
//     };

//     // Оновлюємо filteredContacts при зміні контактів
//     useEffect(() => {
//         setFilteredContacts(contacts);
//     }, [contacts]);

//     return (
//         <div className={style.container}>
//             <h1>Phonebook</h1>
//             <ContactForm contacts={contacts} setContacts={addContact} />
//             <SearchBox onSearch={searchContacts} />
//             <ContactList contacts={filteredContacts} onDelete={deleteContact} />
//         </div>
//     );
// }
