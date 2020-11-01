import TimelineBase from "./timelinebase";
import * as d3 from "d3";

class Timeline extends TimelineBase {
  _y: d3.ScaleTime<any, any>;

  constructor(svg: d3.Selection<SVGElement, {}, HTMLElement, any>) {
    super(svg);

    this._init_chart();
    this._resize_chart();
  }

  _init_chart(): void {
    super._init_chart();

    this._y = d3
      .scaleTime()
      .domain([new Date("2019-10-01"), new Date("2020-01-01")]);
  }

  _draw_axes(width: number, height: number): void {
    // this._x.range([0, width]);
    this._y.range([height, 0]);

    let left_axis = d3.axisLeft(this._y);
    this._g_left_axis.call(left_axis);
  }
}

export default Timeline;
