import React from 'react'
import { object, string } from 'prop-types'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import { getSequencesQuery } from '../../../graphql/query'
import SequenceCard from '../../molecule/card/SequenceCard'
import Button from '../../atom/action/Button'

class DemoTemplate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sequenceCount: 5,
      actionMessage: 'More Sequences',
    }
  }

  handleButtonOnClick = () => {
    const { sequenceCount } = this.state

    this.setState({
      sequenceCount: sequenceCount + 10,
    })
  }

  render() {
    const { page, startPageRoute } = this.props
    const { sequenceCount, actionMessage } = this.state

    return (
      <div>
        <h1 align="center" className="p-4 text-red">
          {page.name}
        </h1>
        <div>
          <div align="center" className="p-4">
            <Link to={startPageRoute}>Back to Start Page</Link>
          </div>

          {sequenceCount < 15 ? <Button onClick={this.handleButtonOnClick}>{actionMessage}</Button> : null}

          <Query query={getSequencesQuery(sequenceCount)}>
            {({ data }) => (data.sequences && data.sequences.sequences ? <SequenceCard sequences={data.sequences.sequences} /> : null)}
          </Query>
        </div>
      </div>
    )
  }
}

DemoTemplate.propTypes = {
  page: object.isRequired,
  startPageRoute: string.isRequired,
}

export default DemoTemplate

/*
`DemoTemplate` is a
  stateful class component
  receiving `page, startPageRoute` props
`rendering`
  page name,
  a Link component pointing to the start page route,
  a Button component to display more sequences and
  a `SequenceCard` component
`querying`
  sequence data.

```javascript
  const page = {
    page: {
      id: 'demo',
      name: 'some-name',
    },
  }

  <DemoTemplate page={page} startPageRoute="/" />
```
*/
