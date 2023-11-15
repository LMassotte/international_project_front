import React, { useState, useEffect } from 'react'
import { Typography, Container, Avatar } from '@mui/material';

export default function UserInformations() {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const userString = localStorage.getItem('user');

        if (userString) {
            const userObject = JSON.parse(userString);
            setUserData(userObject);
        }
    }, []);
    return (
        <Container maxWidth="sm">
            <div style={{ textAlign: 'center' }}>
                <Avatar sx={{ width: 100, height: 100, mx: 'auto' }}>{/* Add user image URL here */}</Avatar>
                <Typography variant="h4" gutterBottom>
                    {userData && userData.username}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph>
                    {userData && userData.username}
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Email:</strong> {userData && userData.email}
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Location:</strong> {userData && userData.location}
                </Typography>
            </div>
        </Container>
    )
}
