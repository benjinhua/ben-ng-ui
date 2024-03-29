// 这个文件是Angular根模块，告诉angular如何组装应用

// Angular核心模块
import { NgModule } from "@angular/core";
// 浏览器解析的模块
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
// 根组件
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { zh_CN } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import zh from "@angular/common/locales/zh";
import { FormsModule } from "@angular/forms"; // 双向数据绑定必须引用
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Day2Component } from "./study/day2/day2.component";
import { Day1Component } from "./study/day1/day1.component";
import { Day3Component } from "./study/day3/day3.component";

//引入配置服务
import { StorageService } from "./services/storage.service";
import { RequestService } from "./services/request.service";
import { HttpserviceService } from "./services/httpservice.service";
import { Day4Component } from "./study/day4/day4.component";
import { Day5Component } from "./study/day5/day5.component";
import { ChildComponentComponent } from "./study/components/child-component/child-component.component";
import { Day6Component } from "./study/day6/day6.component";
import { Day7Component } from "./study/day7/day7.component";
import { Day8Component } from "./study/day8/day8.component";
import { Day9Component } from './study/day9/day9.component';
import { Day10Component } from './study/day10/day10.component';
import { Day11Component } from './study/day11/day11.component';
import { Day12Component } from './study/day12/day12.component';

registerLocaleData(zh);

// @NgModule装饰器，@NgModule接受一个元数据对象，告诉Angular如何编译和启动应用
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Day2Component,
    Day1Component,
    Day3Component,
    Day4Component,
    Day5Component,
    ChildComponentComponent,
    Day6Component,
    Day7Component,
    Day8Component,
    Day9Component,
    Day10Component,
    Day11Component,
    Day12Component,
  ] /* 配置当前项目运行的组件 */,
  imports: [
    /* 配置当前模块运行依赖的其他模块 */ BrowserModule,
    AppRoutingModule,
    FormsModule, //引入表单
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    StorageService,
    RequestService,
    HttpserviceService,
  ] /* 配置项目所需要的服务 */,
  bootstrap: [
    AppComponent,
  ] /* 指定应用的主视图（根组件）通过引导根AppModule来启动应用，这里一般写的是根组件 */,
})
// 根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule {}
