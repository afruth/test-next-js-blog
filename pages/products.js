import React from 'react';
import Link from 'next/link';
import 'isomorphic-fetch';

const ProductsPage = ({products}) => {
  return (<div>
    {products.map(p => <div key={p.id}><Link href={`/product/${p.slug}`}>{p.name}</Link></div>)}
  </div>)
}

ProductsPage.getInitialProps = async({req}) => {
  const res = await fetch('https://app.scrap24.com/api/v1/products');
  const json = await res.json();
  return {products: json};
}

export default ProductsPage;