import React from 'react'
import { CATEGORIES } from '../data/categories'
import styles from './FilterBar.module.css'

export default function FilterBar({ activeCat, setActiveCat, searchQuery, setSearchQuery, visibleCount }) {
  const allFilters = [{ id: 'all', label: 'الكل', icon: '🔍' }, ...CATEGORIES]

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="ابحث عن أداة بالاسم أو الوصف..."
            value={searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value)
              if (e.target.value) setActiveCat('all')
            }}
          />
          {searchQuery && (
            <button className={styles.clearBtn} onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>

        <div className={styles.chips}>
          {allFilters.map(cat => (
            <button
              key={cat.id}
              className={`${styles.chip} ${activeCat === cat.id && !searchQuery ? styles.active : ''}`}
              onClick={() => { setActiveCat(cat.id); setSearchQuery('') }}
            >
              {cat.icon} {cat.id === 'all' ? 'الكل' : cat.label.replace('أدوات ', '')}
            </button>
          ))}
        </div>

        <span className={styles.count}>{visibleCount} أداة</span>
      </div>
    </div>
  )
}
