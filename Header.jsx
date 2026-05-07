import React from 'react'
import styles from './Header.module.css'

export default function Header({ totalCount }) {
  return (
    <header className={styles.hdr}>
      <div className={styles.inner}>
        <span className={styles.badge}>🎓 كلية القاسمي الأكاديمية</span>
        <h1 className={styles.title}>
          مكتبة <span className={styles.shimmer}>أدوات التعلم عن بُعد</span> 🧰
        </h1>
        <p className={styles.sub}>
          دليل المربي الرقمي الشامل — {totalCount}+ أداة لتصميم وتمرير حصص Zoom احترافية وتفاعلية
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>{totalCount}</span>
            <span className={styles.statLbl}>أداة في المكتبة</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>8</span>
            <span className={styles.statLbl}>محاور</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>🆓</span>
            <span className={styles.statLbl}>معظمها مجاني</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>د. دعاء مكاري</span>
            <span className={styles.statLbl}>إعداد</span>
          </div>
        </div>
      </div>
    </header>
  )
}
