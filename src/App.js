import React, { useState } from "react"
import "./App.css"

const App = () => {
	const [value, setValue] = useState({
		firstName: "",
		lastName: "",
		email: "",
	})

	const handleFirstNameInputChange = event => {
		setValue({ ...value, firstName: event.target.value })
	}
	const handleLastNameInputChange = event => {
		setValue({ ...value, lastName: event.target.value })
	}
	const handleEmailNameInputChange = event => {
		setValue({ ...value, email: event.target.value })
	}

	return (
		<div class="form-container">
			<form class="register-form">
				<input
					value={value.firstName}
					onChange={handleFirstNameInputChange}
					id="first-name"
					class="form-field"
					type="text"
					placeholder="First Name"
					name="firstName"
				/>

				<input
					value={value.lastName}
					onChange={handleLastNameInputChange}
					id="last-name"
					class="form-field"
					type="text"
					placeholder="Last Name"
					name="lastName"
				/>

				<input
					value={value.email}
					onChange={handleEmailNameInputChange}
					id="email"
					class="form-field"
					type="text"
					placeholder="Email"
					name="email"
				/>

				<button class="form-field" type="submit">
					Register
				</button>
			</form>
		</div>
	)
}

export default App
