import React from 'react';

const Label = ({ labelText = '', children, labelFor = '' }) => {
	return (
		<label htmlFor={labelFor}>
			{labelText}
			<div>{children}</div>
		</label>
	);
};

export default Label;
