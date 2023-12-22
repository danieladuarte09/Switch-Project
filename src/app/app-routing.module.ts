import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { PostListComponent } from './components/List/post-list/post-list.component';
import { MessagesComponent } from './components/messages/messages.component';

/**Rutas para navegar por los diferentes apartados. */
const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: PostListComponent },
  {path: 'explorer', component: ExplorerComponent },
  {path: 'messages', component: MessagesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
