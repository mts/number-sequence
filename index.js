const sequenceSeedValue = 1
const numberOfSequences = 10

function addSequence(allSequences) {
  const lastSequence = allSequences[allSequences.length - 1]
  const nextSequence = []

  if (allSequences.length === 1) {
    return allSequences.push([allSequences[0][0], allSequences[0][0]])
  }

  for (i = 0; i < lastSequence.length; ++i) {
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

  return allSequences.push(nextSequence)
}

function initSequences(sequenceSeedValue) {
  const firstSequence = [sequenceSeedValue]
  return [firstSequence]
}

function getSequences(sequenceSeedValue) {

  const allSequences = initSequences(sequenceSeedValue)

  for (i = 0; i < numberOfSequences; ++i) {
    addSequence(allSequences)
  }

  for (i = 0; i < allSequences.length; ++i) {
    console.log(allSequences[i].join(' '))
  }
}

getSequences(sequenceSeedValue)
