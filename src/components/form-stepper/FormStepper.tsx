import { useState } from "react";

import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { Formik, Field, Form } from "formik";

import { FormSchema, CustomizedStepper } from "./FormStepper.config";
import { initialValues, IFormStepperProps } from "../../types";
import useFetch from "../../hooks/useFetch";

export default function FormStepper(props: IFormStepperProps) {
  const { activeStep, handleNext, handleBack, handleReset, setFetchResponse } = props;
	const [showAddressStep, setShowAddressStep] = useState(false);
	const url = "https://httpstat.us/random/201,500";
	const [data] = useFetch(url);

	return (
		<Box sx={{ maxWidth: 400 }}>
			<Formik
				initialValues={
					{
						email: "",
						password: "",
						firstName: "",
						lastName: "",
						dob: "",
						address: "",
						city: "",
						state: "",
						zip: "",
					} as initialValues
				}
				validationSchema={FormSchema}
				validateOnChange
				onSubmit={(values) => {
					setFetchResponse(data);
				}}
			>
				{({
					errors,
					touched,
					values,
					handleChange,
					handleSubmit,
					validateForm,
				}) => (
					<Form onSubmit={handleSubmit}>
						<CustomizedStepper activeStep={activeStep} orientation='vertical'>
							{/*STEP 1: EMAIL & PASSWORD */}
							<Step key={1}>
								<StepLabel>Please enter your email & password</StepLabel>
								<StepContent>
									<Typography>Let's Begin:</Typography>
									<div className='input-container'>
										<label htmlFor='email'>Email</label>
										<Field
											id='email'
											type='email'
											name='email'
											value={values.email}
											onChange={handleChange}
										/>
									</div>
									{errors.email && touched.email ? (
										<div className='errorMessage'>{errors.email}</div>
									) : null}
									<div className='input-container'>
										<label htmlFor='password'>Password</label>
										<Field
											id='password'
											type='password'
											name='password'
											value={values.password}
											onChange={handleChange}
										/>
									</div>
									{errors.password && touched.password ? (
										<div className='errorMessage'>{errors.password}</div>
									) : null}
									<Box sx={{ mb: 2 }}>
										<div>
											<Button
												disabled={
													errors.email !== undefined ||
													errors.password !== undefined ||
													values.email === "" ||
													values.password === ""
												}
												variant='contained'
												onClick={() => validateForm().then(() => handleNext())}
												sx={{ mt: 1, mr: 1 }}
											>
												Continue
											</Button>
											<Button
												disabled={true}
												onClick={handleBack}
												sx={{ mt: 1, mr: 1 }}
											>
												Back
											</Button>
										</div>
									</Box>
								</StepContent>
							</Step>

							{/*STEP 2: FIRST NAME, LAST NAME & DOB */}
							<Step key={2}>
								<StepLabel>Name & DOB</StepLabel>
								<StepContent>
									<Typography>Some quick info about you:</Typography>
									<div className='input-container'>
										<label htmlFor='firstName'>First name</label>
										<Field
											id='firstName'
											type='text'
											name='firstName'
											value={values.firstName}
											onChange={handleChange}
										/>
									</div>
									{errors.firstName && touched.firstName && (
										<div className='errorMessage'>{errors.firstName}</div>
									)}
									<div className='input-container'>
										<label htmlFor='lastName'>Last Name</label>
										<Field
											id='lastName'
											type='text'
											name='lastName'
											value={values.lastName}
											onChange={handleChange}
										/>
									</div>
									{errors.lastName && touched.lastName ? (
										<div className='errorMessage'>{errors.lastName}</div>
									) : null}
									<div className='input-container'>
										<label htmlFor='dob'>Date of Birth</label>
										<Field
											id='dob'
											type='date'
											name='dob'
											value={values.dob}
											onChange={handleChange}
										/>
									</div>
									{errors.dob && touched.dob ? (
										<div className='errorMessage'>{errors.dob}</div>
									) : null}
									<div>
										<input
											type='checkbox'
											name='addAddressStep'
											checked={showAddressStep}
											onChange={() => setShowAddressStep(!showAddressStep)}
										/>
										<label htmlFor='addAddressStep'>
											I want to include my address.
										</label>
									</div>
									<Box sx={{ mb: 2 }}>
										<div>
											<Button
												disabled={
													errors.firstName !== undefined ||
													errors.lastName !== undefined ||
													errors.dob !== undefined ||
													values.firstName === "" ||
													values.lastName === "" ||
													values.dob === ""
												}
												variant='contained'
												onClick={handleNext}
												sx={{ mt: 1, mr: 1 }}
											>
												Continue
											</Button>
											<Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
												Back
											</Button>
										</div>
									</Box>
								</StepContent>
							</Step>

							{/*STEP 3: ADDRESS */}
							{showAddressStep && (
								<Step key='key'>
									<StepLabel
										optional={
											<Typography variant='caption'>Last step</Typography>
										}
									>
										Address
									</StepLabel>
									<StepContent>
										<Typography>What is your address?</Typography>
										<div className='input-container'>
											<label htmlFor='address'>Address</label>
											<Field
												id='address'
												type='text'
												name='address'
												value={values.address}
												onChange={handleChange}
											/>
										</div>
										<div className='input-container'>
											<label htmlFor='city'>City</label>
											<Field
												id='city'
												type='text'
												name='city'
												value={values.city}
												onChange={handleChange}
											/>
										</div>
										<div className='input-container'>
											<label htmlFor='state'>State</label>
											<Field
												id='state'
												type='text'
												name='state'
												value={values.state}
												onChange={handleChange}
											/>
										</div>
										<div className='input-container'>
											<label htmlFor='zip'>Zip</label>
											<Field
												id='zip'
												type='text'
												name='zip'
												value={values.zip}
												onChange={handleChange}
											/>
										</div>
										<Box sx={{ mb: 2 }}>
											<div>
												<Button
													variant='contained'
													onClick={handleNext}
													sx={{ mt: 1, mr: 1 }}
												>
													Finish
												</Button>
												<Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
													Back
												</Button>
											</div>
										</Box>
									</StepContent>
								</Step>
							)}
						</CustomizedStepper>

						{((showAddressStep && activeStep === 3) ||
							(!showAddressStep && activeStep === 2)) && (
							<Paper square elevation={0} sx={{ p: 3 }}>
								<Typography sx={{ mb: 2 }}>
									Please review your information before submitting
								</Typography>
								<Button className='reviewButton' onClick={handleReset}>
									Review & Edit
								</Button>
								{!Object.keys(errors).length && (
									<Button className='submitButton' type='submit'>
										Submit
									</Button>
								)}
							</Paper>
						)}
					</Form>
				)}
			</Formik>
		</Box>
	);
}