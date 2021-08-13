import React, { useState } from 'react';
import PanelForm from '../../panelForm/panelForm';
import News from '../../news/news';
import './home.scss';

const Home = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState();

	return (
		<div className="home">
			<PanelForm setData={setData} setLoading={setLoading} />
			<News data={data} loading={loading} />
		</div>
	);
};

export default Home;
