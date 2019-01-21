const sequenceSeedValue = 1
const numberOfSequences = 10

function addSequence(sequences) {
  const lastSequence = sequences[sequences.length - 1]
  const nextSequence = []

  if (sequences.length === 1) {
    return sequences.push([sequences[0][0], sequences[0][0]])
  }

  for (let i = 0; i < lastSequence.length; ++i) {
    if (i === 0 ) {
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

  return sequences.push(nextSequence)
}

function initSequences(sequenceSeedValue) {
  const firstSequence = [sequenceSeedValue]
  return [firstSequence]
}

function extendSequences(sequences) {
  for (let i = 0; i < numberOfSequences - 1; ++i) {
    addSequence(sequences)
  }

  return sequences
}

function consoleLogSequences(sequences) {
  let padCharacter = ' '

  for (let i = 0; i < sequences.length; ++i) {
    const paddedSequence = sequences[i].join(padCharacter)
    console.log(paddedSequence)
  }
}

function displaySequences(sequenceSeedValue) {
  let sequences

  sequences = initSequences(sequenceSeedValue)
  sequences = extendSequences(sequences)

  consoleLogSequences(sequences)
}

displaySequences(sequenceSeedValue)
