import React from 'react'
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CardItem({ title, text, backgroundText, isFlipped, onFlip }) {
    const isButtonVisible = isFlipped && (title === 'Discover' || title === 'Connect');
    return (
        <Card onClick={onFlip} className={isFlipped ? 'flipped' : ''}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {isFlipped ? "" : title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {isFlipped ? backgroundText : text}
                </Typography>
                {isButtonVisible && (
                    <Button variant="contained" color="primary" component={Link} to={`/${title}Page`}>
                        {`Go to ${title} Page`}
                    </Button>
                )}
            </CardContent>
        </Card>
    )
}
