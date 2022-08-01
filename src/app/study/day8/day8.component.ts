import { Component, OnInit } from "@angular/core";
import { RequestService } from "src/app/services/request.service";

@Component({
  selector: "app-day8",
  templateUrl: "./day8.component.html",
  styleUrls: ["./day8.component.sass"],
})
export class Day8Component implements OnInit {
  constructor(public request: RequestService) {}

  ngOnInit(): void {
    var streamInterval = this.request.getRxjsIntervalData();
    streamInterval.subscribe((data) => {
      console.log(data);
    });
  }
}
