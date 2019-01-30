import React from 'react'
import { node, func } from 'prop-types'

const Button = ({ onClick, children }) => (
  <div align="center" className="p-4">
    <button onClick={onClick}>{children}</button>
  </div>
)

Button.propTypes = {
  onClick: func.isRequired,
  children: node.isRequired,
}

export default Button

/*
`Button` is a
  stateless function component
  receiving `onClick, children` props
`rendering`
  a button element

Sample usage is as follows:
```javascript
  <Button onClick={() => {}}>some text</Button>
```
*/
