import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

const InputWithLabel = (props) => {
	return (
		<>
			<Label labelText={props.labelText} labelFor={props.id}>
				<Input {...props} />
			</Label>
		</>
	);
};

export default InputWithLabel;
