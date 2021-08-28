import React from "react";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { PagesAll } from '../src/components/app/app';
import '@testing-library/jest-dom/extend-expect';

describe('Header test:', () => {
	it('should text home', () => {
		const { getByTestId } = render(<PagesAll />);
		const linkHome = getByTestId("home-link");
		expect(getByText('Home')).toBeInTheDocument();
	});
});















// describe('Test component testing:', () => {
// 	it('test', () => {
// 		render(<ForTest />);
// 		expect(screen.getByText(/text2/i)).toBeInTheDocument();
// 	});

// 	it('test', () => {
// 		render(<ForTest />);
// 		expect(screen.getByText(/text1/i)).toBeInTheDocument();
// 	});

// 	it('test', () => {
// 		render(<ForTest />);
// 		expect(screen.getByText(/text1/i)).toBeInTheDocument();
// 	});
// });








// import PanelForm from '../src/components/panelForm/panelForm';
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

// jest.mock('../src/components/panelForm/panelForm');

// // describe('PanelForm testing:', () => {
// // 	it('asdasd', () => {
// // 		let el = render(PanelForm());
// // 		let innerEl = el.queryByTestId('test-btn');
// // 		expect(innerEl.textContent).toBe('Relevancy');
// // 	});

// 	// describe('PanelForm testing:', () => {
// 	// 	it('asdasd', () => {
// 	// 		let el = render(PanelForm());
// 	// 		let innerEl = el.queryByTestId('test-btn');
// 	// 		expect(innerEl.textContent).toBe('Relevancy');
// 	// 	});

// describe('PanelForm testing:', () => {
// 	it('asdasd', () => {
// 		render(<PanelForm />);
// 		expect(screen.getByText(/Relevancy/i)).toBeInTheDocument();
// 	});

// 	it("renders component", () => {
// 		render(PanelForm());
// 		expect(screen.getByText(/Date published/i)).toBeInTheDocument();
// 		expect(screen.getByText(/Popularity/i)).toBeInTheDocument();
// 		expect(screen.getByText(/Relevancy/i)).toBeInTheDocument();
// 		// expect(screen.getByRole('textbox')).toBeInTheDocument();
// 		// expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
// 		// expect(screen.getByPlaceholderText('search text...')).toBeInTheDocument();
// 		// expect(screen.getByAltText('search image')).toBeInTheDocument();
// 		// expect(screen.getByDisplayValue('')).toBeInTheDocument();
// 	});
// });