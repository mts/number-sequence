/* eslint-disable */

const sequenceSeedValue = 1
const numberOfSequences = 20

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

function extendSequences(sequences) {
  for (let i = 0; i < numberOfSequences - 1; ++i) {
    addSequence(sequences)
  }

  return sequences
}

function consoleLogSequences(sequences) {
  let padCharacter = ', '

  for (let i = 0; i < sequences.length; ++i) {
    const paddedSequence = ''.padStart(sequences.length - i, ' ').concat(sequences[i].join(padCharacter))
    console.log(sequences[i].join(padCharacter))
  }
}

function displaySequences(sequenceSeedValue) {
  let sequences

  sequences = initSequences(sequenceSeedValue)
  sequences = extendSequences(sequences)

  consoleLogSequences(sequences)
}

// displaySequences(sequenceSeedValue)

module.exports = {
  getSequences: function(sequenceSeedValue) {
    let sequences = initSequences(sequenceSeedValue)
    return extendSequences(sequences)
  },
}
/* eslint-enable */
