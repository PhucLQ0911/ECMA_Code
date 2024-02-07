import { Route, Routes } from 'react-router-dom';
import Client from './pages/client/Client';
import Admin from './pages/admin/Admin';
import InfoAdminPage from './pages/admin/Info';
import SkillAdminPage from './pages/admin/Skill';
import ProjectAdminPage from './pages/admin/Project';
import ContactAdminPage from './pages/admin/Contact';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Client />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/admin/info" element={<InfoAdminPage />} />
				<Route path="/admin/skills" element={<SkillAdminPage />} />
				<Route path="/admin/projects" element={<ProjectAdminPage />} />
				<Route path="/admin/contacts" element={<ContactAdminPage />} />
			</Routes>
		</>
	);
}
export default App;
