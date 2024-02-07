const ProductList = ({ products }) => {
  return `
          ${products
            .map((product) => {
              return `<div class="tw-col">
                          <h2>
                            <a href="/products/${product.id}">
                              ${product.nameProduct}
                            </a>
                          </h2>
                          <span>${product.price}</span>
                      </div>`;
            })
            .join('')}
          `;
};

export default ProductList;
