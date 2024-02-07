import { useEffect, useState } from 'react';
import AboutApi from '../../api/AboutApi';
import AboutComponent from '../../components/client/AboutComponent';

function AboutPage() {
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
			<AboutComponent about={about} />
		</>
	);
}

export default AboutPage;
