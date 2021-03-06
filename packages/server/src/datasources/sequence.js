/* eslint class-methods-use-this: 0 */
const { RESTDataSource } = require('apollo-datasource-rest')
const { getSequences } = require('./number-sequence')

class SequenceAPI extends RESTDataSource {
  async getAllSequences(sequenceCount) {
    const sequences = getSequences({ sequenceSeedValue: 1, sequenceCount })
    return sequences && sequences.length ? sequences.map(l => this.sequenceReducer(l)) : []
  }

  sequenceReducer(sequence) {
    return {
      numbers: sequence.numbers,
    }
  }
}

module.exports = SequenceAPI
