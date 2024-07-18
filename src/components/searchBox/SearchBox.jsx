
import { useFormik } from 'formik';
import style from "./searchBox.module.css";

export default function SearchBox({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            searchContact: localStorage.getItem('name') ?? ""
        },
        onSubmit: values => {
            console.log('Form data', values);
            onSearch(values.searchContact); // Викликаємо функцію пошуку
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
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
                    onChange={formik.handleChange}
                    value={formik.values.searchContact}
                />
            </div>
            <button
                className={style.submitButton} type="submit">Submit</button>
        </form>
    );
}
