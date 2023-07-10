import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import Toggle from '../Toggle';

export default function Signup() {
    // const [user, setUser] = useState({name: "", email: "", password: ""});
    // const {name, email, password} = user;

    //Using Formik Library....................

    const formik = useFormik({
        initialValues: {
            name: "", 
            email: "", 
            password: ""
        },
        validationSchema: yup.object({
            name: yup.string().min(2, 'Need minimum 2 charecter').required('required'),
            email: yup.string().email('Invalid email address').required('required'),
            password: yup.string().min(6, 'Need minimum 6 charecter').required('required') 
        }),

        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm({values: ""});
        }
    });

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label>Name: </label>
                <input type='text' id='name' name='name' value={formik.values.name} onChange={formik.handleChange} required></input>
            </div>
            {formik.errors.name}
            <div>
                <label>Email: </label>
                <input type='email' id='email' name='email' value={formik.values.email} onChange={formik.handleChange} required></input>
            </div>
            {formik.errors.email}
            <div>
                <label>Password: </label>
                <input type='password' id='password' name='password' value={formik.values.password} onChange={formik.handleChange} required></input>
            </div>
            {formik.errors.password}
            <button type='submit'>Sign up</button>
        </form>
        <div>
            <Toggle />
        </div>
    </div>
  )
}
