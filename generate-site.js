require('isomorphic-fetch');

generator = async () => {
  const pages = {}
  //generating home page
  pages['/'] = {
    page: '/'
  }
  //generating list of products page
  pages['/products'] = {
    page: '/products'
  }

  //generating individual product page
  const res = await fetch('https://app.scrap24.com/api/v1/products');
  const json = await res.json();

  json.forEach(p => {
    pages[p.slug] ={
      page: '/product',
      query: {
        productId: p.id
      }
    }
  });

  return pages
}