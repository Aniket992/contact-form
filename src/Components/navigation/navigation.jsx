import React from 'react'
import  styles from'./navigation.module.css';
const Navigation = () => {
  return (
    <div>
      <nav className={styles.main}>
        <div className={styles.content}>
            <img src="Frame 2 1.png" alt="" />
            <ul className={styles.menu}>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
      </nav>
      
    </div>
  )
}

export default Navigation;
