import React from 'react'

const decorateWithBackground = story => (
  <div className="Background">
    <p className="Background-title">{story().props.name}</p>
    <div className="Background-object"></div>
    {story()}
  </div>
)

export default decorateWithBackground
