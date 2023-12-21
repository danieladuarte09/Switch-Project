import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { PostListComponent } from './components/List/post-list/post-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: PostListComponent },
  {path: 'explorer', component: ExplorerComponent },

  /*{
    path: 'test',
    loadChildren: () => import('./feature/test/test.module').then(m => m.TestModule)
  }*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
