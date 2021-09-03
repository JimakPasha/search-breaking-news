import React, { useState } from 'react';
import PanelForm from '../panelForm/panelForm';
import News from '../news/news';
import './app.scss';
import './reset.scss';
import './global.scss';

const App = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState();

	return (
		<div className="container">
			<PanelForm setData={setData} setLoading={setLoading} />
			<News data={data} loading={loading} />
		</div>
	);
};

export default App;
