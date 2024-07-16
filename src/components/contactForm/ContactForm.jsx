
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from "./ContactForm.module.css";
import { useId } from 'react';

export default function ContactForm({ contacts, setContacts }) {
  const idGenerator = useId();

  // Схема валідації за допомогою Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    number: Yup.string()
      .matches(/^\d+$/, 'Number must be digits only')
      .min(10, 'Number must be at least 10 digits')
      .required('Number is required')
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          ...values,
          id: idGenerator
        };

        setContacts(prevContacts => [
          ...prevContacts,
          newContact
        ]);

        resetForm(); // Скидаємо форму після додавання контакту
      }}
    >
      {({ touched, errors }) => (
        <Form className={style.contactForm}>
          <div className={style.formItem}>
            <label className={style.formLabel} htmlFor="name">Name</label>
            <Field
              id="name"
              type="text"
              name="name"
              className={`${style.formInput} ${touched.name && errors.name ? style.errorInput : ''}`}
              placeholder="name"
            />
            <ErrorMessage name="name" component="div" className={style.error} />
          </div>

          <div className={style.formItem}>
            <label className={style.formLabel} htmlFor="number">Number</label>
            <Field
              id="number"
              type="text"
              name="number"
              className={`${style.formInput} ${touched.number && errors.number ? style.errorInput : ''}`}
              placeholder="number"
            />
            <ErrorMessage name="number" component="div" className={style.error} />
          </div>

          <div className={style.formItem}>
            <button type="submit" className={style.formButton}>
              Add contact
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}



// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import style from "./ContactForm.module.css";
// import { useId } from 'react';

// export default function ContactForm({ contacts, setContacts }) {
//   const idGenerator = useId();

//   // Схема валідації за допомогою Yup
//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(2, 'Name must be at least 2 characters')
//       .required('Name is required'),
//     number: Yup.string()
//       .matches(/^\d+$/, 'Number must be digits only')
//       .min(10, 'Number must be at least 10 digits')
//       .required('Number is required')
//   });

//   return (
//     <Formik
//       initialValues={{ name: '', number: '' }}
//       validationSchema={validationSchema}
//       onSubmit={(values, { resetForm }) => {
//         const newContact = {
//           ...values,
//           id: idGenerator
//         };

//         setContacts(newContact);

//         resetForm(); // Скидаємо форму після додавання контакту
//       }}
//     >
//       {({ touched, errors }) => (
//         <Form className={style.contactForm}>
//           <div className={style.formItem}>
//             <label className={style.formLabel} htmlFor="name">Name</label>
//             <Field
//               id="name"
//               type="text"
//               name="name"
//               className={`${style.formInput} ${touched.name && errors.name ? style.errorInput : ''}`}
//               placeholder="name"
//             />
//             <ErrorMessage name="name" component="div" className={style.error} />
//           </div>

//           <div className={style.formItem}>
//             <label className={style.formLabel} htmlFor="number">Number</label>
//             <Field
//               id="number"
//               type="text"
//               name="number"
//               className={`${style.formInput} ${touched.number && errors.number ? style.errorInput : ''}`}
//               placeholder="number"
//             />
//             <ErrorMessage name="number" component="div" className={style.error} />
//           </div>

//           <div className={style.formItem}>
//             <button type="submit" className={style.formButton}>
//               Add contact
//             </button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// }
