import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { pagesQuery } from '../../../graphql/query'
import StartTemplate from '../../template/StartTemplate'

const StartPage = () => {
  return (
    <Query query={pagesQuery}>
      {({ data }) =>
        data.pages && data.pages.pages ? (
          <StartTemplate page={data.pages.pages.find(page => page.id === 'start')} startPageRoute={startPageRoute} />
        ) : null
      }
    </Query>
  )
}

export default StartPage

/*
`StartPage` is a
  stateless function component
  receiving no props
`rendering`
  a `StartTemplate` component
`querying`
  page data.

```javascript
  <StartPage />
```
*/
