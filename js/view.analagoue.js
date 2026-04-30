"use strict";
import { timeModel } from "./model.time.js";

export function viewAnalogueClock() {
    let hours = timeModel.getHours();
    let minutes = timeModel.getMinutes();
    let seconds = timeModel.getSeconds();

    let secondsRotation = seconds * 6;
    let minutesRotation = (minutes * 6) + (seconds * 0.1);
    let hoursRotation = ((hours % 12) * 30) + (minutes * 0.5);


    let secondsHand = document.getElementById("seconds-hand");
    let minutesHand = document.getElementById("minutes-hand");
    let hoursHand = document.getElementById("hours-hand");


    if (secondsHand) secondsHand.style.transform = `rotate(${secondsRotation}deg)`;
    if (minutesHand) minutesHand.style.transform = `rotate(${minutesRotation}deg)`;
    if (hoursHand) hoursHand.style.transform = `rotate(${hoursRotation}deg)`;
}
