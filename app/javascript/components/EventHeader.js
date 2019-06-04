import React from 'react'

const EventHeader = ({img, name}) => (
  <>
    <figure>
      <img src={img}/>
    </figure>
    <h1>{name}</h1>
  </>
)

export default EventHeader