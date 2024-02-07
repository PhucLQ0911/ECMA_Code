import ProductList from '@/components/ProductList';
import { products } from '@/data';

const ProductsPage = () => {
  return `<div class="tw-container">
            <div class="tw-row">
             ${ProductList({ products })}
            </div>
          </div>`;
};

export default ProductsPage;
