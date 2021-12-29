import React from 'react';

const ListItem = ({ value = '', className = 'slide-up-fade-in' }) => {
	return (
		<li data-testid={'listitem'} className={className}>
			{value}
		</li>
	);
};

export default ListItem;
