import { useState, useMemo } from 'react'
import { TOOLS } from '../data/tools'

export function useFilter() {
  const [activeCat, setActiveCat] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return TOOLS.filter(tool => {
      const matchCat = activeCat === 'all' || tool.cat === activeCat
      const matchSearch =
        !q ||
        tool.name.toLowerCase().includes(q) ||
        tool.desc.includes(q) ||
        tool.use.includes(q) ||
        tool.tag.includes(q)
      return matchCat && matchSearch
    })
  }, [activeCat, searchQuery])

  return { activeCat, setActiveCat, searchQuery, setSearchQuery, filtered }
}
