import React, { Component } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./CalendarHead.css";

export class CalendarHead extends Component {
  render() {
    let date = new Date();
    return (
      <>
        <div className="head">
          <button>
            <MdChevronLeft />
          </button>
          <span className="title">
            {date.getFullYear() + "년 " + (date.getMonth() + 1) + "월"}
          </span>
          <button>
            <MdChevronRight />
          </button>
        </div>
      </>
    );
  }
}
