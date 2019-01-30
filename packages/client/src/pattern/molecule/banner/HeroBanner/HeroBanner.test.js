import heroBannerDefault from './HeroBanner.render'

describe('<HeroBanner />', () => {
  describe('Snaphot', () => {
    test('must match heroBannerDefault', () => {
      expect(global.renderToJSON(heroBannerDefault)).toMatchSnapshot()
    })
  })
})
