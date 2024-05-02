// Render Prop
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <h1 className='text-center'>Login</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='form'>
            <div className="flex w-100">
          <Field type="email" name="email" className='input' placeholder='email' />
          <ErrorMessage name="email" component="div" className='error' />
            </div>
            <div className="flex w-100">
          <Field type="password" name="password" className='input' placeholder='password' />
            </div>
          <ErrorMessage name="password" component="div"  className='error' />
          <button type="submit" className='btn submit' disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;