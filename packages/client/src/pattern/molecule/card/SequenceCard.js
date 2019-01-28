import React from 'react'
import { arrayOf, shape, number } from 'prop-types'
import uuidv1 from 'uuid/v1'

const SequenceCard = ({ sequences }) => (
  <div>
    {sequences.map(sequence => {
      return (
        <div className="d-flex flex-justify-center" key={uuidv1()}>
          {sequence.numbers.map(number => (
            <div className="px-3 border text-green border-blue" key={uuidv1()}>
              {number}
            </div>
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
