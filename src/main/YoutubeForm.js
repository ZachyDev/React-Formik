import React from 'react'
import { useFormik } from 'formik'
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
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    // console.log('Form values',formik.values)
    // console.log('Form errors',formik.errors)
    console.log('Visited fields',formik.touched)
    return (
        <div>
            <form onSubmit = { formik.handleSubmit }>
               <div className = 'form-control'>
                <label htmlFor = "name">Name</label>
                <input
                type = "text"
                name = "name"
                id = "name"
                { ... formik.getFieldProps('name')}
                />
                { formik.touched.name && formik.errors.name ? <div className = "error">{ formik.errors.name } </div> : null }
                </div>

                <div className = 'form-control'>
                <label htmlFor = "email">Email</label>
                <input
                type = "email"
                name = "email"
                id = "email"
                {... formik.getFieldProps('email')}
                />
                { formik.touched.email && formik.errors.email ? <div className = "error">{ formik.errors.email } </div> : null }
                </div>
                
                <div className = 'form-control'>
                <label htmlFor = "channel">Channel</label>
                <input
                type = "text"
                name = "channel"
                id = "channel"
                {... formik.getFieldProps('channel')}
                />
                { formik.touched.channel &&  formik.errors.channel ? <div className = "error">{ formik.errors.channel } </div> : null }
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
