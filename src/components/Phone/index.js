import React from 'react'
import classNames from 'classnames'
import './styles.css'

import keyboardImg from 'media/keyboard.png'

const Phone = ({ children, className, keyboard=null }) => (
  <div className={classNames(
      'Phone',
      'abs-center',
      'shadow',
      className)}>
      {children}
      {keyboard && <img className="Phone-keyboard" src={keyboardImg} alt="Iphone keyboard" />}
  </div>
)

export default Phone
