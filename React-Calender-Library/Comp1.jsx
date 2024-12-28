import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//Basic Date Selection
function Comp1() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log('Selected date:', newDate);
  };

  return (
    <div>
      <h2>Selected Date: {date.toDateString()}</h2>
      <Calendar onChange={handleDateChange} value={date} />
    </div>
  );
}

export default Comp1;