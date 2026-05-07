import React from 'react'
import { CATEGORIES } from '../data/categories'
import styles from './ToolCard.module.css'

const FREE_LABELS = {
  yes:     { cls: styles.freeYes,     text: '🆓 مجاني' },
  no:      { cls: styles.freeNo,      text: '💳 مدفوع' },
  partial: { cls: styles.freePartial, text: '⚡ جزئياً' },
}

export default function ToolCard({ tool, index }) {
  const cat = CATEGORIES.find(c => c.id === tool.cat)
  const free = FREE_LABELS[tool.free] || FREE_LABELS.partial

  return (
    <div
      className={styles.card}
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      {/* Thumbnail */}
      <div className={styles.thumb} style={{ background: tool.logoColor + '22' }}>
        <div className={styles.logo} style={{ background: tool.logoColor }}>
          {tool.logo}
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <div>
          <div className={styles.name}>{tool.name}</div>
          <span
            className={styles.tag}
            style={{ background: tool.tagColor + '18', color: tool.tagColor }}
          >
            {tool.tag}
          </span>
        </div>
        <p className={styles.desc}>{tool.desc}</p>
        <div
          className={styles.use}
          style={{ borderColor: cat?.color }}
        >
          🎯 {tool.use}
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <a
          className={styles.link}
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 زيارة الأداة
        </a>
        <span className={`${styles.free} ${free.cls}`}>{free.text}</span>
      </div>
    </div>
  )
}
