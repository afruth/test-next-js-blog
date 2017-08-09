import React from 'react';
import Link from 'next/link';
import 'isomorphic-fetch';

const ProductPage = ({product}) => {
  return (<div>
    <h3>{product.name}</h3>
    <p dangerouslySetInnerHTML={{__html: product.description}}/>
    <div><Link href="/products">Back to list</Link></div>
  </div>)
}

ProductPage.getInitialProps = async({query}) => {
  const res = await fetch('https://app.scrap24.com/api/v1/products/' + query.productId);
  const json = await res.json();
  return {product: json[0]};
}

export default ProductPage;