import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // 数据持久化
  set(key: string, value: string) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  get(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
  }
}
