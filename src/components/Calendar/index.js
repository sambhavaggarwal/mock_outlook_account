import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "./styles.scss";
import * as dates from "react-big-calendar/lib/utils/dates"

import EventComponent from "./eventComponent"

const propTypes = {}

// setup the localizer
const localizer = momentLocalizer(moment);
const culture = "en-GB"

let formats = {
    dayFormat: 'DD/MM',
    dayHeaderFormat: "DD/MM/YYYY",

    dayRangeHeaderFormat: ({ start, end }, culture, local) =>
    local.format(start, "MMMM DD", culture) +
    " - " +
    local.format(
      end,
      dates.eq(start, end, "month") ? "DD" : "MMMM DD",
      culture
    )
}

export default class MyCalendar extends React.Component {

  constructor(...args) {
    super(...args)
    this.state = {events}
  }

  handleSelectedEvent = (event) => {
    console.log(event)
  }

  render() {
    return (
      <div className="content-container scrollable">
        <Calendar
          localizer={localizer}
          events={events}
          defaultView={Views.WEEK}
          views={{ week: true, day: true }}
          startAccessor="start"
          endAccessor="end"
          culture={culture}
          popup
          formats={formats}
          getNow={() => new Date(new Date().getFullYear() + 10, 10, 10, 10, 0,)}
          components={{
            event: EventComponent
          }}
          onSelectEvent={event => this.handleSelectedEvent(event)}
        />
      </div>
    );
  }
}

MyCalendar.propTypes = propTypes