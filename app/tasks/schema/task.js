import { object, string } from "yup";

export const form = {
	task: {
		name: "task",
		type: "text",
		label: "Task Title",
		required: true,
		placeholder: "Enter title of the task",
		error: "Task Title is required",
	},
	description: {
		name: "description",
		type: "textarea",
		label: "Description",
		required: true,
		placeholder: "Enter description for the task",
		error: "Description is required",
	},
};

const { task, description } = form;

export const defaultValues = {
	[task.name]: "",
	[description.name]: "",
};

export const validations = object({
	[task.name]: string().required(task.error),
	[description.name]: string().required(description.error),
});
