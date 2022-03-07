import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayListsComponent } from './components/play-lists/play-lists.component';
import { SongListComponent } from './components/song-list/song-list.component';


const routes: Routes = [
  {path : 'Song-List', component : SongListComponent},
  {path:'', component: SongListComponent},
  {path:'Play-List', component : PlayListsComponent}
];


// const routes: Routes = [
//   {path:'home', component:HomeComponent},
//   {path:'',redirectTo:'home',pathMatch:'full'},
//   {path:'projects', component : ProjectListsComponent},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
