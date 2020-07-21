import React, { Component } from "react";
import moment from "moment";
import "./DayComponent.css";
import Popup from "reactjs-popup";

function clicked(current) {
  console.log(current.format("YYYYMMDD"));
}

function Generate() {
  const today = moment();
  const startWeek = today.clone().startOf("month").week();
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
            let isToday =
              today.format("YYYYMMDD") === current.format("YYYYMMDD")
                ? "today"
                : "";
            return (
              <div
                className={`box  ${isSelected} ${isGrayed} ${isToday}`}
                key={i}
                onClick={clicked.bind(this, current)}
              >
                <div className="day">{current.format("D")}</div>
                <div className="content"></div>
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
