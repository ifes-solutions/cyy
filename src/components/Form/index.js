import React from 'react'
import './form.css'
import { useForm } from 'react-hook-form'
import { Grid } from '@mui/material'

const Form = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm()

    const onSubmit = (data) => {
        alert(`Your Name : ` + data.firstname + ' ' + data.lastname + `\n Email : ` + data.email + `\n Phone Number : ` + data.number)
        reset()
    }

    return (
        <section>
            <div className="form--title">
                <h1>We look forward to seeing you! </h1>
            </div>
            <div className="form--container">
                <div>
                    <form className="form--input" onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="First Name"
                            {...register("firstname", { required: true })} />
                        <error className="form--error">
                            {errors.firstname?.type === "required" && "*First Name is required"}
                        </error>
                        <input type="text" placeholder="Last Name"
                            {...register("lastname", { required: true })} />
                        <error className="form--error">
                            {errors.lastname?.type === "required" && "*Last Name is required"}
                        </error>
                        <input type="text" placeholder="Email"
                            {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })} />
                        <error className="form--error">
                            {errors.email?.type === "required" && "*Email is required"}
                            {errors.email?.type === "pattern" && "*Email is not a valid email"}
                        </error>
                        <input type="number" placeholder="Phone Number"
                            {...register("number", { required: true, minLength: 6, maxLength: 12 })} />
                        <errors className="form--error">
                            {errors.number?.type === "required" && "*Phone Number is required"}
                            {errors.number?.type === "minLength" && "*Phone Number is less than 6 digits"}
                            {errors.number?.type === "maxLength" && "*Phone Number is more than 12 digits"}
                        </errors>
                        <Grid container spacing={1}>
                            <Grid item sx={12} sm={12} md={6} lg={6}>
                                <button type="submit" className="form--btn">
                                    Submit
                                </button>
                            </Grid>
                            <Grid item sx={12} sm={12} md={6} lg={6}>
                                <button type="reset" className="form--btn">
                                    Reset
                                </button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form
