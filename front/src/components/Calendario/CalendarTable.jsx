// import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

export function CalendarTable () {
  return (
    <FullCalendar
      allDaySlot={false}
      locale='es'
      slotMinTime='17:00:00'
      slotMaxTime='22:00:00'
      expandRows
      selectMirror
      editable
      selectable
      initialView='timeGridWeek'
      slotDuration='01:00:00'
      slotLabelInterval='01:00:00'
      plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
      events
      slotLabelFormat={{
        hour: '2-digit',
        minute: '2-digit',
        omitZeroMinute: false,
        meridiem: 'short'
      }}
      buttonText={{
        day: 'Vista día',
        week: 'Vista semana',
        list: 'Listar semana',
        today: 'Hoy'
      }}
      headerToolbar={{
        left: 'title',
        right: 'today'
      }}
      views={{
        listweek: { buttonText: 'list week' },
        dayGridMonth: {
          titleFormat: { year: 'numeric', month: 'long', day: 'numeric' }
        }
      }}
    />
  )
}
