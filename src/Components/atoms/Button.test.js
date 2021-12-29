import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button', () => {
	afterEach(() => {
		cleanup();
	});
	it('Should be disabled by default', () => {
		const { getByTestId } = render(<Button />);

		expect(getByTestId('addBtn')).toBeDisabled();
	});

	it('Should display the text given in the prop "text"', () => {
		const text = 'some random text';
		const { getByTestId } = render(<Button text={text} />);

		expect(getByTestId('addBtn')).toHaveTextContent(text);
	});
});
