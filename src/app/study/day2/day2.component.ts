import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.sass'],
})
export class Day2Component implements OnInit {
  // 定义数组
  public arr: string[] = ['111', '222', '333'];
  public list: Array<string | number> = ['111', '222', '333', 444];

  //引入动态图片地址
  public picUrl: string = '';

  public orderStatus: number = 1;

  public today: Date = new Date();

  public inputVal: string = '初始默认值';

  constructor() {}

  ngOnInit(): void {}
  run() {
    alert('执行方法');
    this.arr.push('新加一个数据');
  }
  inputChange(e: any) {
    console.log(e);
  }
}
