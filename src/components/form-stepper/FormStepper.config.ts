import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
	email: Yup.string()
		.email("Please enter a valid email")
		.required("This field is required"),
	password: Yup.string()
		.required("This field is required")
		.min(8, "Pasword must be 8 or more characters")
		.matches(/\d/, "Password should contain at least one number")
		.matches(
			/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
			"Password should contain at least one special character"
		),
	firstName: Yup.string().required("This field is required"),
	lastName: Yup.string().required("This field is required"),
	dob: Yup.date()
		.required("This field is required")
		.max(new Date(), "Your birthday must be in the past"),
});

export const CustomizedStepper = styled(Stepper)(({ theme }) => ({
	"& .MuiButton-root.Mui-disabled": {
		background: "#F6F4F4",
		color: "rgba(0, 0, 0, 0.26)",
	},
	"& .MuiButton-root": {
		background: "#49C5CB",
		color: "#F6F4F4",
		"&:hover": {
			background: "#8080C1",
		},
	},
	"& .MuiStepLabel-root": {
		"& .MuiStepLabel-iconContainer": {
			"& .Mui-active": {
				color: "#8080C1",
			},
			"& .Mui-completed": {
				color: "#8080C1",
			},
		},
	},
}));