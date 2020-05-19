import React from 'react'
import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
const initialValues = {
    name: 'Zachary',
    email: '',
    channel: ''
}
const onSubmit = values => {
    console.log(values)
}
const validationSchema = Yup.object({
    name: Yup.string().required('Name field is required!'),
    email: Yup.string().required('Email field is required!'),
    channel: Yup.string().required('Channel field is required!')
})
function YoutubeForm() {
    // console.log('Form values',formik.values)
    // console.log('Form errors',formik.errors)
    // console.log('Visited fields',formik.touched)
    return (
        <Formik 
        initialValues = { initialValues}
        onSubmit = { onSubmit}
        validationSchema = { validationSchema }
        >
            <Form>
               <div className = 'form-control'>
                <label htmlFor = "name">Name</label>
                <Field
                type = "text"
                name = "name"
                id = "name"
                />
                <ErrorMessage name = "name" />
                </div>

                <div className = 'form-control'>
                <label htmlFor = "email">Email</label>
                <Field
                type = "email"
                name = "email"
                id = "email"
               
                />
                <ErrorMessage name = "email" />
                </div>
                
                <div className = 'form-control'>
                <label htmlFor = "channel">Channel</label>
                <Field
                type = "text"
                name = "channel"
                id = "channel"
                />
                <ErrorMessage name = "channel" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm
