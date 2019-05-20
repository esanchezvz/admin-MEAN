import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './layout/header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CardComponent } from './layout/card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NotFoundComponent,
    CardComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NotFoundComponent,
    CardComponent
  ],
  imports: [FormsModule, RouterModule, CommonModule]
})
export class SharedModule {}
