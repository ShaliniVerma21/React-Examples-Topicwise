import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form6 = () => {
  const [step, setStep] = useState(0);
  const steps = [
    {
      label: 'Step 1',
      initialValues: { firstName: '', lastName: '' },
      validationSchema: Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
      }),
    },
    {
      label: 'Step 2',
      initialValues: { email: '', phone: '' },
      validationSchema: Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string().required('Required'),
      }),
    },
  ];

  const handleNext = (values, { setTouched }) => {
    if (step < steps.length - 1) {
      setTouched({}); // Reset touched fields for the next step
      setStep(step + 1);
    } else {
      console.log(values);
      alert('Form submitted successfully!'); // Display success message
    }
  };

  return (
    <div className="container mt-5">
      <h2>Multi-Step Form</h2>
      <Formik
        initialValues={steps[step].initialValues}
        validationSchema={steps[step].validationSchema}
        onSubmit={handleNext}
      >
        {() => (
          <Form>
            {step === 0 && (
              <>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <Field name="firstName" type="text" className="form-control" />
                  <ErrorMessage name="firstName" component="div" className="text-danger" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <Field name="lastName" type="text" className="form-control" />
                  <ErrorMessage name="lastName" component="div" className="text-danger" />
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <Field name="phone" type="text" className="form-control" />
                  <ErrorMessage name="phone" component="div" className="text-danger" />
                </div>
              </>
            )}
            <button type="submit" className="btn btn-primary">
              {step < steps.length - 1 ? 'Next' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form6;