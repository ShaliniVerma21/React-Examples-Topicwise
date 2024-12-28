import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form9 = () => {
  const [showExtraField, setShowExtraField] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="container mt-5">
      <h2>Conditional Fields Form</h2>
      {formSubmitted && <div className="alert alert-success">Form submitted successfully!</div>}
      <Formik
        initialValues={{ name: '', subscribe: false, extraInfo: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          extraInfo: Yup.string().when('subscribe', {
            is: true,
            then: Yup.string().required('Required when subscribed'),
          }),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setFormSubmitted(true);
          setSubmitting(false);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label>
                <Field
                  type="checkbox"
                  name="subscribe"
                  onChange={() => {
                    setShowExtraField(!showExtraField);
                  }}
                />
                Subscribe to newsletter
              </label>
            </div>
            {showExtraField && (
              <div className="form-group">
                <label htmlFor="extraInfo">Extra Info</label>
                <Field name="extraInfo" type="text" className="form-control" />
                <ErrorMessage name="extraInfo" component="div" className="text-danger" />
              </div>
            )}
            <button type="submit" className="btn btn-primary">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form9;