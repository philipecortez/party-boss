import React from 'react'

const Event = ({event}) => (
  <article style={{border: '1px solid black'}}>
    <figure>
      <img src={event.img}/>
    </figure>
    <h1>{event.name}</h1>
    <p>{event.description}</p>
    <div style={{border: '1px solid black'}}>
      <ul>
        <li>Like</li>
        <li>Enter</li>
      </ul>
    </div>
  </article>
)

export default Event