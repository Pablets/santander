import React from 'react';

const ListItem = ({ value = '' ,index, className = 'slide-up-fade-in' }) => {
	return (
		<li className={className}>
			{value}
		</li>
	);
};

export default ListItem;
