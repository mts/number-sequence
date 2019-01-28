/* eslint class-methods-use-this: 0 */
const { RESTDataSource } = require('apollo-datasource-rest')
const { sequences } = require('./data.json')

class SequenceAPI extends RESTDataSource {
  async getAllSequences() {
    return sequences && sequences.length ? sequences.map(l => this.sequenceReducer(l)) : []
  }

  sequenceReducer(sequence) {
    return {
      numbers: sequence.numbers,
    }
  }
}

module.exports = SequenceAPI
