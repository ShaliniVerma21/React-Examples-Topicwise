import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const Form7 = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="container mt-5">
      <h2>Select an Option Form</h2>
      {formSubmitted && <div className="alert alert-success">Form submitted successfully!</div>}
      <Formik
        initialValues={{ selectedOption: null }}
        validationSchema={Yup.object({
          selectedOption: Yup.object().required('Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setFormSubmitted(true);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="selectedOption">Select an Option</label>
              <Select
                id="selectedOption"
                name="selectedOption"
                options={options}
                onChange={(option) => setFieldValue('selectedOption', option)}
                className="basic-single"
                classNamePrefix="select"
              />
              <ErrorMessage name="selectedOption" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form7;