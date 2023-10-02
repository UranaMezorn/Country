import { useEffect, useState } from 'react';
import axios from 'axios';

import { Card } from './components/CountryCard';

function App() {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		const { data } = axios.get('https://restcountries.com/v3.1/all');
		setCountries([...data]);
	};

	return (
		<div className='app'>
			{countries.map((data, index) => {
				return (
					<Card
						key={index}
						data={data}
					/>
				);
			})}
		</div>
	);
}

export default App;
