import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.sass'],
})
export class Day1Component implements OnInit {
  // 绑定属性
  public title: string = '-------绑定数据';

  msg: string = '2134'; // 不写默认为public类型

  public num: number = 1234;

  public message: string;
  /* 
    声明属性的几种方式
    public 共有 *默认 可以在这个类里面使用，也可以在类外面使用
    protected 保护类型 在当前类和他的自雷里面可以访问
    private 私有 只有当前类可以访问
 */

  public content: string = '<h2>这是动态html</h2>';

  constructor() {
    this.message = '这是给属性赋值--（改变属性的值）';
  }

  ngOnInit(): void {}
}
