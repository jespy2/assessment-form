export interface initialValues {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	dob: string;
	address: string;
	city: string;
	state: string;
	zip: string;
}

export interface fetchResponse {
	code: number;
	description: string;
}

export interface IFormStepperProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
  setFetchResponse: (value: fetchResponse | null) => void;
}