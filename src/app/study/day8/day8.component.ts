import { Component, OnInit } from "@angular/core";
import { RequestService } from "src/app/services/request.service";
import { HttpserviceService } from "src/app/services/httpservice.service";

@Component({
  selector: "app-day8",
  templateUrl: "./day8.component.html",
  styleUrls: ["./day8.component.sass"],
})
export class Day8Component implements OnInit {
  constructor(
    public request: RequestService,
    public http: HttpserviceService
  ) {}

  ngOnInit(): void {
    var stream = this.request.getRxjsCompleteData();
    stream.subscribe((data) => {
      console.log(data);
    });
  }

  axiosGetData() {
    this.http.axiosGet("http://baidu.com");
  }
}
