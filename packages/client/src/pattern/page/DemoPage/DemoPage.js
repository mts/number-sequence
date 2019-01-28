import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { PAGES } from '../../../graphql/query'
import DemoTemplate from '../../template/DemoTemplate'

const DemoPage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? (
          <DemoTemplate page={data.pages.pages.find(page => page.id === 'demo')} startPageRoute={startPageRoute} />
        ) : null
      }
    </Query>
  )
}

export default DemoPage