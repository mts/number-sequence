const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    pages(pageSize: Int, after: String): PageConnection!
    page(id: String!): Page
    sequences(sequenceCount: Int, after: String): SequenceConnection!
  }

  type PageConnection {
    cursor: String!
    hasMore: Boolean!
    pages: [Page]!
  }

  type SequenceConnection {
    cursor: String!
    hasMore: Boolean!
    sequences: [Sequence]!
  }

  type Page {
    id: String!
    name: String!
  }

  type Sequence {
    numbers: [Int]!
  }
`
module.exports = typeDefs
