import React from 'react';

const Button = ({ isDisabled, text = 'Add', type = 'submit' }) => {
	return (
		<button
			disabled={isDisabled}
			type={type}
			data-testid="addBtn"
			className="small mb-0"
		>
			{text}
		</button>
	);
};

export default Button;
