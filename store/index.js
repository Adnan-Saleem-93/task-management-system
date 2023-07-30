import { create } from "zustand";

export const useStore = create((set) => ({
	modal: {
		isOpen: false,
		showModal: () =>
			set((state) => ({
				modal: { ...state.modal, isOpen: true },
			})),
		closeModal: () =>
			set((state) => ({
				modal: { ...state.modal, isOpen: false },
			})),
	},
	notifier: {
		show: false,
		type: "success",
		message: "",
		showNotification: ({ type, message }) =>
			set((state) => ({
				notifier: { ...state.notifier, type, message, show: true },
			})),
		closeNotification: () =>
			set((state) => ({
				notifier: { ...state.notifier, type: "", message: "", show: false },
			})),
	},
}));
