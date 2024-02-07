import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsPage from './pages/ProductsPage';
import { render, router } from './utilities/index.js';

router.on('/', () => {
  render(HomePage, app);
});

router.on('/about', () => {
  render(AboutPage, app);
});

router.on('/products', () => {
  render(ProductsPage, app);
});

router.on('/products/:id', ({ data }) => {
  console.log(data);
  render(() => ProductDetailPage(data), app);
});

router.notFound(() => {
  render(NotFoundPage, app);
});

router.resolve();
