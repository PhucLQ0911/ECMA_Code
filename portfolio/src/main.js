import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Portfolios from './components/Portfolios';
import Skills from './components/Skills';
import { render } from './utilities';

const app = document.querySelector('#app');

render(NavBar, app);
render(Hero, app);
render(About, app);
render(Skills, app);
render(Portfolios, app);
render(Contact, app);
render(Footer, app);

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('bg-slate-800', window.scrollY > 0);
});
