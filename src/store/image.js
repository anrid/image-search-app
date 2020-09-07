import { types } from 'mobx-state-tree'

export const Image = types
  .model('Image', {
    id: types.string,
    urls: types.model({
      raw: types.string,
      regular: types.string,
      small: types.string,
      thumb: types.string,
    }),
    links: types.model({
      self: types.string,
      html: types.string,
      download: types.string,
      download_location: types.string,
    }),
    width: types.number,
    height: types.number,
    alt_description: types.maybeNull(types.string),
    user: types.model({
      id: types.string,
      username: types.string,
      name: types.string,
      bio: types.maybeNull(types.string),
      links: types.model({
        self: types.string,
        html: types.string,
      }),
      profile_image: types.model({
        small: types.string,
      }),
    }),
  })
  .actions((self) => ({
    toggle() {
      self.done = !self.done
    },
  }))
