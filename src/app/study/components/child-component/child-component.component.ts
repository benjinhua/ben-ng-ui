import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.sass'],
})
export class ChildComponentComponent implements OnInit {
  @Input() msg: string | undefined;
  @Input() run: any;
  @Input() day5: any;

  constructor() {}

  ngOnInit(): void {
    console.log('这是整个父组件的实例', this.day5);
  }

  getParentRun() {
    this.run();
  }
}
