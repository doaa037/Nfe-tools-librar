import React from 'react'
import ToolCard from './ToolCard'
import styles from './CategorySection.module.css'

export default function CategorySection({ category, tools }) {
  if (tools.length === 0) return null

  return (
    <section className={styles.section}>
      <div className={styles.head} style={{ borderColor: category.color }}>
        <div className={styles.icon} style={{ background: category.color }}>
          {category.icon}
        </div>
        <div>
          <div className={styles.title} style={{ color: category.color }}>
            {category.label}
            <span className={styles.count}> ({tools.length})</span>
          </div>
          <div className={styles.desc}>{category.desc}</div>
        </div>
      </div>

      <div className={styles.grid}>
        {tools.map((tool, idx) => (
          <ToolCard key={`${tool.cat}-${tool.name}`} tool={tool} index={idx} />
        ))}
      </div>
    </section>
  )
}
