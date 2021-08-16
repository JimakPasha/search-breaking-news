import React, { useState, useEffect } from 'react';
import PanelForm from '../../panelForm/panelForm';
import News from '../../news/news';
import './home.scss';

const Home = ({ setPpp2 }) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState();
	const [ppp, setPpp] = useState({});

	useEffect(() => {
		setPpp2(ppp);
	}, [ppp]);

	return (
		<div className="home">
			<PanelForm setData={setData} setLoading={setLoading} />
			<News setPpp={setPpp} data={data} loading={loading} />
		</div>
	);
};

export default Home;
