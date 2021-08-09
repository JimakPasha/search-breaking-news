import React, { useState } from 'react';
import SearchPanel from '../searchPanel/searchPanel';
import News from '../news/news';
import './app.scss';
import './reset.scss';
import './global.scss';

const App = () => {
	const [data, setData] = useState([]);
	return (
		<div className="container">
			<SearchPanel setData={setData}/>
			<News data={data} />
		</div>
	)
}

export default App;
