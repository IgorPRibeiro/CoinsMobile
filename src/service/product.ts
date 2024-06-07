import API from './api'

export async function getAllProducts() {
  return await API.get(`/products`)
}

export async function getAllProducts2() {
  return await API.get(`/products2`)
}