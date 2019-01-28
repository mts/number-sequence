import React from 'react'
import { object, string } from 'prop-types'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import { SEQUENCES } from '../../../graphql/query'
import SequenceCard from '../../molecule/card/SequenceCard'

const DemoTemplate = ({ page, startPageRoute }) => (
  <div>
    <h1 align="center" className="p-4 text-red">
      {page.name}
    </h1>
    <div>
      <Query query={SEQUENCES}>
        {({ data }) => (data.sequences && data.sequences.sequences ? <SequenceCard sequences={data.sequences.sequences} /> : null)}
      </Query>

      <div align="center" className="p-4">
        <Link to={startPageRoute}> Back to Start Page</Link>
      </div>
    </div>
  </div>
)

DemoTemplate.propTypes = {
  page: object.isRequired,
  startPageRoute: string.isRequired,
}

export default DemoTemplate
