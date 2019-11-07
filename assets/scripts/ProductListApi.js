import { PRODUCTS_API_URL } from './constants';

export function getProductList() {
  return new Promise((resolve, reject) => {
    fetch(PRODUCTS_API_URL)
    .then((res) => res.json())
    .then((products) => resolve(products))
    .catch((err) => reject(err))
  })
}

export function getProductStats(id) {
  return new Promise((resolve, reject) => {
    fetch(`${PRODUCTS_API_URL}/${id}/stats`)
    .then((res) => res.json())
    .then((stats) => resolve(Object.assign({ id }, stats)))
    .catch((err) => reject(err))
  })
}
