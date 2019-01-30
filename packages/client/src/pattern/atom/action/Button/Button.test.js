import buttonDefault from './Button.render'

describe('<Button />', () => {
  describe('Snaphot', () => {
    test('must match buttonDefault', () => {
      expect(global.renderToJSON(buttonDefault)).toMatchSnapshot()
    })
  })
})
