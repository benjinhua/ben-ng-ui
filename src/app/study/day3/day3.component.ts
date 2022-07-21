import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.sass'],
})
export class Day3Component implements OnInit {
  public peopleInfo: any = {
    name: 'zhangsan',
    sex: 1,
  };

  constructor() {}

  ngOnInit(): void {}
}
