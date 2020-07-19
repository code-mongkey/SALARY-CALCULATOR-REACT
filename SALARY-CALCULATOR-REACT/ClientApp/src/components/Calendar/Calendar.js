import React, { Component } from "react";
import { CalendarHead } from "./CalendarHead";
import { CalendarBody } from "./CalendarBody";
import "./Calendar.css";

export class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        <CalendarHead></CalendarHead>
        <CalendarBody></CalendarBody>
      </div>
    );
  }
}
