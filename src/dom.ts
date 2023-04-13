import { Donut } from "./donut";

export class DonutDom {
  target: HTMLDivElement | undefined = undefined;
  interval?: number;
  donut?: Donut;
  speed?: number;

  constructor(target: HTMLDivElement, speed: number) {
    if (!target) {
      console.error("DonutDom init failed: missing target!");
      return;
    }

    this.target = target;
    this.speed = speed;
    this.donut = new Donut();

    this.start();
  }

  public start() {
    if (!this.target || !this.donut) return false;

    this.interval = setInterval(() => {
      this.target!.innerText = this.donut?.tick() as string;
    }, this.speed);

    return true;
  }

  public stop() {
    if (!this.interval) return;

    clearInterval(this.interval);

    this.target!.innerText = "";
  }
}
