import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

/*核心模块*/
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  // Optional 注解=>可寻依赖
  // SkipSelf 注解=>向父级寻找依赖
  constructor(@Optional() @SkipSelf() parent: CommonModule) {
    if (parent) throw new Error('模块已存在,无法再次加载 !')
  }
}
