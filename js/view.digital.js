"use strict";
import {timeModel} from "./model.time.js";

export function viewDigitalClock(){
    timeModel.updateTime();
    let hours = timeModel.getHours();
    let minutes = timeModel.getMinutes();
    let seconds = timeModel.getSeconds();

    let view = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    document.getElementById("digital-clock").textContent = view;
}