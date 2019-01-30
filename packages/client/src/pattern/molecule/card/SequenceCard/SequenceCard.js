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

/*
`SequenceCard` is a
  stateless function component
  receiving `sequences` props
`rendering`
  `Sequence` a component for each sequence.

```javascript
  const sequences = [
    { numbers: [1] },
    { numbers: [1, 1] },
    { numbers: [1, 2, 1] },
    { numbers: [1, 3, 3, 1] },
    { numbers: [1, 4, 6, 4, 1] }
  ]
  <SequenceCard sequences={sequences} />
```
*/
