import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import { checkValidity, validateName } from '../lib/validators';
// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function Search({ addToResident, notifyError }) {
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
			notifyError(`Sorry, ${name} is not a verified student!`);
		} else {
			let studentValidated = checkValidity(date, filteredStudent?.validityDate);

			if (!studentValidated) {
				notifyError(`Sorry, ${name}'s validity has Expired!`);
			} else {
				addToResident(filteredStudent);
			}
		}

		setName('');
		setDate('');
		setIsDisabled(true);
	};

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
			<Label labelText={'Student Name:'} labelFor={'studentName'}>
				<Input
					id={'studentName'}
					testid={'studentName'}
					type={'text'}
					value={name}
					callback={handleChange}
				/>
			</Label>
			<Label labelText={'Joining Date:'} labelFor={'joiningDate'}>
				<Input
					id={'joiningDate'}
					testid={'joiningDate'}
					type={'date'}
					value={date}
					callback={handleChange}
				/>
			</Label>
			<Button isDisabled={isDisabled} />
		</form>
	);
}

export default Search;
