import React, { Component } from "react";
import moment, { Moment as MomentTypes } from "moment";
import "./DayComponent.css";

function Generate() {
  const today = moment();
  const startWeek = today.startOf("month").week();
  const endWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();
  let calendar = [];
  for (let week = startWeek; week <= endWeek; week++) {
    calendar.push(
      <div className="row" key={week}>
        {Array(7)
          .fill(0)
          .map((n, i) => {
            let current = today
              .clone()
              .week(week)
              .startOf("week")
              .add(n + i, "day");
            let isSelected =
              today.format("YYYYMMDD") === current.format("YYYYMMDD")
                ? "selected"
                : "";
            let isGrayed =
              current.format("MM") === today.format("MM") ? "" : "grayed";
            return (
              <div className={`box  ${isSelected} ${isGrayed}`} key={i}>
                <span className={`text`}>{current.format("D")}</span>
              </div>
            );
          })}
      </div>
    );
  }
  return calendar;
}

export class DayComponent extends Component {
  render() {
    return (
      <>
        <div className="day">
          <Generate></Generate>
        </div>
      </>
    );
  }
}
