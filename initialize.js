import {
  AM_PM_TEXT,
  HOUR_TEXT,
  MINUTE_TEN_TEXT,
  MINUTE_ONE_TEXT,
} from "./data.js";

export function initialize(root) {
  addAmPms(root);
  addHours(root);
  addSunMoon(root);
  addMinuteTens(root);
  addMinuteOnes(root);
  addSeconds(root);
}

function makeNormalText(text, className) {
  const normalTextEl = document.createElement("div");
  normalTextEl.classList.add("normal-text");
  normalTextEl.classList.add(className);
  normalTextEl.innerText = text;
  return normalTextEl;
}

function addAmPms(root) {
  AM_PM_TEXT.forEach((text) => {
    const amPmEl = makeNormalText(text, "am-pm");
    root.appendChild(amPmEl);
  });
}

function addHours(root) {
  HOUR_TEXT.forEach((text) => {
    const hourEl = makeNormalText(text, "hour");
    root.appendChild(hourEl);
  });
}

function addMinuteTens(root) {
  MINUTE_TEN_TEXT.forEach((text) => {
    const minuteEl = makeNormalText(text, "minute-ten");
    root.appendChild(minuteEl);
  });
}

function addMinuteOnes(root) {
  MINUTE_ONE_TEXT.forEach((text) => {
    const minuteEl = makeNormalText(text, "minute-one");
    root.appendChild(minuteEl);
  });
}

function addSunMoon(root) {
  const sunMoonEl = document.createElement("div");
  sunMoonEl.classList.add("sun-moon");
  root.appendChild(sunMoonEl);
}

function addSeconds(root) {
  const secondEl = document.createElement("div");
  secondEl.classList.add("second");
  root.appendChild(secondEl);
}
