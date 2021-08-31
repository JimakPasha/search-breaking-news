import React from "react";
import axios from "axios";
import { render, screen, getByText } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
// import PagesAll from '../src/components/app/app';
import About from '../src/components/pages/about/about';

import '@testing-library/jest-dom/extend-expect';

describe('About test:', () => {
	it('should text:', () => {
		render(<About />);
		expect(screen.getByText(/In this application, you can use the search bar and find the latest news./i)).toBeInTheDocument();
	});
	it('should title:', () => {
		render(<About />);
		expect(screen.getByText(/Since api is free, there are some features:/i)).toBeInTheDocument();
	});
	it('should peculiarities-item:', () => {
		render(<About />);
		expect(screen.getByText(/- Returns only the first 100 news -/i)).toBeInTheDocument();
	});
		it('should peculiarities-item:', () => {
		render(<About />);
		expect(screen.getByText(/- You can make 100 requests within 12 hours -/i)).toBeInTheDocument();
	});
	it('should peculiarities-item:', () => {
		render(<About />);
		expect(screen.getByText(/- On the details-page, the content of the article is incomplete -/i)).toBeInTheDocument();
	});
	it('should text before gihub', () => {
		render(<About />);
		expect(screen.getByText(/This application is made by JimakPasha. My/i)).toBeInTheDocument();
	});
		it('gihub', () => {
		render(<About />);
			expect(screen.getByText(/gihub/i)).toBeInTheDocument();
	});
	it('should text thanks', () => {
		render(<About />);
		expect(screen.getByText(/Thanks to for providing the api./i)).toBeInTheDocument();
	});
	it('thank you to whom', () => {
		render(<About />);
		expect(screen.getByText(/newsapi/i)).toBeInTheDocument();
	});
	it('should text who made app', () => {
		render(<About />);
		expect(screen.getByText(/This application is made by JimakPasha. My/i)).toBeInTheDocument();
	});
});


// describe('About test:', () => {
// 	it('should text:', () => {
// 		const { getByTestId } = render(<About />);
// 		const linkHome = getByTestId("ttt");
// 		expect(getByText('In this application')).toBeInTheDocument();
// 	});
// });






// describe('Header test:', () => {
// 	it('should text home', () => {
// 		const { getByTestId } = render(<PagesAll />);
// 		const linkHome = getByTestId("home-link");
// 		expect(getByText('Home')).toBeInTheDocument();
// 	});
// });















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