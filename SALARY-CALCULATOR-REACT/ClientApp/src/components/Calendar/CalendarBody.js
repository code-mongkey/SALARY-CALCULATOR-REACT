import React, { Component } from "react";
import { DayComponent } from "./DayComponent";
import "./CalendarBody.css";

export class CalendarBody extends Component {
  render() {
    return (
      <>
        <div className="body">
          <div className="row">
            <div className="box boxHeader">
              <span className="text">SUN</span>
            </div>
            <div className="box boxHeader">
              <span className="text">MON</span>
            </div>
            <div className="box boxHeader">
              <span className="text">TUE</span>
            </div>
            <div className="box boxHeader">
              <span className="text">WED</span>
            </div>
            <div className="box boxHeader">
              <span className="text">THU</span>
            </div>
            <div className="box boxHeader">
              <span className="text">FRI</span>
            </div>
            <div className="box boxHeader">
              <span className="text">SAT</span>
            </div>
          </div>
          <DayComponent></DayComponent>
        </div>
      </>
    );
  }
}
