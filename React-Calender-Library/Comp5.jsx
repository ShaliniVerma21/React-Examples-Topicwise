import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//Custom Navigation Labels
function Comp5() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h2>Selected Date: {date.toDateString()}</h2>
      <Calendar
        onChange={setDate}
        value={date}
        nextLabel="Next Month"
        prevLabel="Previous Month"
        // Customize the month and year labels
        prev2Label={null}
        next2Label={null}
      />
    </div>
  );
}

export default Comp5;