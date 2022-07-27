import {
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-day6',
  templateUrl: './day6.component.html',
  styleUrls: ['./day6.component.sass'],
})
export class Day6Component
  implements OnInit, AfterViewInit, OnChanges, OnDestroy
{
  constructor() {}

  ngOnChanges(): void {
    //首次调用会发生在ngOnInit之前

    console.log('执行顺序-ngOnChanges');
  }

  ngOnInit(): void {
    console.log('执行顺序-ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('执行顺序-ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // 卸载组件
    console.log('执行顺序-ngOnDestroy');
  }
}
