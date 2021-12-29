import React from 'react';
import {
	render,
	cleanup,
	fireEvent,
	waitForElement,
	getAllByTestId,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Label from './Label';

describe('Input', () => {
	afterEach(() => {
		cleanup();
	});
	it('Should render nothing by default', () => {
		const { getAllByTestId } = render(<Label />);

		waitForElement(() => {
			expect(getAllByTestId('listitem')).toBeEmptyDOMElement();
		});
	});

	it('Should have textconten equal to "labelText" prop', () => {
		const labelText = 'some random text';
		const { getAllByTestId } = render(<Label labelText={labelText} />);

		waitForElement(() => {
			expect(getAllByTestId('listitem')).toHaveTextContent(labelText);
		});
	});
});
