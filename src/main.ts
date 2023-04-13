import "./main.css";
import { DonutDom } from "./dom";

function init(speed: number) {
  const app = document.querySelector<HTMLDivElement>("#app");

  if (!app) return false;

  const target = document.createElement("div");

  target.className = "target";

  app.append(target);

  new DonutDom(target, speed);

  return true;
}

init(50);
