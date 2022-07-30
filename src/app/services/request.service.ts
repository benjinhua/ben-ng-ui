import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RequestService {
  constructor() {}

  // rxjs 获取异步方法数据
  getRxjsData() {
    return new Observable((observer) => {
      setTimeout(() => {
        var userName = "zhangsan--observer";
        observer.next(userName);
      }, 4000);
    });
  }

  // Rxjs 多次执行
  getRxjsIntervalData() {
    return new Observable((observer) => {
      setInterval(() => {
        var userName = "zhangsan--observer--setInterval";
        observer.next(userName);
      }, 1000);
    });
  }

  // rxjs完整请求数据
}
