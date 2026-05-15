"use client"

import React, { useEffect, useState } from 'react'
import styles from './styles/sec1.module.css'

export default function Sec1() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {

    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 1024)
    }

    checkScreen()

    window.addEventListener("resize", checkScreen)

    return () => {
      window.removeEventListener("resize", checkScreen)
    }

  }, [])

  return (
    <div className={styles.sec1}>

      {isMobile ? (
        <div className={styles.sec1_mb}>
          <div className={styles.content_container}>
            <div className={styles.center_container}>
              <div>INI MB</div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.sec1_pc}>
          <div className={styles.content_container}>
            <div className={styles.center_container}>
              <div>INI PC</div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}