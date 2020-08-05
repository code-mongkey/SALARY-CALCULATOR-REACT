import React from "react";
import "./RegSchedule.css";

export class RegSchedule extends React.Component {
  render() {
    console.log(this);
    return (
      <div className="popup">
        <div className="popup_inner">
          <div>
            <input placeholder="근무자" />
          </div>
          <div>
            <span>근무시작</span>
            <input type="date"></input>
            <input type="time"></input>
          </div>
          <div>
            <span>근무종료</span>
            <input type="date"></input>
          </div>
          <div>
            <button className="header" onClick={this.props.closePopup}>
              닫기
            </button>
          </div>
        </div>
      </div>
    );
  }
}
