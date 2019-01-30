import React from 'react'
import SequenceCard from './SequenceCard'

const sequences = [{ numbers: [1] }, { numbers: [1, 1] }, { numbers: [1, 2, 1] }, { numbers: [1, 3, 3, 1] }, { numbers: [1, 4, 6, 4, 1] }]

const sequenceCardDefault = <SequenceCard sequences={sequences} />

export default sequenceCardDefault
