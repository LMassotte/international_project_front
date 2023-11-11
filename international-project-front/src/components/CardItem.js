import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';

export default function CardItem({ title, text, backgroundText, isFlipped, onFlip }) {
    return (
        <Card onClick={onFlip} className={`MuiCard-root ${isFlipped ? 'flipped' : ''}`}>
            <CardContent>
                <Typography variant="h5" component="div">
                {isFlipped ? backgroundText : title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {isFlipped ? backgroundText : text}
                </Typography>
            </CardContent>
        </Card>
    )
}
