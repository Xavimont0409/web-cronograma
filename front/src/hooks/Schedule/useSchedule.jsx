import { scheduleStore } from '../../store/scheduleStore'
import { useState, useEffect } from 'react'

export function useSchedule () {
  const { schedule: scheduleData } = scheduleStore(state => state)
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    const newSchedule = scheduleData
      ?.map(item => ({
        scheduleId: item.schedule_id,
        start: item.start,
        end: item.end
      }))
    newSchedule.unshift({ spuId: 0, value: 0, name: '[HORARIO]' })
    setSchedule(newSchedule)
  }, [scheduleData])

  return {
    schedule
  }
}
