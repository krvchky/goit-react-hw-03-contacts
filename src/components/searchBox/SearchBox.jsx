import style from "./searchBox.module.css";
export default function SearchBox() {
    return (
        <div>
            <label 
                for="search-contact" 
                className={style.formSearch}>
                Search Contact
            </label>
            <input 
                className={style.inputSearch}
                type="text" 
                id="search-contact" 
                name="search-contact" 
                class="form-input" 
                placeholder="Enter contact name" />
        </div>
    );
}
