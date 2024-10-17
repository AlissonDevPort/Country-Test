import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms'; 
import { NgxPaginationModule } from 'ngx-pagination'; 
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    SkeletonLoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgChartsModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
