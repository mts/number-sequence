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
      sequenceCount: sequenceCount + 5,
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

          {sequenceCount < 20 ? <Button onClick={this.handleButtonOnClick}>{actionMessage}</Button> : null}

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
