/* eslint import/prefer-default-export: 0 */
import gql from 'graphql-tag'

export const pagesQuery = gql`
  query GetPages {
    pages(pageSize: 10) {
      pages {
        id
        name
      }
    }
  }
`

export const getSequencesQuery = sequenceCount => {
  return gql`
    query GetSequences {
      sequences(sequenceCount: ${sequenceCount}) {
        sequences {
          numbers
        }
      }
    }
  `
}
