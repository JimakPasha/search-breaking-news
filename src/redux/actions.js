import axios from '../services/api';

export const RESET_STATE = 'RESET_STATE';
export const REQUEST_NEWS = 'REQUEST_NEWS';
export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export const RECEIVE_NEWS_DETAILS = 'RECEIVE_NEWS_DETAILS';
export const FAIL_GETTING_NEWS = 'FAIL_GETTING_NEWS';
export const SEARCH_VALUE = 'SEARCH_VALUE';
export const TITLE_DETAILS = 'TITLE_DETAILS';

export function reset() {
	return { type: RESET_STATE };
}

export function fetchNews() {
	return { type: REQUEST_NEWS };
}

export function receiveNews(news, pages) {
	return { type: RECEIVE_NEWS, news, pages };
}

export function receiveNewsDetails(news) {
	return { type: RECEIVE_NEWS_DETAILS, news };
}

export function failGettingNews() {
	return { type: FAIL_GETTING_NEWS };
}

export function inputSearch(searchValue) {
	return { type: SEARCH_VALUE, searchValue };
}

export function setTitleDetails(titleDetails) {
	return { type: TITLE_DETAILS, titleDetails };
}

export function getNews(searchValue, sortBy, pageSize, page) {
	return function(dispatch) {
		dispatch(fetchNews());
		return axios
			.get(`/everything?q=${searchValue}&sortBy=${sortBy}&apiKey=9b77a5968eb64f209b33b91387731422&pageSize=${pageSize}&page=${page}`)
			.then(
				(res) => dispatch(receiveNews(res.data.articles, Math.ceil(res.data.totalResults / pageSize))),
				(error) => dispatch(failGettingNews())
			);
	};
}

export function getNewsDetails(titleDetails) {
	return function (dispatch) {
		dispatch(setTitleDetails(titleDetails));
		dispatch(fetchNews());
		return axios
			.get(`/everything?q=${titleDetails}&apiKey=9b77a5968eb64f209b33b91387731422&pageSize=${1}&page=${1}`)
			.then(
				(res) => dispatch(receiveNewsDetails(res.data.articles)),
				(error) => dispatch(failGettingNews())
			);
	};
}




//75ef4b8ac70542e0901bc9c8663c8ee4