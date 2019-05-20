import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './layout/header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CardComponent } from './layout/card/card.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    CardComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    CardComponent
  ],
  imports: [FormsModule]
})
export class SharedModule {}
