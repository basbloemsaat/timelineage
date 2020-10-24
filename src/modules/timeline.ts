import TimelineBase from "./timelinebase";
import * as d3 from "d3";

class Timeline extends TimelineBase {
  _y: d3.ScaleTime<any, any>;

  constructor(svg: d3.Selection<SVGElement, {}, HTMLElement, any>) {
    super(svg);
  }
}

export default Timeline;
