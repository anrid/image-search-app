import unsplashTestData from '../../data/unsplash-search.json'

const USE_FAKE_API = false
const CLIENT_ID = 'XItB8gnB5YUQD-ThP8V6Vi7HU4sJiv8Blhrm7N69aGs'

function unsplashSearchURL(query, page = 1) {
  return `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${CLIENT_ID}`
}

export function search(query) {
  if (USE_FAKE_API) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(unsplashTestData.results)
      }, 1500)
    })
  }

  return fetch(unsplashSearchURL(query, 1))
    .then((response) => response.json())
    .then((data) => data.results)
}
