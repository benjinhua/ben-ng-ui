import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-day9",
  templateUrl: "./day9.component.html",
  styleUrls: ["./day9.component.sass"],
})
export class Day9Component implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
  jumpTo() {
    // 动态路由跳转
    this.router.navigate(["/day10/", "lisi"]);
  }
  jumpGetTo() {
    // get传值路由跳转
    let navigationExtras: NavigationExtras = {
      queryParams: { name: "wangwu" },
    };
    this.router.navigate(["/day8"], navigationExtras);
  }
}
