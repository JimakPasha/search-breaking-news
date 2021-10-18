import React from 'react';
import PanelForm from '../../components/searchPanel/searchPanel';
import News from '../../components/news/news';
import './home.scss';

const Home = () => {
	return (
		<div className="home">
			<PanelForm />
			<News />
		</div>
	);
};

export default Home;
