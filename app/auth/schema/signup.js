import { object, string, ref } from "yup";

export const signupForm = {
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
		type: "password",
		label: "Password",
		required: true,
		placeholder: "Enter your password",
		error: "Password is required",
		invalid: "Please enter a valid password",
	},
	confirm_password: {
		name: "confirm_password",
		type: "password",
		label: "Confirm Password",
		required: true,
		placeholder: "Enter Password Again",
		error: "Confirm Password is required",
		invalid: "Password do not match",
	},
	group: {
		name: "group",
		type: "select",
		label: "Group",
		required: true,
		placeholder: "Select a Group",
		options: [
			{ id: "wdr33421rdfsfwer", text: "Red Group" },
			{ id: "eresfdf23e3sfdfd", text: "Blue Group" },
			{ id: "fdf-3*&&33663fdf", text: "Green Group" },
			{ id: "_33dlstedts233)4", text: "Black Group" },
			{ id: "23xderef3332#33a", text: "Yellow Group" },
		],
		error: "Group is required",
	},
};

const { email, password, confirm_password, group } = signupForm;

export const signupDefaultValues = {
	[email.name]: "",
	[password.name]: "",
	[confirm_password.name]: "",
	[group.name]: "",
};

export const signupValidations = object({
	[email.name]: string().required(email.error).email(email.invalid),
	[password.name]: string()
		.required(password.error)
		.matches(
			"(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,}$",
			"Password must contain: 7+ characters, 1 upper case, 1 lower case, 1 numeric value and 1 special character with no space"
		),
	[confirm_password.name]: string()
		.required(confirm_password.error)
		.when("password", {
			is: (val) => (val && val.length > 0 ? true : false),
			then: () => string().oneOf([ref("password")], confirm_password.invalid),
		}),
	[group.name]: string().required(group.error),
});
