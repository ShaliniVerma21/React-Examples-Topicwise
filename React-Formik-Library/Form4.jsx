import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomInput = ({ field, form, ...props }) => {
  return (
    <div className="form-group">
      <input {...field} {...props} className="form-control" />
      {form.touched[field.name] && form.errors[field.name] && (
        <div className="text-danger">{form.errors[field.name]}</div>
      )}
    </div>
  );
};

const Form4 = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="container mt-5">
      <h2>Custom Input Form Example</h2>
      {formSubmitted && <div className="alert alert-success">Form submitted successfully!</div>}
      <Formik
        initialValues={{ username: '', email: '' }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setFormSubmitted(true);
          setSubmitting(false);
          resetForm();
        }}
      >
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field name="username" component={CustomInput} type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component={CustomInput} type="email" />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Form4;