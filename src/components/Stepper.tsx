import { useState } from "react";

import Box from "@mui/material/Box";

import FormStepper from "./form-stepper/FormStepper";
import SuccessMessage from "./form-stepper/components/SuccessMessage";
import FailureMessage from "./form-stepper/components/FailureMessage";

import { fetchResponse } from "../types";

export default function Stepper() {
	const [activeStep, setActiveStep] = useState(0);
	const [fetchResponse, setFetchResponse] = useState<fetchResponse | null>(
		null
	);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
		setFetchResponse(null);
	};

	return (
		<Box sx={{ maxWidth: 400 }}>
			{!fetchResponse && (
				<FormStepper
					activeStep={activeStep}
					handleNext={handleNext}
					handleBack={handleBack}
					handleReset={handleReset}
					setFetchResponse={setFetchResponse}
				/>
			)}
			{fetchResponse?.code === 201 && <SuccessMessage handleReset={handleReset} />}
			{fetchResponse?.code === 500 && (
				<FailureMessage handleReset={handleReset} />
			)}
		</Box>
	);
}
