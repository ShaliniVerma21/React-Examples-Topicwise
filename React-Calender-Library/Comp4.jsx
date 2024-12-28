import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//Customizing the Calendar Tile
function Comp4() {
  const [date, setDate] = useState(new Date());

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      // Add a dot to the 15th of each month
      if (date.getDate() === 15) {
        return <div style={{ color: 'red' }}>•</div>;
      }
    }
  };

  return (
    <div>
      <h2>Selected Date: {date.toDateString()}</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={tileContent}
      />
    </div>
  );
}

export default Comp4;