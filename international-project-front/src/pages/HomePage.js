import React, { useState } from 'react';
import "../assets/Homepage.css"
import { Button, Typography } from '@mui/material';
import CardItem from '../components/CardItem';

export default function Homepage() {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const [isFlipped1, setFlipped1] = useState(false);
  const [isFlipped2, setFlipped2] = useState(false);
  const [isFlipped3, setFlipped3] = useState(false);
  const [isFlipped4, setFlipped4] = useState(false);

  const handleFlip = (cardNumber) => {
    console.log("flipped " + cardNumber)
    switch (cardNumber) {
      case 1:
        setFlipped1(!isFlipped1);
        break;
      case 2:
        setFlipped2(!isFlipped2);
        break;
      case 3:
        setFlipped3(!isFlipped3);
        break;
      case 4:
        setFlipped4(!isFlipped4);
        break;
      default:
        break;
    }
  };

  return (
    <div className="home-container">
      <div className="content">
        <Typography variant="h2" className="title">
          International exchanges builder
        </Typography>
        <Typography variant="subtitle1" className="subtitle">
          Explore and discover countries, cultures and youth organizations.
        </Typography>
        <div className="button-container">
          <Button variant="contained" color="success">
            Green Button
          </Button>
          <Button variant="contained" color="warning">
            Yellow Button
          </Button>
        </div>
        <div className="card-section">
          <CardItem title="Discover" text="Discover other youth organizations" backgroundtext={lorem} isFlipped={isFlipped1} onFlip={() => handleFlip(1)} />
          <CardItem title="Connect" text="Get in touch with people from around the world" backgroundtext={lorem} isFlipped={isFlipped2} onFlip={() => handleFlip(2)} />
          <CardItem title="Build a project" text="Start organizing international projects" backgroundtext={lorem} isFlipped={isFlipped3} onFlip={() => handleFlip(3)} />
          <CardItem title="Give feedback" text="Tell us how your project was" backgroundtext={lorem} isFlipped={isFlipped4} onFlip={() => handleFlip(4)} />
        </div>
      </div>
    </div>
  )
}
