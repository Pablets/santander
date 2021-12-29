import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Error from './Error';

describe('Input', () => {
	afterEach(() => {
		cleanup();
	});
	it('Should be empty by default', () => {
		const { getAllByTestId } = render(<Error />);

		waitForElement(() => {
			expect(getAllByTestId('listitem')).toBeEmptyDOMElement();
		});
	});

	it('Should have textconten equal to "msg" prop', () => {
		const msg = 'some random text';
		const { getAllByTestId } = render(<Error msg={msg} />);

		waitForElement(() => {
			expect(getAllByTestId('listitem')).toHaveTextContent(msg);
		});
	});
});
