import React, { useState } from "react"
import "./App.css"

const App = () => {
	const [value, setValue] = useState({
		firstName: "",
		lastName: "",
		email: "",
	})
	const [submitted, setSubmitted] = useState(false)
	const [valid, setValid] = useState(false)

	const handleFirstNameInputChange = event => {
		setValue({ ...value, firstName: event.target.value })
	}
	const handleLastNameInputChange = event => {
		setValue({ ...value, lastName: event.target.value })
	}
	const handleEmailNameInputChange = event => {
		setValue({ ...value, email: event.target.value })
	}

	const handleSubmit = event => {
		event.preventDefault()
		if (value.firstName && value.lastName && value.email) {
			setValid(true)
		}
		setSubmitted(true)
	}

	return (
		<div class="form-container">
			<form class="register-form" onSubmit={handleSubmit}>
				{/* next line to show the success message */}
				{submitted && valid ? (
					<div class="success-message">
						Success! Thank you {value.firstName} {value.lastName} for
						registering
					</div>
				) : null}

				<input
					value={value.firstName}
					onChange={handleFirstNameInputChange}
					id="first-name"
					class="form-field"
					type="text"
					placeholder="First Name"
					name="firstName"
				/>
				{/* next line to show the error message */}
				{submitted && !value.firstName ? (
					<span id="first-name-error">Please enter a first name</span>
				) : null}

				<input
					value={value.lastName}
					onChange={handleLastNameInputChange}
					id="last-name"
					class="form-field"
					type="text"
					placeholder="Last Name"
					name="lastName"
				/>
				{/* next line to show the error message */}
				{submitted && !value.lastName ? (
					<span id="last-name-error">Please enter a last name</span>
				) : null}
				<input
					value={value.email}
					onChange={handleEmailNameInputChange}
					id="email"
					class="form-field"
					type="text"
					placeholder="Email"
					name="email"
				/>
				{/* next line to show the error message */}
				{submitted && !value.email ? (
					<span id="email-error">Please enter an email address</span>
				) : null}
				<button class="form-field" type="submit">
					Register
				</button>
			</form>
		</div>
	)
}

export default App
