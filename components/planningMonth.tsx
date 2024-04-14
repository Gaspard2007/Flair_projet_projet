// MonthView.tsx

import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

interface MonthViewProps {
  currentDate: Date;
}

const MonthView: React.FC<MonthViewProps> = ({ currentDate }) => {
  const startOfMonthDate = startOfMonth(currentDate);
  const endOfMonthDate = endOfMonth(currentDate);

  // Générer une liste de toutes les dates pour chaque jour du mois
  const daysInMonth = eachDayOfInterval({
    start: startOfMonthDate,
    end: endOfMonthDate
  });

  return (
    <div>
      <h2>{format(currentDate, 'MMMM yyyy')}</h2>
      <div>
        {daysInMonth.map((day) => (
          <div key={day.getTime()}>{format(day, 'dd')}</div>
        ))}
      </div>
    </div>
  );
};

export default MonthView;
