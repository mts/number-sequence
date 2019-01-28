/* eslint class-methods-use-this: 0 */
const { RESTDataSource } = require('apollo-datasource-rest')
// const { sequences } = require('./data.json')
const { getSequences } = require('./number-sequence')

class SequenceAPI extends RESTDataSource {
  async getAllSequences() {
    const sequences = getSequences(1)
    return sequences && sequences.length ? sequences.map(l => this.sequenceReducer(l)) : []
  }

  sequenceReducer(sequence) {
    return {
      numbers: sequence.numbers,
    }
  }
}

module.exports = SequenceAPI
