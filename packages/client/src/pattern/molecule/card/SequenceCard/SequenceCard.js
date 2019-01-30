import React from 'react'
import { arrayOf, shape, number } from 'prop-types'
import uuidv1 from 'uuid/v1'
import Sequence from '../../../atom/box/Sequence'

const SequenceCard = ({ sequences }) => (
  <div>
    {sequences.map(sequence => {
      return (
        <div className="d-flex flex-justify-center" key={uuidv1()}>
          {sequence.numbers.map(number => (
            <Sequence key={uuidv1()}>{number}</Sequence>
          ))}
        </div>
      )
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
