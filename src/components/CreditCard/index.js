import React from 'react'
import classNames from 'classnames'
import './styles.css'

const Phone = ({ children, className }) => (
  <div className={classNames('CreditCard', className)}>{children}</div>
)

export default Phone
