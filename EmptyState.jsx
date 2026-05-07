import React from 'react'
import styles from './EmptyState.module.css'

export default function EmptyState({ onReset }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.icon}>🔍</div>
      <div className={styles.title}>لا توجد أدوات مطابقة</div>
      <div className={styles.sub}>جرّب بحثاً مختلفاً أو أزل الفلتر</div>
      <button className={styles.btn} onClick={onReset}>← إظهار الكل</button>
    </div>
  )
}
