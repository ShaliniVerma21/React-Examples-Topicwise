import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form2 = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="container mt-5">
      <h2>Nested Form Example</h2>
      {formSubmitted && <div className="alert alert-success">Form submitted successfully!</div>}
      <Formik
        initialValues={{
          user: {
            firstName: '',
            lastName: '',
          },
        }}
        validationSchema={Yup.object({
          user: Yup.object({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
          }),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setFormSubmitted(true);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field name="user.firstName" type="text" className="form-control" />
              <ErrorMessage name="user.firstName" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field name="user.lastName" type="text" className="form-control" />
              <ErrorMessage name="user.lastName" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form2;