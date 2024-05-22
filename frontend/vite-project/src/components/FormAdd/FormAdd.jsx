import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './FormAdd.scss'
const FormAdd = ({getData}) => {
    async function AddMenu(values){
        const res=await axios.post("http://localhost:5000/api/products",values)
        getData()
    }
  return (
    <Formik
      initialValues={{ image: '', text: '', title: ''}}
      validationSchema={Yup.object({
        image: Yup.string()
          .max(200, 'Must be 200 characters or less')
          .required('Required'),
        text: Yup.string()
          .max(200, 'Must be 200 characters or less')
          .required('Required'),
          title: Yup.string()
          .max(200, 'Must be 200 characters or less')
          .required('Required'),
          
      })}
      onSubmit={(values, { resetForm }) => {
       AddMenu(values)
       resetForm()
      }}
    >
      <Form className='Form'>
        <label htmlFor="image">Image</label>
        <Field name="image" type="text" />
        <ErrorMessage name="image" />

        <label htmlFor="text">Text</label>
        <Field name="text" type="text" />
        <ErrorMessage name="text" />


        <label htmlFor="title">Title</label>
        <Field name="title" type="text" />
        <ErrorMessage name="title" />
       

  

        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};
export default FormAdd