import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../styles/TimeIntervalBar.css';

const TimeIntervalBar = ({ startTime, endTime }) => {
  const format = 'YYYY-MM-DDTHH:mm:ssZ';
  const startMoment = moment(startTime, format);
  const endMoment = moment(endTime, format);

  const [percentageComplete, setPercentageComplete] = useState(0);

  useEffect(() => {
    const updateElapsedTime = () => {
      const elapsedTime = moment().diff(startMoment);
      const totalDuration = endMoment.diff(startMoment);
      const newPercentageComplete = (elapsedTime / totalDuration) * 100;
      setPercentageComplete(newPercentageComplete);
    };

    updateElapsedTime();
    const interval = setInterval(updateElapsedTime, 1000); // Update every second

    return () => clearInterval(interval);
  }, [startMoment, endMoment]);

  const barStyle = {
    width: `${percentageComplete}%`,
  };

  let barColorClass = '';

  if (percentageComplete < 50) {
    barColorClass = 'time-interval-bar-fill-green';
  } else if (percentageComplete < 75) {
    barColorClass = 'time-interval-bar-fill-yellow';
  } else {
    barColorClass = 'time-interval-bar-fill-red';
  }

  return (
    <div className="time-interval-bar">
      <div className={`time-interval-bar-fill ${barColorClass}`} style={barStyle}></div>
    </div>
  );
};

export default TimeIntervalBar;
