import React, { useEffect } from 'react';
import './App.css';
import Calendar from './containers/calendar-board';
import CalendarHeader from './containers/calendar-header';

function App() {
  return (
    <div>
      <CalendarHeader />
      <Calendar />
    </div>
  );
}

export default App;
