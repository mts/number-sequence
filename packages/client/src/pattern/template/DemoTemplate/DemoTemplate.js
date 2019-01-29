import React from 'react'
import { object, string } from 'prop-types'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import { getSequencesQuery } from '../../../graphql/query'
import SequenceCard from '../../molecule/card/SequenceCard'

class DemoTemplate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sequenceCount: 10,
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
          <Query query={getSequencesQuery(sequenceCount)}>
            {({ data }) => (data.sequences && data.sequences.sequences ? <SequenceCard sequences={data.sequences.sequences} /> : null)}
          </Query>

          {sequenceCount < 20 ? (
            <div align="center" className="p-4">
              <button onClick={this.handleButtonOnClick}>{actionMessage}</button>
            </div>
          ) : null}

          <div align="center" className="p-4">
            <Link to={startPageRoute}>Back to Start Page</Link>
          </div>
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
