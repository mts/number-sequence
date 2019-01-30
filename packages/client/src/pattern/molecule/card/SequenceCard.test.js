import sequenceCardDefault from './SequenceCard.render'

describe('<SequenceCard />', () => {
  describe('Snaphot', () => {
    test('must match sequenceCardDefault', () => {
      expect(global.renderToJSON(sequenceCardDefault)).toMatchSnapshot()
    })
  })
})
