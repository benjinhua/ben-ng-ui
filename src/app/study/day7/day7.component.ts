import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { map, filter } from 'rxjs';

@Component({
  selector: 'app-day7',
  templateUrl: './day7.component.html',
  styleUrls: ['./day7.component.sass'],
})
export class Day7Component implements OnInit {
  // 常见的异步编程的几种方法
  // 1.回调函数
  // 2.事件监听
  // 3.promise
  // 4.Rxjs

  constructor(public request: RequestService) {}

  ngOnInit(): void {
    // var rxjsData = this.request.getRxjsData();
    // rxjsData.subscribe((data) => {
    //   console.log(data);
    // });

    // 取消订阅 1秒后撤回刚才异步操作
    var stream = this.request.getRxjsData();
    var d = stream.subscribe((data) => {
      console.log(data);
    });
    setTimeout(() => {
      d.unsubscribe(); // 取消订阅
    }, 1000);

    // Rxjs 订阅后多次执行
    var streamInterval = this.request.getRxjsIntervalData();
    streamInterval.subscribe((data) => {
      console.log(data);
    });

    // Rxjs 用工具方法对返回数据处理
    streamInterval
      .pipe(
        // filter((value) => {
        //   if (value === 'zhangsan') return true;
        // }),
        map((value) => {
          return (value as string) + value;
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
