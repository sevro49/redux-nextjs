"use client";
import { useState } from "react";

export default function LogIn() {
	const [username, setUsername] = useState("");

	const onClickLogIn = () => {};

	const onClickToggle = () => {};

	const onClickLogOut = () => {};

	return (
		<div>
			<input
				type="text"
				onChange={(e) => setUsername(e.target.value)}
			/>
			<br />
			<button>Log In</button>
			<br />
			<button>Log Out</button>
			<br />

			<button>Toggle Moderator Status</button>
		</div>
	);
}
