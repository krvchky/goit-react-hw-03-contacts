import style from "./searchBox.module.css";
import { useState } from 'react';

export default function SearchBox({ onSearch }) {
    const [inputSearch, setinputSearch] = useState(localStorage.getItem('name') ?? "")

    function inputChange(event) {
        setinputSearch(event.target.value);
        onSearch(event.target.value); // Викликаємо функцію пошуку
    }

    return (
        <div>
            <div>
                <label
                    htmlFor="search-contact"
                    className={style.formSearch}>
                    Search contact🔍
                </label>
                <input
                    className={style.inputSearch}
                    type="text"
                    id="search-contact"
                    name="searchContact"
                    placeholder="Enter contact name"
                    value={inputSearch}
                    onChange={inputChange}
                />
            </div>
        </div>
    );
}
