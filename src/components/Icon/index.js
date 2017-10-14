import React from 'react'
import classNames from 'classnames'
import './styles.css'

const Icon = ({ children, className, ...props }) => (
  <div
    className={classNames(
      'Icon',
      'abs-center',
      'shadow',
      className
    )}
    {...props}>
    {children}
  </div>
)

export default Icon
