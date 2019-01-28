import React from 'react'
import demoPageDefault from './DemoPage.render'

jest.mock('react-apollo', () => {
  return {
    Query: () => <div />,
  }
})

describe('<DemoPage />', () => {
  describe('Snaphot', () => {
    test('must match demoPageDefault', () => {
      expect(global.renderToJSON(demoPageDefault)).toMatchSnapshot()
    })
  })
})
