"use client";

import useSchema from "@/custom-hooks/useSchema";
import { useForm } from "react-hook-form";
import { form, defaultValues, validations } from "./login-schema";
import { Fragment } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

export default function Auth() {
	const {
		register,
		handleSubmit,
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
				<h2 className="text-center text-4xl font-bold -mt-4 mb-4">Log In</h2>
				{inputFields.map((field, index) => {
					const { name, label, required, type, placeholder, error, value } =
						field;

					return (
						<Fragment key={index}>
							<label
								htmlFor={name}
								className="text-lg text-black font-semibold mb-2"
							>
								{label} {required && <span className="text-red-500">*</span>}
							</label>
							<input
								{...register(`${name}`)}
								type={type}
								placeholder={placeholder}
								value={value}
								autoFocus={index === 0 ? true : false}
								className={`border border-slate-400 rounded p-2 ${
									error ? "" : "mb-4"
								} focus:outline-none focus:ring focus:ring-sky-600`}
							/>
							{error && (
								<span className="text-red-500 mb-4">{error.message}</span>
							)}
						</Fragment>
					);
				})}

				<button
					type="submit"
					className="bg-blue-500 text-white rounded p-2 cursor-pointer hover:bg-blue-700 uppercase"
				>
					Sign In
				</button>
			</div>
			<div className="m-1">
				<p className="">
					Don&apos;t have an account?{" "}
					<Link
						className="font-semibold text-blue-800 hover:cursor-pointer uppercase"
						href="/signup"
					>
						Sign Up
					</Link>
				</p>
			</div>
		</form>
	);
}
