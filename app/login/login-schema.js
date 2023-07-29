import { object, string } from "yup";

export const form = {
	email: {
		name: "email",
		type: "text",
		label: "Email",
		required: true,
		placeholder: "example@gmail.com",
		error: "Email address is required",
		invalid: "Please enter a valid email address",
	},
	password: {
		name: "password",
		type: "text",
		label: "Password",
		required: true,
		placeholder: "Enter your password",
		error: "Password is required",
	},
};

const { email, password } = form;

export const defaultValues = {
	[email.name]: "",
	[password.name]: "",
};

export const validations = object({
	[email.name]: string().required(email.error).email(email.invalid),
	[password.name]: string().required(password.error),
});
