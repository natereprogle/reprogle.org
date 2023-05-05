import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './pages/contact/contact.component';
import {KeysComponent} from './pages/keys/keys.component';
import {MainComponent} from './pages/main/main.component';

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'keys', component: KeysComponent},
  {path: '', pathMatch: 'full', component: MainComponent},
  {path: 'blog', loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule)},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
