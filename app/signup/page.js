"use client";

import useSchema from "@/custom-hooks/useSchema";
import { Controller, useForm } from "react-hook-form";
import { form, defaultValues, validations } from "./signup-schema";
import { Fragment } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import TextField from "@/components/form/TextField";
import Select from "@/components/form/Select";

export default function Auth() {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validations),
	});
	const inputFields = useSchema({ form, defaultValues, errors });

	const onSubmit = (values) => console.log(values);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col items-center h-screen justify-center lg:w-[50vw] md:w-[60vw] sm:w-[80vw] w-[90vw] m-auto text-center"
		>
			<h1 className="text-5xl font-extrabold text-blue-500 mb-8 tracking-widest">
				Task Management System
			</h1>
			<div className="border border-slate-400 bg-slate-200 rounded-lg w-full flex flex-col text-left p-12">
				<h2 className="text-center text-4xl font-bold -mt-4 mb-4">
					Create Account
				</h2>
				{inputFields.map((field, index) => {
					const {
						name,
						label,
						required,
						type,
						placeholder,
						error,
						value,
						options,
					} = field;

					return (
						<Fragment key={index}>
							<div className="flex justify-between items-center">
								<label
									htmlFor={name}
									className="text-lg text-black font-semibold w-2/5"
								>
									{label} {required && <span className="text-red-500">*</span>}
								</label>
								{error && (
									<span className="text-red-500 w-3/5 text-right">
										{error.message}
									</span>
								)}
							</div>
							<Controller
								name={name}
								control={control}
								defaultValue={value}
								render={({ field }) => {
									return type === "text" ? (
										<TextField
											name={name}
											type={type}
											placeholder={placeholder}
											value={value}
											index={index}
											error={error}
											{...field}
										/>
									) : (
										<Select
											name={name}
											type={type}
											placeholder={placeholder}
											value={value}
											index={index}
											error={error}
											options={options}
											{...field}
										/>
									);
								}}
							/>
						</Fragment>
					);
				})}

				<button
					type="submit"
					className="bg-blue-500 text-white rounded p-2 cursor-pointer hover:bg-blue-700 uppercase"
				>
					Sign Up
				</button>
			</div>
			<div className="m-1">
				<p className="">
					Already have an account?{" "}
					<Link
						className="font-semibold text-blue-800 hover:cursor-pointer uppercase"
						href="/"
					>
						Log In
					</Link>
				</p>
			</div>
		</form>
	);
}
