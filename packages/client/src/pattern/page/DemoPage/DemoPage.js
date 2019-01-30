import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { pagesQuery } from '../../../graphql/query'
import DemoTemplate from '../../template/DemoTemplate'

const DemoPage = () => {
  return (
    <Query query={pagesQuery}>
      {({ data }) =>
        data.pages && data.pages.pages ? (
          <DemoTemplate page={data.pages.pages.find(page => page.id === 'demo')} startPageRoute={startPageRoute} />
        ) : null
      }
    </Query>
  )
}

export default DemoPage

/*
`DemoPage` is a
  stateless function component
  receiving no props
`rendering`
  a `DemoTemplate` component
`querying`
  page data.

```javascript
<DemoPage />
```
*/
