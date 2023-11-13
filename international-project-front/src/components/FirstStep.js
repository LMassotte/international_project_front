import { TextField, MenuItem } from '@mui/material';
import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form"

const countries = [
    {
        value: 'Belgium',
        label: 'BE',
    },
    {
        value: 'Denmark',
        label: 'DK',
    },
    {
        value: 'Finland',
        label: 'FI',
    },
    {
        value: 'Germany',
        label: 'D',
    },
];


export default function FirstStep({onSubmit}) {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <div style={{ marginBottom: '10px' }}>
                <TextField {...register("firstName")} placeholder="First name" />
                <TextField {...register("lastName")} placeholder="Last name" />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <TextField
                    {...register("country", { required: true })}
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="Belgium"
                    helperText="Please select your country"
                >
                    {countries.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <TextField {...register("email")} placeholder="Email address" />
                <p>{data}</p>
                <input type="submit" />
            </div>
        </form>
    )
}
