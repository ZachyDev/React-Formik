import React from 'react';
import { useFormik } from 'formik';
const initialValues = {
    name: 'Zachy',
    email: '',
    channel: ''
}
const onSubmit = values => {
    console.log(values)
}
const validate = values => {
    const errors = {}
    if(!values.name) {
        errors.name = 'Required'
    }

    if(!values.email) {
        errors.email = 'Required'
    }

    if(!values.channel) {
        errors.channel = 'Required'
    }
    return errors
}
function YoutubeForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    // console.log('Form values',formik.values)
    console.log('Visited field',formik.touched)
    // console.log('Form errors',formik.errors)
    return (
        <div>
            <form onSubmit = { formik.handleSubmit }>
            <div className = "form-control">
                <label htmlFor="name">Name</label>
                <input 
                    type = "text"
                    name = "name"
                    id = "name"
                    value = { formik.values.name }
                    onBlur = { formik.handleBlur }
                    onChange = { formik.handleChange }
                />
                { formik.touched.name && formik.errors.name ? <div className = 'error'> { formik.errors.name } </div> : null }
                </div>

                <div className = "form-control">
                <label htmlFor="email">Email</label>
                <input 
                type = "email"
                name = "email"
                id = "email"
                value = { formik.values.email }
                onBlur = { formik.handleBlur }
                onChange = { formik.handleChange }
                />
                { formik.touched.email && formik.errors.email ? <div className = 'error'> { formik.errors.email } </div> : null }
                </div>

                <div className = "form-control">
                <label htmlFor="channel">Channel</label>
                <input 
                type = "text"
                name = "channel"
                id = "channel"
                value = { formik.values.channel }
                onBlur = { formik.handleBlur }
                onChange= { formik.handleChange}
                />
                { formik.touched.channel && formik.errors.channel ? <div className = 'error'> { formik.errors.channel } </div> : null }
                </div>
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
