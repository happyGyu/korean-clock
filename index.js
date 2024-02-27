import { initialize } from "./initialize.js";
import { turnOnClock } from "./runClock.js";

function main() {
  const root = document.getElementById("root");

  initialize(root);
  setInterval(() => turnOnClock(root), 1000);
}
main();
