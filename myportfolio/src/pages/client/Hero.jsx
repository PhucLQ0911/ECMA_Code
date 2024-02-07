import { useEffect, useState } from 'react';
import HeroComponent from '../../components/client/HeroComponent';
import AboutApi from '../../api/AboutApi';

function HeroPage() {
	const [about, setAbout] = useState([]);

	useEffect(() => {
		getAbout();
	}, []);

	const getAbout = async () => {
		// call api
		const data = await AboutApi.get();
		// using data
		setAbout(data);
	};

	return (
		<>
			<HeroComponent about={about} />
		</>
	);
}
export default HeroPage;
