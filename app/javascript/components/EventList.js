import React from 'react'
import Event from './Event'

const EventList = ({events}) => (
  <>
    <ul>
      {
        events.map(event => (
          <li>
            <Event event={event} />
          </li>
        ))
      }
    </ul>
  </>
)

export default EventList