import React from 'react'
import SearchBar from './SearchBar'
import EventList from './EventList';
import Actions from './Actions'

const apiData = {
  events: [
    {
      name: 'Lorem',
      img: 'default.png',
      description: 'A crazy event xD',
      liked: true
    },
    {
      name: 'Lorem 2',
      img: 'default.png',
      description: '2 A crazy event xD',
      liked: false
    }
  ]
}

const App = () => (
  <div style={{backgroundColor: 'yellow', padding: '1rem', border: '1px solid black'}}>
    <header style={{border: '1px solid black'}}>
      <SearchBar />
    </header>
    <main style={{padding: '1rem', border: '1px solid black'}}>
      <EventList events={apiData.events} />
    </main>
    <footer style={{border: '1px solid black'}}>
      <Actions />
    </footer>
  </div>
)

export default App