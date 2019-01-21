function getSequence(allSequences) {
  if (allSequences.length === 1) {
    return allSequences.push([allSequences[0][0], allSequences[0][0]])
  }

  const lastSequence = allSequences[allSequences.length - 1]
  const nextSequence = []

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

function getSequences(seedValue) {
  let allSequences = []

  allSequences.push([seedValue])

  getSequence(allSequences)
  getSequence(allSequences)
  getSequence(allSequences)
  getSequence(allSequences)
  getSequence(allSequences)
  getSequence(allSequences)


  for (i = 0; i < allSequences.length; ++i) {
    console.log(allSequences[i].join(' '))
  }
}

const seedValue = 1

getSequences(seedValue)
