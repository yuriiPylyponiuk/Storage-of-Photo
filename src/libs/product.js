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

export async function getFilterOnPhoto(payload) {
  const resp = await API.get('/', {
    params: {
      ...payload
    }
  })
  return resp
}
export async function getFilterOnPhotoById(action) {
  const resp = await API.get(`/id/${action.payload}/1000/800`)
  return resp
}