const { paginateResults } = require('./utils')

module.exports = {
  Query: {
    sequences: async (_, { sequenceCount = 100, after }, { dataSources }) => {
      const allSequences = await dataSources.SequenceAPI.getAllSequences(sequenceCount)
      const sequences = paginateResults({
        after,
        sequenceCount,
        results: allSequences,
      })

      return {
        sequences,
        cursor: sequences.length ? sequences[sequences.length - 1].cursor : null,
        hasMore: sequences.length ? sequences[sequences.length - 1].cursor !== allSequences[allSequences.length - 1].cursor : false,
      }
    },
    pages: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allPages = await dataSources.pageAPI.getAllPages()

      const pages = paginateResults({
        after,
        pageSize,
        results: allPages,
      })

      return {
        pages,
        cursor: pages.length ? pages[pages.length - 1].cursor : null,
        hasMore: pages.length ? pages[pages.length - 1].cursor !== allPages[allPages.length - 1].cursor : false,
      }
    },
  },
}
