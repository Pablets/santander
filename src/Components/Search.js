import React from 'react';
import { STUDENTS } from '../studentsList';
// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return maxValid >= selected && maxValid >= today;
}

function Search({ addToResident, notifyError }) {
	const [name, setName] = React.useState('');
	const [date, setDate] = React.useState('');
	const [isDisabled, setIsDisabled] = React.useState(true);

	const handleChange = (e, type) => {
		e.preventDefault();
		if (type && type === 'text') {
			setName(e.target.value);
		}

		if (type && type === 'date') {
			setDate(e.target.value);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const [filteredStudent] = STUDENTS.filter(
			(est) => est.name.toLowerCase() === name.toLowerCase()
		);

		let studentValidated;

		if (filteredStudent?.validityDate && date) {
			studentValidated = checkValidity(date, filteredStudent?.validityDate);
		}

		if (!filteredStudent?.length) {
			notifyError(`Sorry, ${name}'s validity has Expired!`);
		}

		if (!studentValidated) {
			notifyError(`Sorry, ${name}'s is not a verified student!`);
		}

		if (filteredStudent && studentValidated) {
			addToResident(filteredStudent);
		}

		setName('');
		setDate('');
	};

	// console.log(STUDENTS);

	React.useEffect(() => {
		if (name && date) {
			setIsDisabled(false);
		}
	}, [name, date]);

	return (
		<form
			onSubmit={submitHandler}
			className="my-50 layout-row align-items-end justify-content-end"
		>
			<label htmlFor="studentName">
				Student Name:
				<div>
					<input
						id="studentName"
						data-testid="studentName"
						type="text"
						className="mr-30 mt-10"
						value={name}
						onChange={(e) => handleChange(e, 'text')}
					/>
				</div>
			</label>
			<label htmlFor="joiningDate">
				Joining Date:
				<div>
					<input
						id="joiningDate"
						data-testid="joiningDate"
						type="date"
						value={date}
						className="mr-30 mt-10"
						onChange={(e) => handleChange(e, 'date')}
					/>
				</div>
			</label>
			<button
				disabled={isDisabled}
				type="submit"
				data-testid="addBtn"
				className="small mb-0"
			>
				Add
			</button>
		</form>
	);
}

export default Search;
