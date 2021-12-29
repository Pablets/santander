import React from 'react';

const Input = ({
	id = '',
	testid = '',
	type = '',
	value = '',
	className = 'mr-30 mt-10',
	callback = console.log,
}) => {
	return (
		<input
			id={id}
			data-testid={testid}
			type={type}
			value={value}
			className={className}
			onChange={(e) => callback(e, type)}
		/>
	);
};

export default Input;
