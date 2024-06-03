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