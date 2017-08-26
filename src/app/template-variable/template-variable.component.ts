import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

declare let d3: any;

@Component({
  selector: 'tp-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.scss']
})
export class TemplateVariableComponent
  implements OnInit, AfterViewInit {
  works: string[] = [];

  @ViewChild('work') inputWork: ElementRef;
  @ViewChild('chart') chart: ElementRef;

  constructor() {
    console.log(this.inputWork);

  }

  ngOnInit() {
  }

  drawChart() {
    const svg = d3.select('svg'),
      margin = {top: 40, left: 40, bottom: 40, right: 40},
      width = +svg.attr('width') - margin.left - margin.right,
      height = +svg.attr('height') - margin.top - margin.bottom;

    const canvas = d3.select(this.chart.nativeElement).node(),
      context = canvas.getContext('2d'),
      canvasWidth = canvas.width;

    const x0 = d3.scaleQuantize()
      .domain([0, 1])
      .range(['#8e0152', '#c51b7d', '#de77ae',
        '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0',
        '#b8e186', '#7fbc41', '#4d9221', '#276419']); // PiYG

    const x1 = d3.scalePoint()
      .domain(x0.range())
      .range([0, width]);

    const x2 = d3.scaleLinear()
      .domain([0, 1])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, 255])
      .range([height, 0]);

    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    g.append('g')
      .selectAll('circle')
      .data(x1.domain())
      .enter().append('circle')
      .attr('cx', function(d) { return x1(d); })
      .attr('r', 20)
      .attr('fill', function(d) { return d; });

    g.append('g')
      .attr('class', 'axis axis--x')
      .call(d3.axisTop(x1).tickPadding(18));

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y));

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x2));

    const line = g.append('g')
      .attr('class', 'lines')
      .selectAll('path')
      .data(['r', 'g', 'b'].map(function(channel) {
        const colors = x0.range().map(function(c) { return d3.rgb(c); }), n = colors.length;
        return colors.map(function(c, i) {
          return [i / (n - 1), c[channel]];
        });
      }))
      .enter().append('g')
      .attr('fill', 'none')
      .attr('stroke', function(d, i) { return ['#f00', '#0f0', '#00f'][i]; });

    line.append('path')
      .attr('stroke-width', 3)
      .attr('d', function(values) {
        const i = d3.interpolateBasis(values.map(function(v) { return v[1]; }));
        return d3.line()
          .x(function(t) { return x2(t); })
          .y(function(t) { return y(i(t)); })
          (d3.range(0, 1 + 1e-6, 0.001));
      });

    line.append('path')
      .attr('stroke-dasharray', '2,2')
      .attr('stroke', '#000')
      .attr('d', d3.line()
        .curve(d3.curveLinear)
        .x(function(d) { return x2(d[0]); })
        .y(function(d) { return y(d[1]); }));

    const image = context.createImageData(canvasWidth, 1),
      interpolate = d3.interpolateRgbBasis(x0.range());

    for (let i = 0, k = 0; i < canvasWidth; ++i, k += 4) {
      const c = d3.rgb(interpolate(i / (canvasWidth - 1)));
      image.data[k] = c.r;
      image.data[k + 1] = c.g;
      image.data[k + 2] = c.b;
      image.data[k + 3] = 255;
    }

    context.putImageData(image, 0, 0);
  }

  ngAfterViewInit() {
    this.inputWork.nativeElement.focus();
    this.drawChart();
  }

  save(work) {
    this.works.push(work);
    this.inputWork.nativeElement.value = '';
  }

}
