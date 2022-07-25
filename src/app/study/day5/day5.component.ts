import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.sass'],
})
export class Day5Component implements OnInit {
  public msg: string = '父组件给子组件传值';

  constructor() {}

  ngOnInit(): void {}

  run() {
    alert('执行的父组件的方法');
  }
}
