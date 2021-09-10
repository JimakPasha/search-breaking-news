import React from 'react';
import PanelForm from '../../panelForm/panelForm';
import News from '../../news/news';
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
