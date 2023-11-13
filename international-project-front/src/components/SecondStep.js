import React from 'react'
import { useState } from "react";
import { Card, CardContent, Button, Grid, Typography } from '@mui/material';

export default function SecondStep({ onProjectSelect }) {
    const [selectedCard, setSelectedCard] = useState(null);
    const [data, setData] = useState("");

    const handleCardClick = (cardIndex) => {
        setSelectedCard(cardIndex);
        onProjectSelect(cardIndex);
    };

    const handleValidation = () => {
        console.log('Validation clicked for card:', selectedCard);
    };
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Card
                        onClick={() => handleCardClick(1)}
                        sx={{ border: selectedCard === 1 ? '2px solid blue' : '2px solid transparent' }}
                    >
                        <CardContent>
                            <Typography>Humanitarian camp</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card
                        onClick={() => handleCardClick(2)}
                        sx={{ border: selectedCard === 2 ? '2px solid blue' : '2px solid transparent' }}
                    >
                        <CardContent>
                            <Typography>International Exchange</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card
                        onClick={() => handleCardClick(3)}
                        sx={{ border: selectedCard === 3 ? '2px solid blue' : '2px solid transparent' }}
                    >
                        <CardContent>
                            <Typography>Abroad camp</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card
                        onClick={() => handleCardClick(4)}
                        sx={{ border: selectedCard === 4 ? '2px solid blue' : '2px solid transparent' }}
                    >
                        <CardContent>
                            <Typography>Other</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button variant="contained" color="primary" onClick={handleValidation}>
                    Valider
                </Button>
            </div>
        </div>
    )
}
