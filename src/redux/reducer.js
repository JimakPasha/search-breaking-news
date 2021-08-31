import {
	RESET_STATE,
	REQUEST_NEWS,
	RECEIVE_NEWS_DETAILS,
	FAIL_GETTING_NEWS,
	RECEIVE_NEWS,
	SEARCH_VALUE,
} from './actions';

const initialState = {
	data: [],
	dataDetails: {},
	loading: false,
	error: false,
	pages: 0,
	searchValue: '',
};

export default function search(state = initialState, action) {
	switch (action.type) {
		case RESET_STATE:
			return { ...state, data: [], loading: false, error: false, pages: 0 };
		case REQUEST_NEWS:
			return {
				...state,
				data: [],
				dataDetails: {},
				loading: true,
				error: false,
			};
		case RECEIVE_NEWS:
			return {
				...state,
				data: [...action.news],
				loading: false,
				pages: action.pages,
			};
		case RECEIVE_NEWS_DETAILS:
			return {
				...state,
				dataDetails: { ...action.news },
				data: [],
				loading: false,
				pages: 0,
			};
		case FAIL_GETTING_NEWS:
			return { ...state, data: [], loading: false, error: true, pages: 0 };
		case SEARCH_VALUE:
			return { ...state, searchValue: action.searchValue };
		default:
			return state;
	}
}
