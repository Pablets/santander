import React from 'react';
import Button from '../atoms/Button';
import { checkValidity, validateName } from '../lib/validators';
import InputWithLabel from './InputWithLabel';
// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function Search({ addToResident, handleError }) {
	const [name, setName] = React.useState('');
	const [date, setDate] = React.useState('');
	const [isDisabled, setIsDisabled] = React.useState(true);

	const handleChange = (e, type) => {
		e.preventDefault();
		if (type === 'text') {
			setName(e.target.value);
		}

		if (type === 'date') {
			setDate(e.target.value);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const [filteredStudent] = validateName(name);

		if (!filteredStudent) {
			handleError(`Sorry, ${name} is not a verified student!`);
		} else {
			let studentValidated = checkValidity(date, filteredStudent?.validityDate);

			if (!studentValidated) {
				handleError(`Sorry, ${name}'s validity has Expired!`);
			} else {
				addToResident(filteredStudent);
			}
		}

		setName('');
		setDate('');
		setIsDisabled(true);
	};

	const resetErrorState = React.useCallback(() => {
		handleError(null);
	}, [handleError]);

	React.useEffect(() => {
		if (name && date) {
			setIsDisabled(false);
		} else if (name.length || date.length) {
			resetErrorState();
		}
	}, [name, date, resetErrorState]);

	return (
		<form
			onSubmit={submitHandler}
			className="my-50 layout-row align-items-end justify-content-end"
		>
			<InputWithLabel
				labelText={'Student Name:'}
				id={'studentName'}
				type={'text'}
				value={name}
				callback={handleChange}
			/>
			<InputWithLabel
				labelText={'Joining Date:'}
				id={'joiningDate'}
				type={'date'}
				value={date}
				callback={handleChange}
			/>
			<Button isDisabled={isDisabled} />
		</form>
	);
}

export default Search;
