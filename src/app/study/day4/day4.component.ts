import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.sass'],
})
export class Day4Component implements OnInit {
  // dom操作以及@viewchild
  /*
    ViewChild获取dom节点
    1.模板中给dom起一个名字
    <div #myBox></div>
    2.在业务逻辑引入
    import { Component, OnInit, ViewChild } from '@angular/core';
    3.写在类里面
    @ViewChild('myBox') myBox: any;
    4.ngAfterViewInit生命周期函数里面获取dom
   */
  @ViewChild('myBox') myBox: any;
  // 获取子组件
  @ViewChild('day3') day3: any;

  constructor() {}

  ngOnInit(): void {
    // 组件指令初始化完成，并不是真正的dom加载完成
  }

  ngAfterViewInit(): void {
    // 视图加载完成以后触发的方法  dom加载完成（dom操作放进该生命周期）
    // 获取dom节点
    this.myBox.nativeElement;
    this.myBox.nativeElement.innerHTML = '我是一个viewchild获取的dom节点';

    this.day3.showRun(); // 调用子组件方法
  }
}
