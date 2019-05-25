import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SearchRepoComponent,
    ShowResultComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
