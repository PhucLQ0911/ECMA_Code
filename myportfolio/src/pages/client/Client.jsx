import FooterComponent from '../../components/client/FooterComponent';
import NavbarComponent from '../../components/client/NavbarComponent';
import AboutPage from './About';
import ContactPage from './Contact';
import HeroPage from './Hero';
import ProjectPage from './Project';
import SkillPage from './Skill';

function Client() {
	return (
		<>
			<NavbarComponent />
			<HeroPage />
			<AboutPage />
			<SkillPage />
			<ProjectPage />
			<ContactPage />
			<FooterComponent />
		</>
	);
}

export default Client;
