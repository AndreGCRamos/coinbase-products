import { PRODUCTS_API_URL } from './constants';

function getProductList() {
  return new Promise((resolve, reject) => {
    fetch(PRODUCTS_API_URL)
    .then((res) => res.json())
    .then((products) => resolve(products))
    .catch((err) => reject(err))
  })
}

function getIndividualStats(id) {
  return new Promise((resolve, reject) => {
    fetch(`${PRODUCTS_API_URL}/${id}/stats`)
    .then((res) => res.json())
    .then((stats) => resolve(Object.assign({ id }, stats)))
    .catch((err) => reject(err))
  })
}

export function getAllStats(func) {
  getProductList().then((list) => {
    let i = 0;

    setInterval(() => {
      if (i < list.length) {
        getIndividualStats(list[i].id).then((stats) => func(stats));
        i++;
      }
    }, 300);
  });
}
