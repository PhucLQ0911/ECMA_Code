import { projects } from '../data';
import Portfolio from './Portfolio.js';
const Portfolios = () => {
  const portfolio = projects.map((project) => Portfolio(project)).join('');
  return `<section class="container" id="portfolio">
            <h3 class="font-bold text-blue-600 text-2xl text-center">PORTFOLIO</h3>
            <h4 class="text-white font-bold text-3xl mt-2 text-center">
              LATEST PROJECT
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
              ${portfolio}
            </div>
          </section>`;
};

export default Portfolios;
