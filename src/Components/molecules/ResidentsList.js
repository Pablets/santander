import React from 'react';
import Item from '../atoms/Item';

function ResidentsList({ residents }) {
	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				{residents.map((resident, index) => (
					<Item key={'item' + index} value={resident.name} />
				))}
			</ul>
		</div>
	);
}

export default ResidentsList;
