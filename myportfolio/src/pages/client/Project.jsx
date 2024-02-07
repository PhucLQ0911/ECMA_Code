import { useEffect, useState } from 'react';
import ProjectApi from '../../api/ProjectApi';
import ProjectComponent from '../../components/client/ProjectComponent';

function ProjectPage() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		getProjects();
	}, []);

	const getProjects = async () => {
		// call api
		const data = await ProjectApi.get();
		// using data
		setProjects(data);
	};
	return (
		<>
			<ProjectComponent projects={projects} />
		</>
	);
}
export default ProjectPage;
