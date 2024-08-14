import React from "react";

async function getData(id: string) {
  if (!Number(id)) return {};
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return product;
}
const ProductDetail = async (props: { params: { slug: string } }) => {
  const { params } = props;
  const product = await getData(params.slug);
  console.log(product);

  return (
    <div>
      <div>ProductDetail</div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
        </div>
      ) : (
        <p>Cannot find Product what your search</p>
      )}
    </div>
  );
};

export default ProductDetail;
