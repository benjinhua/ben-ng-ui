// 这个文件是Angular根模块，告诉angular如何组装应用

// Angular核心模块
import { NgModule } from '@angular/core';
// 浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// 根组件
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(zh);

// @NgModule装饰器，@NgModule接受一个元数据对象，告诉Angular如何编译和启动应用
@NgModule({
  declarations: [AppComponent, LayoutComponent] /* 配置当前项目运行的组件 */,
  imports: [
    /* 配置当前模块运行依赖的其他模块 */ BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }] /* 配置项目所需要的服务 */,
  bootstrap: [
    AppComponent,
  ] /* 指定应用的主视图（根组件）通过引导根AppModule来启动应用，这里一般写的是根组件 */,
})
// 根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule {}