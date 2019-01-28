import React from 'react'
import { object, string } from 'prop-types'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import { SEQUENCES } from '../../../graphql/query'
import SequenceCard from '../../molecule/card/SequenceCard'

const DemoTemplate = ({ page, startPageRoute }) => (
  <div>
    <h2>{page.name}</h2>
    <div>
      <Query query={SEQUENCES}>
        {({ data }) => (data.sequences && data.sequences.sequences ? <SequenceCard sequences={data.sequences.sequences} /> : null)}
      </Query>

      <Link to={startPageRoute}> Back to Home Page</Link>
    </div>
  </div>
)

DemoTemplate.propTypes = {
  page: object.isRequired,
  startPageRoute: string.isRequired,
}

export default DemoTemplate
