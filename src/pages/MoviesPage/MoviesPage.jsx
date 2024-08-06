import { Field, Form, Formik } from "formik";

export default function MoviesPage({ onSearch }) {
  return console.log("search");

  //   <Formik
  //     initialValues={{ image: "" }}
  //     onSubmit={(values, actions) => {
  //       onSearch(values.image);
  //       actions.resetForm();
  //     }}
  //   >
  //     <Form >
  //       <Field
  //              type="text"
  //         name="image"
  //         autoComplete="off"
  //         autoFocus
  //         placeholder="Search images and photos"
  //       />
  //       <button className={css.searchBtn} type="submit">
  //         Search
  //       </button>
  //     </Form>
  //   </Formik>;
}
