import unsplashTestData from '../../data/unsplash-search.json'

// Enable this during development to make this _a lot more pleasant_!
const USE_FAKE_API = false
const CLIENT_ID = 'XItB8gnB5YUQD-ThP8V6Vi7HU4sJiv8Blhrm7N69aGs'

function unsplashSearchURL(query, page = 1, perPage = 24) {
  return `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=${perPage}&client_id=${CLIENT_ID}`
}

export function search(query) {
  if (USE_FAKE_API) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(unsplashTestData)
      }, 1500)
    })
  }

  return fetch(unsplashSearchURL(query, 1)).then((response) => response.json())
}
