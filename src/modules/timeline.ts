import * as d3 from "d3";

class Timeline {
  _svg: any; // any to be able to add { passive: false } to the wheel event

  _g_canvas: any;
  _g_center_axis: any; // any because node().getBBox();
  _g_left_axis: any; // any because node().getBBox();
  _g_right_axis: any; // any because node().getBBox();
  _g_top_axis: any; // any because node().getBBox();
  _g_bottom_axis: any; // any because node().getBBox();
  _g_color_legend: any; // any because node().getBBox();

  _width: number;
  _height: number;
  _canvas_width: number;
  _canvas_height: number;

  _y: d3.ScaleTime<any, any>;

  constructor(svg: d3.Selection<SVGElement, {}, HTMLElement, any>) {
    this._svg = svg;

    this._init_chart();
    this._resize_chart();
  }

  _init_chart(): void {
    this._g_canvas = this._svg.append("g").classed("canvas", true);
    this._g_canvas.append("rect").classed("background", true); // background rect as target for wheel event
    this._g_center_axis = this._svg.append("g").classed("center", true);
    this._g_left_axis = this._svg.append("g").classed("left", true);
    this._g_right_axis = this._svg.append("g").classed("right", true);
    this._g_top_axis = this._svg.append("g").classed("top", true);
    this._g_bottom_axis = this._svg.append("g").classed("bottom", true);

    this._y = d3
      .scaleTime()
      .domain([new Date("2010-01-01"), new Date("2020-01-01")]);
  }

  _resize_chart(): void {
    this._width = this._svg.node().clientWidth;
    this._height = this._svg.node().clientHeight;

    this._svg.attr("viewBox", `0 0 ${this._width} ${this._height}`);

    this._draw_axes(this._width, this._height); // first time drawing axes full height and width are used. First draw is used for measurements;

    let center_axis_width = Math.ceil(
      this._g_center_axis.node().getBBox()["width"]
    );

    let left_axis_width = 0;
    let right_axis_width = 0;

    let top_axis_height = 0;
    let bottom_axis_height = 0;

    this._canvas_width = this._width - left_axis_width + right_axis_width;
    this._canvas_height = this._height - top_axis_height - bottom_axis_height;

    this._g_canvas.attr(
      "transform",
      `translate(${left_axis_width},${top_axis_height})`
    );

    d3.select("rect.background")
      .attr("width", this._canvas_width)
      .attr("height", this._canvas_height);

    let center_left = this._width / 2;
    this._g_center_axis.attr(
      "transform",
      `translate(${center_left},${top_axis_height})`
    );

    let left_left = (this._width - center_axis_width -15) / 2;
    this._g_left_axis.attr(
      "transform",
      `translate(${left_left},${top_axis_height})`
    );

    let right_left = (this._width + center_axis_width) / 2;
    this._g_right_axis.attr(
      "transform",
      `translate(${right_left},${top_axis_height})`
    );

    this._g_top_axis.attr(
      "transform",
      `translate(${left_axis_width},${top_axis_height})`
    );

    this._g_bottom_axis.attr(
      "transform",
      `translate(${left_axis_width},${top_axis_height + this._canvas_height})`
    );

    this._draw_axes(this._canvas_width, this._canvas_height); // first time drawing axes actual canvas dimensions are used.
  }

  _draw_axes(width: number, height: number): void {
    this._y.range([height, 0]);

    let center_axis = d3.axisLeft(this._y).tickSize(0);
    this._g_center_axis.call(center_axis);

    let left_axis = d3.axisLeft(this._y).tickSize(width).tickSizeOuter(0);
    this._g_left_axis.call(left_axis);

    let right_axis = d3.axisRight(this._y).tickSize(width).tickSizeOuter(0);
    this._g_right_axis.call(right_axis);
  }
}

export default Timeline;
