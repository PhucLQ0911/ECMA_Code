import { products } from '@/data';

const ProductDetailPage = ({ id }) => {
  console.log(`Id : ${id}`);
  const product = products.find((product) => product.id === +id);
  console.log(product);
  if (!product) return null;
  return `<div>
            <h3>${product.id}</h3>
            <h3>${product.nameProduct}</h3>
            <h3>${product.price}</h3>
          </div>`;
};

export default ProductDetailPage;
