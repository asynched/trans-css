# TRANS-CSS

## Dead simple CSS objects for your application

Generate JS objects while writing CSS

## What it does?

This package transforms you CSS styling into an object, so that you can use in your apps.

```js
// This
const styling = css`
  background-color: #f00;
  color: #fff;
`

// Becomes this
const generatedStyling = {
  backgroundColor: '#f00',
  color: '#fff',
}
```

## Example

```jsx
import React from 'react'
import css from 'trans-css'

const App = () => {
  return (
    <div
      style={css`
        background: #ff7a00;
        color: #fff;
      `}
    >
      <h1>Hello, world!</h1>
    </div>
  )
}

export default App
```
