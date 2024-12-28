import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form3 = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="container mt-5">
      <h2>Dynamic Fields Example</h2>
      {formSubmitted && <div className="alert alert-success">Form submitted successfully!</div>}
      <Formik
        initialValues={{ friends: [''] }}
        validationSchema={Yup.object({
          friends: Yup.array().of(Yup.string().required('Required')),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setFormSubmitted(true);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="friends">
              {({ insert, remove, push }) => (
                <div>
                  {values.friends.length > 0 &&
                    values.friends.map((friend, index) => (
                      <div key={index} className="form-group">
                        <Field name={`friends.${index}`} className="form-control" />
                        <ErrorMessage name={`friends.${index}`} component="div" className="text-danger" />
                        <button type="button" className="btn btn-danger mt-2" onClick={() => remove(index)}>
                          Remove
                        </button>
                      </div>
                    ))}
                  <button
                    type="button"
                    className="btn btn-secondary mt-3"
                    onClick={() => push('')}
                  >
                    Add Friend
                  </button>
                </div>
              )}
            </FieldArray>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form3;