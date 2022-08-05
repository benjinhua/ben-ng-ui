import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Day7Component } from "./study/day7/day7.component";
import { Day8Component } from "./study/day8/day8.component";
import { Day9Component } from "./study/day9/day9.component";
import { Day10Component } from "./study/day10/day10.component";

const routes: Routes = [
  {
    path: "day7",
    component: Day7Component,
  },
  {
    path: "day8",
    component: Day8Component,
  },
  {
    path: "day9",
    component: Day9Component,
  },
  {
    path: "day10/:name", // 动态路由配置
    component: Day10Component,
  },
  // 匹配不到路由，默认跳转
  {
    path: "**" /* 任意的路由 */,
    redirectTo: "day9",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
