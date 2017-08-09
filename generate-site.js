require('isomorphic-fetch');

generator = () => {
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
  return json = fetch('https://app.scrap24.com/api/v1/products')
  .then (function(res) {
    return res.json();
  })
  .then(function(json) {
    json.forEach(p => {
      pages[`/product/${p.slug}`] = {
        page: '/product',
        query: {
          productId: p.id
        }
      }
    });
    return pages
  });
}