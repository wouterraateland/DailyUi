import React from 'react'

const Field = ({ type: Type, ...props }) => (
  <Type {...props} />
)

export default Field
