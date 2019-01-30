import React from 'react'
import { node } from 'prop-types'

const Sequence = ({ children }) => <div className="px-3 border text-green border-blue">{children}</div>

Sequence.propTypes = {
  children: node.isRequired,
}

export default Sequence
