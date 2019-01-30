import sequenceDefault from './Sequence.render'

describe('<Sequence />', () => {
  describe('Snaphot', () => {
    test('must match sequenceDefault', () => {
      expect(global.renderToJSON(sequenceDefault)).toMatchSnapshot()
    })
  })
})
