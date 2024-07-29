
import { useEffect, useState } from "react";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactlist/ContactList";
import SearchBox from "../searchBox/SearchBox";
import style from './App.module.css';

export default function App() {
    const contactsBD = [
        { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
        { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
        { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
        { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
    ];

    const contactsLocal = JSON.parse(localStorage.getItem("contacts"));

    const [contacts, setContacts] = useState(contactsLocal ?? contactsBD);

    const [filteredContacts, setFilteredContacts] = useState(contacts);

    // Функція видалення контакту
    const deleteContact = (id) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);
        setFilteredContacts(updatedContacts);
        localStorage.setItem("contacts", JSON.stringify(updatedContacts))
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

        localStorage.setItem("name", searchTerm);
    };

    // Функція добавлення контакту
    const onAdd = (newContact) => {        

        const newContacts = [
            ...contacts,
            newContact
        ]

        setContacts(newContacts);
        setFilteredContacts(newContacts); // Оновлюємо відфільтровані контакти
        localStorage.setItem("contacts", JSON.stringify(newContacts))
    }

    // при завантаженні робимо пошук
    useEffect(() => {
        const name = localStorage.getItem('name') ?? ""
        searchContacts(name)
    }, [])
    

    return (
        <div className={style.container}>
            <h1>Phonebook</h1>
            <ContactForm onAdd={onAdd} />
            <SearchBox onSearch={searchContacts} />
            <ContactList contacts={filteredContacts} onDelete={deleteContact} />
        </div>
    );
}


