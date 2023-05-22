export default function CreateNewUser({
	onSubmit,
	firstNameValue,
	handleChangeFirstName,
	lastNameValue,
	handleChangeLastName,
	onClick,
}) {
	return (
		<div className="create-new-person">
			<h3>Sukurti naują sąskaitą</h3>
			<form onSubmit={onSubmit}>
				<label htmlFor="fname">Vardas:</label>
				<input
					type="text"
					name="firstname"
					value={firstNameValue}
					onChange={handleChangeFirstName}
				/>
				<label htmlFor="lname">Pavardė:</label>
				<input
					type="text"
					name="lastname"
					value={lastNameValue}
					onChange={handleChangeLastName}
				/>
				<input
					type="submit"
					value="Sukurti"
					className="submit-btn"
					onClick={onClick}
				/>
			</form>
		</div>
	);
}