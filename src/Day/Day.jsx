import React from "react";

export const Day = ({ day, onClick }) => {
  return (
    <div className="day">
      {day.value === "padding" ? "" : day.value}
      {day.event && <div className="event">{day.event.title}</div>}
    </div>
  );
};
