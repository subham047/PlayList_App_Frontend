import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { PlayListsComponent } from './components/play-lists/play-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SongListComponent,
    PlayListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
