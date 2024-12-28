import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form5 = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="container mt-5">
      <h2>Form with Checkbox and Radio Buttons</h2>
      {formSubmitted && <div className="alert alert-success">Form submitted successfully!</div>}
      <Formik
        initialValues={{ agree: false, favoriteColor: '' }}
        validationSchema={Yup.object({
          agree: Yup.boolean()
            .oneOf([true], 'You must accept the terms and conditions')
            .required('Required'),
          favoriteColor: Yup.string().required('Required'),
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
            <label>
              <Field type="checkbox" name="agree" />
              I agree to the terms and conditions
            </label>
            <ErrorMessage name="agree" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Favorite Color</label>
            <div>
              <label className="mr-3">
                <Field type="radio" name="favoriteColor" value="red" />
                Red
              </label>
              <label className="mr-3">
                <Field type="radio" name="favoriteColor" value="blue" />
                Blue
              </label>
              <label className="mr-3">
                <Field type="radio" name="favoriteColor" value="green" />
                Green
              </label>
            </div>
            <ErrorMessage name="favoriteColor" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Form5;