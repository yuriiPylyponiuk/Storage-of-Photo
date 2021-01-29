import API from "./index";

export async function getAllProduct(payload) {
  const resp = await API.get('/v2/list', {
    params: {
      limit: 10,
      ...payload
    }
  })
  return resp
}

export async function getRandomPhoto() {
  const resp = await API.get('/500/400', {
      params: { }
    })
  return resp
}