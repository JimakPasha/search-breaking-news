import React, { useState, useEffect } from 'react';
import PanelForm from '../../panelForm/panelForm';
import News from '../../news/news';
import './home.scss';

const Home = ({ setArticleDetailsItem }) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState();
	const [articleDetails, setArticleDetails] = useState({});
	const [searchValueData, setSearchValueData] = useState('');

	useEffect(() => {
		setArticleDetailsItem(articleDetails);
	}, [articleDetails]);

	return (
		<div className="home">
			<PanelForm
				setSearchValueData={setSearchValueData}
				setData={setData}
				setLoading={setLoading}
			/>
			<News
				data={data}
				setArticleDetails={setArticleDetails}
				searchValueData={searchValueData}
				loading={loading}
			/>
		</div>
	);
};

export default Home;
