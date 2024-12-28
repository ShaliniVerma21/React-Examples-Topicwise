import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form8 = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="container mt-5">
      <h2>Password Validation Form</h2>
      {formSubmitted && <div className="alert alert-success">Form submitted successfully!</div>}
      <Formik
        initialValues={{ password: '' }}
        validationSchema={Yup.object({
          password: Yup.string()
            .required('Required')
            .test('is-strong', 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number', (value) => {
              return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
            }),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setFormSubmitted(true);
          setSubmitting(false);
          resetForm();
        }}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Form8;