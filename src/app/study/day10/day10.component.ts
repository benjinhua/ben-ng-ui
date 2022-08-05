import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-day10",
  templateUrl: "./day10.component.html",
  styleUrls: ["./day10.component.sass"],
})
export class Day10Component implements OnInit {
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    //get传值
    console.log(this.route.queryParams); // this.route.queryParams 是个rxjs对象
    this.route.queryParams.subscribe((res) => {
      console.log("get传值-----", res);
    });

    // 动态传值
    this.route.params.subscribe((res) => {
      console.log("动态传值-----", res);
    });
  }
}
