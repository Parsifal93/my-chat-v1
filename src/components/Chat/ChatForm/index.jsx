import React from "react";
import { Formik, Form, Field } from "formik";

export default function ChatForm(props) {
  return (
    <Formik 
    initialValues={{ text: "" }} 
    onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        return (
          <Form>
            <Field name="text" />
            <button type="submit">Отправить</button>
          </Form>
        );
      }}
    </Formik>
  );
}
