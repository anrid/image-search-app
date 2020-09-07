import { types, flow } from 'mobx-state-tree'
import { Image } from './image'
import * as API from '../api/api'

export const Search = types
  .model({
    total: types.number,
    total_pages: types.number,
    query: types.string,
    state: types.enumeration('State', ['pending', 'done', 'error']),
    images: types.array(Image),
  })
  .actions((self) => ({
    search: flow(function* search(query) {
      self.query = query

      // Search only if there's a query.
      if (self.query !== '') {
        console.log('Image search query:', query)
        self.state = 'pending'

        try {
          const result = yield API.search(self.query)
          console.log(
            `Image search completed: found ${result.total} images and ${result.total_pages} pages`
          )

          self.total = result.total
          self.total_pages = result.total_pages
          self.images = result.results

          self.state = 'done'
        } catch (error) {
          console.error('Image search failed:', error)
          self.state = 'error'
        }
      }
    }),
    addImage(image) {
      let found = self.images.find((x) => x.id === image.id)
      if (!found) {
        self.images.push(image)
      }
    },
  }))
