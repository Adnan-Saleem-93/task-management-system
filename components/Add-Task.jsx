"use client";

import { useStore } from "@/store";
import PrimaryButton from "./form/Buttons";
import Modal from "./Modal";

const AddTask = () => {
	const { showModal } = useStore((state) => state.modal);

	return (
		<>
			<PrimaryButton
				action={showModal}
				id="modal"
				type="button"
				text="Add New Task"
			/>
			<Modal />
		</>
	);
};

export default AddTask;
