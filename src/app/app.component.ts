import { Component, OnInit } from "@angular/core";
import { HighchartService, chartModal } from "./highchart.service";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Firestore-Angular-Highcharts";
  items$: chartModal[];
  Highcharts: typeof Highcharts = Highcharts;
  chardata: any[] = [];
  chartOptions: any;
  constructor(private highchartservice: HighchartService) {}
  ngOnInit() {
    this.highchartservice.rates$.subscribe((assets) => {
      this.items$ = assets;
      if (this.items$) {
        this.items$.forEach((element) => {
          this.chardata.push(element.rate);
        });
        this.getChart();
      }
    });
  }
  getChart() {
    this.chartOptions = {
      series: [
        {
          data: this.chardata,
        },
      ],
      chart: {
        type: "bar",
      },
      title: {
        text: "barchart",
      },
    };
  }
}
