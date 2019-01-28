/* eslint class-methods-use-this: 0 */
const { RESTDataSource } = require('apollo-datasource-rest')
const { sequences } = require('./data.json')

class SequenceAPI extends RESTDataSource {
  async getAllSequences() {
    return sequences && sequences.length ? sequences.map(l => this.sequenceReducer(l)) : []
  }

  sequenceReducer(sequence) {
    return {
      value: sequence.value,
    }
  }
}

module.exports = SequenceAPI
