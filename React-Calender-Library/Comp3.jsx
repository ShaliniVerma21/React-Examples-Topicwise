import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//Disabling Specific Dates
function Comp3() {
  const [date, setDate] = useState(new Date());

  const disableDates = (date) => {
    // Disable weekends (Saturday and Sunday)
    return date.getDay() === 0 || date.getDay() === 6;
  };

  return (
    <div>
      <h2>Selected Date: {date.toDateString()}</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileDisabled={({ date }) => disableDates(date)}
      />
    </div>
  );
}

export default Comp3;