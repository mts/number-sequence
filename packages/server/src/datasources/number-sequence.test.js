const { getSequences } = require('./number-sequence')

const oneSequenceList = [{ numbers: [1] }]
const twoSequenceList = [{ numbers: [1] }, { numbers: [1, 1] }]
const fiveSequenceList = [
  { numbers: [1] },
  { numbers: [1, 1] },
  { numbers: [1, 2, 1] },
  { numbers: [1, 3, 3, 1] },
  { numbers: [1, 4, 6, 4, 1] },
]

describe('number-sequence', () => {
  describe('getSequences()', () => {
    test('must calculate sequences with given sequenceSeedValue and given sequenceCount', () => {
      const sequences = getSequences({ sequenceSeedValue: 1, sequenceCount: 1 })
      expect(sequences).toEqual(oneSequenceList)
    })

    test('must calculate sequences with default sequenceSeedValue and given sequenceCount', () => {
      const sequences = getSequences({ sequenceCount: 2 })
      expect(sequences).toEqual(twoSequenceList)
    })

    test('must calculate sequences with given sequenceSeedValue and default sequenceCount', () => {
      const sequences = getSequences({ sequenceSeedValue: 1 })
      expect(sequences).toEqual(fiveSequenceList)
    })

    test('must calculate sequences with default sequenceSeedValue and default sequenceCount', () => {
      const sequences = getSequences({})
      expect(sequences).toEqual(fiveSequenceList)
    })
  })
})
