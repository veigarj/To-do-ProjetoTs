import React from 'react'

// Style
import style from'./Header.module.css'


const Header = () => {
  return (
    <div>
    <header className={style.header}>
      <h1>React + Ts</h1>
    </header>
    </div>
  )
}

export default Header