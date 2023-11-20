import { scheduleStore } from '../../store/scheduleStore'
import { useState, useEffect } from 'react'

export function useSchedule () {
  const { schedule: scheduleData } = scheduleStore(state => state)
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    const newSchedule = scheduleData
      ?.map(item => ({
        scheduleId: item.schedule_id,
        value: item.schedule_id,
        start: item.start,
        end: item.end,
        name: `${item.start.slice(0, 5)} - ${item.end.slice(0, 5)}`
      }))
    newSchedule.unshift({ scheduleId: 0, value: 0, name: '[HORARIO]' })
    setSchedule(newSchedule)
  }, [scheduleData])

  return {
    schedule
  }
}
