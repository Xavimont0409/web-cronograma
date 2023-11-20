import { levelStore } from '../../store/levelStore'
import { useState, useEffect } from 'react'

export function useLevel () {
  const { level: levelData } = levelStore(state => state)
  const [level, setLevel] = useState([])

  useEffect(() => {
    const newLevel = levelData
      ?.map(item => ({
        levelId: item.level_id,
        levelName: String(item.level_name).toUpperCase(),
        value: item.level_id,
        name: String(item.level_name).toUpperCase()
      }))
    newLevel.unshift({ levelId: 0, value: 0, name: '[NIVEL]' })
    setLevel(newLevel)
  }, [levelData])

  return {
    level
  }
}
