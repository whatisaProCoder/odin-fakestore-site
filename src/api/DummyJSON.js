import { productLimitPerPage } from "../constants/productLimitPerPage"

function DummyJSON() {
  const baseURL = "https://dummyjson.com/products"

  function getProductByID(id) {
    return new Promise((resolve, reject) => {
      fetch(`${baseURL}/${id}`)
        .then(res => {
          if (res.ok) { return res.json() }
          else { reject(new Error(`status code : ${res.status}`)) }
        })
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  }

  function searchProduct(key) {
    return new Promise((resolve, reject) => {
      const URI = encodeURI(key)
      fetch(`${baseURL}/search?q=${URI}`)
        .then(res => {
          if (res.ok) { return res.json() }
          else { reject(new Error(`status code : ${res.status}`)) }
        })
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  }

  function getProductsByPage(pageNumber) {
    return new Promise((resolve, reject) => {
      if (pageNumber < 1)
        return reject(new Error("page number invalid"))

      fetch(`${baseURL}?limit=${productLimitPerPage}&skip=${productLimitPerPage * (pageNumber - 1)}`)
        .then(res => {
          if (res.ok) { return res.json() }
          else { reject(new Error(`status code : ${res.status}`)) }
        })
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  }

  function getAllCategories() {
    return new Promise((resolve, reject) => {
      fetch(`${baseURL}/categories`)
        .then(res => {
          if (res.ok) { return res.json() }
          else { reject(new Error(`status code : ${res.status}`)) }
        })
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  }

  function getProductsByCategory({ categorySlug, pageNumber }) {
    return new Promise((resolve, reject) => {
      fetch(`${baseURL}/category/${categorySlug}?limit=${productLimitPerPage}&skip=${productLimitPerPage * (pageNumber - 1)}`)
        .then(res => {
          if (res.ok) { return res.json() }
          else { reject(new Error(`status code : ${res.status}`)) }
        })
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  }

  return { getProductByID, searchProduct, getProductsByPage, getAllCategories, getProductsByCategory }
}

export default DummyJSON