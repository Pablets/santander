import React from 'react';
import {
	render,
	cleanup,
	fireEvent,
	waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';

describe('Input', () => {
	afterEach(() => {
		cleanup();
	});
	it('Should execute the callback', () => {
		const callback = jest.fn();
		const testid = 'randomID';
		const randomText = 'random text';
		const { getByTestId } = render(<Input id={testid} callback={callback} />);

		fireEvent.change(getByTestId(testid), { target: { value: randomText } });

		expect(callback).toHaveBeenCalled();
	});

	it('Should be a controlled component and display the "value" prop', () => {
		const testid = 'randomID';
		let randomText = 'random text';
		const { getByTestId } = render(
			<Input testid={testid} value={randomText} />
		);
		waitForElement(() => {
			expect(getByTestId(testid)).toHaveTextContent(randomText);
		});
	});
});
