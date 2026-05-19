"use client"

import React, { useEffect, useState } from 'react'
import styles from './styles/sec1.module.css'

export default function Sec1() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {

    const checkDevice = () => {

      const mobileDevice =
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

      const desktopMode =
        window.innerWidth > 1024

      if (mobileDevice && !desktopMode) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    checkDevice()

    window.addEventListener("resize", checkDevice)

    return () => {
      window.removeEventListener("resize", checkDevice)
    }

  }, [])

  return (
    <div className={styles.sec1}>

      {isMobile ? (
        <div className={styles.sec1_mb}>
          <div className={styles.content_container}>
            <div className={styles.center_container}>
              INI MB
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.sec1_pc}>
          <div className={styles.content_container}>
            <div className={styles.center_container}>
              INI PC
            </div>
          </div>
        </div>
      )}

    </div>
  )
}