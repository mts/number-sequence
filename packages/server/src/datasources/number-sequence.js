/* eslint-disable */
const sequenceSeedValue = 1

function addSequence(sequences) {
  const lastSequence = sequences[sequences.length - 1].numbers
  const nextSequence = []

  if (sequences.length === 1) {
    return sequences.push({ numbers: [sequences[0].numbers[0], sequences[0].numbers[0]] })
  }

  for (let i = 0; i < lastSequence.length; ++i) {
    if (i === 0) {
      nextSequence.push(lastSequence[0])
      continue
    }

    if (i === lastSequence.length - 1) {
      nextSequence.push(lastSequence[i - 1] + lastSequence[i])
      nextSequence.push(lastSequence[lastSequence.length - 1])
      continue
    }

    nextSequence.push(lastSequence[i - 1] + lastSequence[i])
  }

  return sequences.push({ numbers: nextSequence })
}

function initSequences(sequenceSeedValue) {
  const firstSequence = [sequenceSeedValue]
  return [{ numbers: firstSequence }]
}

function extendSequences(sequences, sequenceCount) {
  for (let i = 0; i < sequenceCount - 1; i++) {
    addSequence(sequences)
  }

  return sequences
}

module.exports = {
  getSequences: function(sequenceSeedValue, sequenceCount) {
    let sequences = initSequences(sequenceSeedValue)
    return extendSequences(sequences, sequenceCount)
  },
}
/* eslint-enable */
