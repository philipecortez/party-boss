import React from 'react'
import EventHeader from './EventHeader'
import EventDescription from './EventDescription'
import EventAcions from './EventActions'

const Event = ({event}) => (
  <article style={{border: '1px solid black'}}>
    <EventHeader {...event}/>
    <EventDescription {...event} />
    <EventAcions />
  </article>
)

export default Event