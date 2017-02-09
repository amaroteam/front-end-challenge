/**
 * Products
 */
function all () {
  return fetch('http://localhost:8080/products')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
}

const Products = {all}

export default Products
