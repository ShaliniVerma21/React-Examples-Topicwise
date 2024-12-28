import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//Date Range Selection
function Comp2() {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const handleRangeChange = (range) => {
    setDateRange(range);
    console.log('Selected range:', range);
  };

  return (
    <div>
      <h2>
        Selected Range: {dateRange[0].toDateString()} - {dateRange[1].toDateString()}
      </h2>
      <Calendar
        onChange={handleRangeChange}
        selectRange={true}
        value={dateRange}
      />
    </div>
  );
}

export default Comp2;