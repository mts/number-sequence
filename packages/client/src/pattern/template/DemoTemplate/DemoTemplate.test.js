import React from 'react'
import demoTemplateDefault from './DemoTemplate.render'

jest.mock('react-apollo', () => {
  return {
    Query: () => <div />,
  }
})

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
  }
})

describe('<DemoTemplate />', () => {
  describe('Snaphot', () => {
    test('must match demoTemplateDefault', () => {
      expect(global.renderToJSON(demoTemplateDefault)).toMatchSnapshot()
    })
  })
})
