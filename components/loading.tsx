import React from 'react'
import styles from '../styles/Home.module.css'

const Loading = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.balls}>
        <div className={styles.ball}>
        </div>
        <div className={styles.loadingText}>Carregando...</div>
      </div>
    </div>
  )
}

export default Loading