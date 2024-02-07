import { useEffect, useState } from 'react';
import SkillsComponent from '../../components/client/SkillsComponent';
import SkillsApi from '../../api/SkillsApi';

function SkillPage() {
	const [skill, setSkill] = useState([]);

	useEffect(() => {
		getSkill();
	}, []);

	const getSkill = async () => {
		// call api
		const data = await SkillsApi.get();
		// using data
		setSkill(data);
	};
	return (
		<>
			<SkillsComponent skill={skill} />
		</>
	);
}
export default SkillPage;
