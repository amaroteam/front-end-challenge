/**
 * Products
 */
export function all () {
  return fetch('http://localhost:8080/products')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
}

export function handleImage (image) {
  return image || 'http://placehold.it/350x450/ffffff?text=:/'
}
