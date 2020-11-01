import TimelineBase from "./timelinebase";
import * as d3 from "d3";

class Timeline extends TimelineBase {
  _y: d3.ScaleTime<any, any>;

  constructor(svg: d3.Selection<SVGElement, {}, HTMLElement, any>) {
    super(svg);

    this._y = d3
      .scaleTime()
      .domain([new Date("2019-10-01"), new Date("2020-01-01")]);
  }
}

export default Timeline;
