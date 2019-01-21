function getSequence(allNumberSequences) {
  if (allNumberSequences.length === 1) {
    return allNumberSequences.push([allNumberSequences[0][0], allNumberSequences[0][0]])
  }

  const lastNumberSequence = allNumberSequences[allNumberSequences.length - 1]
  const nextNumberSequence = []

  for (i = 0; i < lastNumberSequence.length; ++i) {
    if (i === 0 ) {
      nextNumberSequence.push(lastNumberSequence[0])
      continue
    }

    if (i === lastNumberSequence.length - 1) {
      nextNumberSequence.push(lastNumberSequence[i - 1] + lastNumberSequence[i])
      nextNumberSequence.push(lastNumberSequence[lastNumberSequence.length - 1])
      continue
    }

    nextNumberSequence.push(lastNumberSequence[i - 1] + lastNumberSequence[i])
  }

  return allNumberSequences.push(nextNumberSequence)
}

function getSequences(seedValue) {
  let allNumberSequences = []

  allNumberSequences.push([seedValue])

  getSequence(allNumberSequences)
  getSequence(allNumberSequences)
  getSequence(allNumberSequences)
  getSequence(allNumberSequences)
  getSequence(allNumberSequences)
  getSequence(allNumberSequences)


  for (i = 0; i < allNumberSequences.length; ++i) {
    console.log(allNumberSequences[i].join(' '))
  }
}

const seedValue = 1

getSequences(seedValue)
