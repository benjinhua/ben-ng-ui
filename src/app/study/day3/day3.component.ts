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
    cityList: ['benjing', 'shanghai', 'nanjing'],
    city: '',
    hobby: [
      {
        title: 'eat',
        checked: false,
      },
      {
        title: 'sleep',
        checked: true,
      },
    ],
    mark: '1111',
  };
  public keyword: string = '';
  public searchList: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  doSearch() {
    this.searchList.push(this.keyword);
  }
}
