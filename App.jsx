import React from 'react'
import { CATEGORIES } from './data/categories'
import { TOOLS } from './data/tools'
import { useFilter } from './hooks/useFilter'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import CategorySection from './components/CategorySection'
import EmptyState from './components/EmptyState'
import styles from './App.module.css'

export default function App() {
  const { activeCat, setActiveCat, searchQuery, setSearchQuery, filtered } = useFilter()

  const handleReset = () => {
    setActiveCat('all')
    setSearchQuery('')
  }

  return (
    <div className={styles.app}>
      <Header totalCount={TOOLS.length} />

      <FilterBar
        activeCat={activeCat}
        setActiveCat={setActiveCat}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        visibleCount={filtered.length}
      />

      <main className={styles.main}>
        {filtered.length === 0 ? (
          <EmptyState onReset={handleReset} />
        ) : (
          CATEGORIES.map(cat => (
            <CategorySection
              key={cat.id}
              category={cat}
              tools={filtered.filter(t => t.cat === cat.id)}
            />
          ))
        )}
      </main>

      <footer className={styles.footer}>
        إعداد: د. دعاء مكاري | قسم التربية غير المنهجية | كلية القاسمي الأكاديمية
        <br />
        <span className={styles.footerSub}>مكتبة أدوات التعلم عن بُعد — البيداغوجيا الرقمية في الفضاء غير المنهجي</span>
      </footer>
    </div>
  )
}
