const productsApiUrl = 'https://api.pro.coinbase.com/products';

export function getProductList() {
  return new Promise((resolve, reject) => {
    fetch(productsApiUrl)
      .then((res) => res.json())
      .then((products) => resolve(products))
      .catch((err) => reject(err))
  })
}

export function getProductStats(id) {
  return new Promise((resolve, reject) => {
  fetch(`${productsApiUrl}/${id}/stats`)
  .then((res) => res.json())
    .then((stats) => resolve(Object.assign({ id }, stats)))
    .catch((err) => reject(err))
  })
}
