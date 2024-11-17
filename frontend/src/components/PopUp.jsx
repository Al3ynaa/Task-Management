import React from "react";
import "../css/PopUp.css";
import { useDispatch } from "react-redux";
import { setTaskDeleteM } from "../redux/slices/stateSlice";
import { toast } from "react-toastify";

export const TaskMenu = ({ setTaskMenuP }) => {
	const dispatch = useDispatch();
	const handleTaskDelete = () => {
		dispatch(setTaskDeleteM(true));
		setTaskMenuP(false);
	};
	const handleSharelink = (id) => {
		if (!navigator.clipboard) {
			toast.error(
				"Your browser does not support copying text to the clipboard."
			);
			return;
		}
		navigator.clipboard.writeText(
			`${import.meta.env.VITE_FRONTEND_URL}/task/${id}`
		);

		setTaskMenuP(false);
		toast.success("Link Copied");
	};
	return (
		<div className="popup-box">
			<button>Edit</button>
			<button onClick={() => handleSharelink("id-ksmx")}>Share</button>
			<button className="popup-delete" onClick={handleTaskDelete}>
				Delete
			</button>
		</div>
	);
};
export const TaskFilter = () => {
	return (
		<div className="popup-box pupup-filter">
			<button>Today</button>
			<button>This Week</button>
			<button>This Month</button>
		</div>
	);
};