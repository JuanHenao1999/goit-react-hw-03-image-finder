import React, { Component } from "react";
import css from "./Loader.module.css";

export class Loader extends Component {
  render() {
    return (
        <div className={css["loading"]}>
          <div className={css["i"]}></div>
          <div className={css["a"]}></div>
          <div className={css["u"]}></div>
        </div>
    );
  }
}

export default Loader;
