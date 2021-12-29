import React from 'react';
import {
	render,
	cleanup,
	fireEvent,
	waitForElement,
	getAllByTestId,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Item from './Item';

describe('Input', () => {
	afterEach(() => {
		cleanup();
	});
	it('Should render nothing by default', () => {
		const { getAllByTestId } = render(<Item />);

		waitForElement(() => {
			expect(getAllByTestId('listitem')).toBeEmptyDOMElement();
		});
	});

	it('Should have textconten equal to "value" prop', () => {
		const value = 'some random text';
		const { getAllByTestId } = render(<Item value={value} />);

		waitForElement(() => {
			expect(getAllByTestId('listitem')).toHaveTextContent(value);
		});
	});
});
