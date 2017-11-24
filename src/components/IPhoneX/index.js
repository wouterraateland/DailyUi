import React from 'react'
import classNames from 'classnames'
import './styles.css'

const IPhoneX = ({ children, className }) => (
  <div
    className={classNames(
      'IPhoneX',
      'abs-center',
      'shadow',
      className)}
  >
      {children}
  </div>
)

export default IPhoneX
