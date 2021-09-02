import React from "react";
import axios from "axios";
import { render, screen, getByText, fireEvent, findByText } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import About from '../src/components/pages/about/about';
import ErrorPage from '../src/components/pages/errorPage/errorPage';
import Header from '../src/components/header/header';
import App from '../src/components/app/app';
import store from '../src/redux/store';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from "history";
import PanelForm from "../src/components/panelForm/panelForm";
import { Router } from "react-router";
import { Provider } from "react-redux";
import reducer from "../src/redux/reducer";

const renderWithRedux = (
	component,
	{ initialState, store = createStore(reducer, initialState)}
) => {
	return {
		...render(<Provider store={store}>{component}</Provider>),
		store,
	}
}

describe('Redux testing:', () => {
	it('checks initial state ', () => {
		const { getByTestId } = renderWithRedux(<PanelForm />);
		expect(getByTestId('search-input')).toHaveValue('');
	})
})





describe('React router testing:', () => {
	it('should render the home page', () => {
		const history = createMemoryHistory();
		const { container, getByText } = render(
			<Provider store={store}>
				<Router history={history}>
					<Header />
					<PanelForm />
				</Router>
			</Provider>
		);
		expect(container.innerHTML).toMatch('Relevancy');
		expect(getByText(/Home/i));
	})
	it('should navigate to page about', () => {
		const history = createMemoryHistory();
		const { container } = render(
			<Provider store={store}>
				<Router history={history}>
					<Header />
					<PanelForm />
					<About />
				</Router>
			</Provider>
		);
		fireEvent.click(screen.getByText('about'));
		expect(container.innerHTML).toMatch('JimakPasha');
	})
	it('should navigate to error page if route is wrong', () => {
		const history = createMemoryHistory();
		history.push('wrong-route');
		const { container } = render(
			<Provider store={store}>
				<Router history={history}>
					<Header />
					<ErrorPage />
				</Router>
			</Provider>
		);
		expect(container.innerHTML).toMatch('Oops... Error 404');
	})
})

describe('Error component testing:', () => {
	it('should text:', () => {
		render(<ErrorPage />);
		expect(screen.getByText(/Oops... Error 404/i)).toBeInTheDocument();
	})
	it('should text:', () => {
		render(<ErrorPage />);
		expect(screen.getByText(/This page not found :/i)).toBeInTheDocument();
	})
})

describe('About component testing:', () => {
	it('should text:', () => {
		render(<About />);
		expect(screen.getByText(/In this application, you can use the search bar and find the latest news./i)).toBeInTheDocument();
		expect(screen.getByText(/In this application, you can use the search bar and find the latest news./i)).toHaveClass('about__text');
	});
	it('should title:', () => {
		render(<About />);
		expect(screen.getByText(/Since api is free, there are some features:/i)).toBeInTheDocument();
		expect(screen.getByText(/Since api is free, there are some features:/i)).toHaveClass('about__peculiarities-title');
	});
	it('should peculiarities-item:', () => {
		render(<About />);
		expect(screen.getByText(/- Returns only the first 100 news -/i)).toBeInTheDocument();
		expect(screen.getByText(/- Returns only the first 100 news -/i)).toHaveClass('about__peculiarities-item');
	});
	it('should peculiarities-item:', () => {
		render(<About />);
		expect(screen.getByText(/- You can make 100 requests within 12 hours -/i)).toBeInTheDocument();
		expect(screen.getByText(/- You can make 100 requests within 12 hours -/i)).toHaveClass('about__peculiarities-item');
	});
	it('should peculiarities-item:', () => {
		render(<About />);
		expect(screen.getByText(/- On the details-page, the content of the article is incomplete -/i)).toBeInTheDocument();
		expect(screen.getByText(/- On the details-page, the content of the article is incomplete -/i)).toHaveClass('about__peculiarities-item');
	});
	it('should text before gihub', () => {
		render(<About />);
		expect(screen.getByText(/This application is made by JimakPasha. My/i)).toBeInTheDocument();
		expect(screen.getByText(/This application is made by JimakPasha. My/i)).toHaveClass('about__text');
	});
	it('gihub', () => {
		render(<About />);
		expect(screen.getByText(/gihub/i)).toBeInTheDocument();
		expect(screen.getByText(/gihub/i)).toHaveClass('about__link');
	});
	it('should text thanks', () => {
		render(<About />);
		expect(screen.getByText(/Thanks to for providing the api./i)).toBeInTheDocument();
		expect(screen.getByText(/Thanks to for providing the api./i)).toHaveClass('about__text');
	});
	it('thank you to whom', () => {
		render(<About />);
		expect(screen.getByText(/newsapi/i)).toBeInTheDocument();
		expect(screen.getByText(/newsapi/i)).toHaveClass('about__link');
	});
	it('should text who made app', () => {
		render(<About />);
		expect(screen.getByText(/This application is made by JimakPasha. My/i)).toBeInTheDocument();
		expect(screen.getByText(/This application is made by JimakPasha. My/i)).toHaveClass('about__text');
	});
	it('should role link', () => {
		render(<About />);
		expect(screen.getAllByRole('link')[0]).toBeInTheDocument();
	})
	it('should role link', () => {
		render(<About />);
		expect(screen.getAllByRole('link')[1]).toBeInTheDocument();
	})
});










































































// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// 	---------------------------------------------------------------------------------------------

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