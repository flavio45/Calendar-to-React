import React, { useState } from "react";
import React, { useEffect } from "react";
import { CalendarHeader } from "../CalendarHeader/CalendarHeader";

export const App = () => {
  const [nav, setNav] = useState(0);
  const [days, setDays] = useState([]);
  const [dateDisplay, setDateDisplay] = useState("");
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  );

  const eventForDate = (date) => events.find((e) => e.date === date);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <div id="container">
      <CalendarHeader />
      <div id="weekdays">
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
      </div>
      <div id="calendar"></div>
    </div>
  );
};
