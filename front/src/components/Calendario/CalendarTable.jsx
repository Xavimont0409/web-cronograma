/* eslint-disable react/prop-types */
// import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

export function CalendarTable ({
  handleOpenModal,
  setStartHour,
  setEndHour,
  setDateCreate,
  setDate
}) {
  const selectSchedule = (selectInfo) => {
    const { startStr, endStr } = selectInfo
    setStartHour(startStr.slice(11, 19))
    setEndHour(endStr.slice(11, 19))
    setDateCreate(startStr.slice(0, 10))
    setDate(startStr.slice(11, 19))
    handleOpenModal()
  }
  const renderEventContent = (eventInfo) => {
    return (
      <div>
        <p className='font-bold'>{eventInfo.timeText}</p>
        <p className=' font-bold uppercase'>{eventInfo.event.title}</p>
      </div>
    )
  }
  return (
    <FullCalendar
      allDaySlot={false}
      locale='es'
      slotMinTime='13:00:00'
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
      select={selectSchedule}
      eventContent={renderEventContent}
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
        right: 'today prev next'
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
