function parseNow() {
  const now = dayjs();
  const hour = now.hour();
  const amPm = hour < 12 ? "AM" : "PM";
  const hourInTwelve = hour % 12;
  const minute = now.minute();
  const minuteTen = Math.floor(minute / 10);
  const minuteOne = minute % 10;
  const second = now.second();
  const sunMoon = hour >= 7 && hour < 19 ? "SUN" : "MOON";
  return { amPm, hourInTwelve, minuteTen, minuteOne, second, sunMoon };
}

export function turnOnClock(root) {
  const { amPm, hourInTwelve, minuteTen, minuteOne, second, sunMoon } =
    parseNow();

  const amPmElementList = root.querySelectorAll(".am-pm");
  const hourElementList = root.querySelectorAll(".hour");
  const minuteTenElementList = root.querySelectorAll(".minute-ten");
  const minuteOneElementList = root.querySelectorAll(".minute-one");
  const secondEl = root.querySelector(".second");
  const sunMoonEl = root.querySelector(".sun-moon");

  turnOnAmPm(amPm, amPmElementList);
  turnOnHour(hourInTwelve, hourElementList);
  turnOnMinuteTen(minuteTen, minuteTenElementList);
  turnOnMinuteOne(minuteOne, minuteOneElementList);
  turnOnSecond(second, secondEl);
  turnOnSunMoon(sunMoon, sunMoonEl);
}

function turnOnText(char, fullText, elList) {
  elList.forEach((el) => {
    const elText = el.innerText;
    if (char === elText) {
      el.classList.add("on");
    } else if (!fullText.includes(elText)) {
      el.classList.remove("on");
    }
  });
}

const AM_PM_TO_KOREAN = {
  AM: "오전",
  PM: "오후",
};

function turnOnAmPm(amPm, elList) {
  const koreanAmPm = AM_PM_TO_KOREAN[amPm];
  koreanAmPm.split("").forEach((char) => turnOnText(char, koreanAmPm, elList));
}

const HOUR_TO_KOREAN = {
  0: "영시",
  1: "한시",
  2: "두시",
  3: "세시",
  4: "네시",
  5: "다섯시",
  6: "여섯시",
  7: "일곱시",
  8: "여덟시",
  9: "아홉시",
  10: "열시",
  11: "열한시",
  12: "열두시",
};

function turnOnHour(hour, elList) {
  const hourText = HOUR_TO_KOREAN[hour];
  hourText.split("").forEach((char) => turnOnText(char, hourText, elList));
}

const TEN_TO_KOREAN = {
  0: "",
  1: "십",
  2: "이십",
  3: "삼십",
  4: "사십",
  5: "오십",
};

function turnOnMinuteTen(minuteTen, elList) {
  const minuteTenText = TEN_TO_KOREAN[minuteTen];
  minuteTenText
    .split("")
    .forEach((char) => turnOnText(char, minuteTenText, elList));
}

const ONE_TO_KOREAN = {
  0: "",
  1: "일",
  2: "이",
  3: "삼",
  4: "사",
  5: "오",
  6: "육",
  7: "칠",
  8: "팔",
  9: "구",
};

function turnOnMinuteOne(minuteOne, elList) {
  const minuteOneText = ONE_TO_KOREAN[minuteOne] + "분";
  minuteOneText
    .split("")
    .forEach((char) => turnOnText(char, minuteOneText, elList));
}

function turnOnSecond(second, el) {
  const secondTen = Math.floor(second / 10);
  const secondOne = second % 10;
  const koreanSecond = TEN_TO_KOREAN[secondTen] + ONE_TO_KOREAN[secondOne];
  const text = koreanSecond ? koreanSecond + "초" : "정각";
  const newLineText = text.slice(0, 2) + "\n" + text.slice(2);
  el.innerText = newLineText;
}

const SUN_MOON_TO_IMOJI = {
  SUN: "🌞",
  MOON: "🌜",
};

function turnOnSunMoon(sunMoon, el) {
  el.innerText = SUN_MOON_TO_IMOJI[sunMoon];
}
