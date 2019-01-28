import React from 'react'
import { arrayOf, shape, number } from 'prop-types'
import uuidv1 from 'uuid/v1'

const SequenceCard = ({ sequences }) => (
  <div>
    {sequences.map(sequence => {
      return sequence.numbers.map(number => <div key={uuidv1()}>{number}</div>)
    })}
  </div>
)

SequenceCard.propTypes = {
  sequences: arrayOf(
    shape({
      numbers: arrayOf(number),
    }),
  ).isRequired,
}

export default SequenceCard
