import React from 'react'
import Header from '../../molecule/navigation/Header'
import SideBar from '../../molecule/navigation/SideBar'
import HeroBanner from '../../molecule/banner/HeroBanner'
import { version } from '../../../../../../lerna.json'

const StartTemplate = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })

  return (
    <div>
      <Header>Number Sequence v{version}</Header>
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <SideBar />
        <HeroBanner>
          <h1 className="f000-light mb-4">Number Sequences</h1>
          <div className="f2-light pb-4">A delightful demo</div>
        </HeroBanner>
      </div>
    </div>
  )
}

export default StartTemplate

/*
`StartTemplate` is a
  stateless function component
  receiving no props
`rendering`
  `Header`, `SideBar` and `HeroBanner` components.

```javascript
const page = {
  page: {
    id: 'start',
    name: 'some-name',
  },
}

<StartTemplate page={page} startPageRoute="/" />
```
*/
