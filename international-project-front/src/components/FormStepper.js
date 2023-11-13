import * as React from 'react';
import { useState } from "react";
import { Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material'
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const steps = ['First step', 'Second step', 'Third step'];

export default function HorizontalLinearStepper() {
  const [firstStepData, setFirstStepData] = useState(null);
  const [secondStepSelectedProject, setSecondStepSelectedProject] = useState(null);

  const handleProjectSelect = (choice) => {
    setSecondStepSelectedProject(choice);
  };

  const handleFirstStepSubmit = (data) => {
    setFirstStepData(data);
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {firstStepData.firstName} && 
            {secondStepSelectedProject}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && (
            <FirstStep onSubmit={handleFirstStepSubmit} />
          )}
          {activeStep === 1 && (
            <SecondStep onProjectSelect={handleProjectSelect}/>
          )}
          {activeStep === 2 && (
            <ThirdStep />
          )}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}