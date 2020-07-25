import React, { Component } from "react";
import "./RegSchedule.css";

export class RegSchedule extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
            <button className="header" onClick={this.props.closePopup}>닫기</button>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}