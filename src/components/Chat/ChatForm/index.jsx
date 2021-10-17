import React from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import './ChatForm.sass';
import classNames from "classnames";

const CHAT_SHEME = yup
  .object()
  .required()
  .shape({
    text: yup
      .string()
      .required()
      .test("spaces", "", (value) => {
        if (value && value.trim() === "") {
          return false;
        }
        return true;
      }),
  });

export default function ChatForm(props) {
  return (
    <Formik initialValues={{ text: "" }} 
    onSubmit={props.onSubmit}
    validationSchema={CHAT_SHEME}>

      {(values, errors,touched) => {
        const btnClasses = classNames("btnStyle", {
          btnHide: values.text ==="",
          btnShow: values.text !== "",
        });

      // const btnClasses = 'btnStyle' + (values.text === '' ? 'btnHide' :'');
        // const inputClasses=classNames('inputStyle',{
        //   invalidInput:errors.text && touched.text,
        //   validInput : !errors.text && touched.text,
        // });

        return (
          <Form>
            <Field name="text" />
            <ErrorMessage name="text" className="errorMessage"/>
            <button
            className={btnClasses}
            type="submit">Отправить</button>
          </Form>
        );
      }}
    </Formik>
  );
}
