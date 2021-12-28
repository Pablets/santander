import React from 'react';

function Error({ msg = '' }) {
	return (
		<div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
			{msg}
		</div>
	);
}

export default Error;
