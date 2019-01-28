/* eslint no-unused-vars : 0 */
import React from 'react'
import { node } from 'prop-types'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: node.isRequired,
}

export default ErrorBoundary
