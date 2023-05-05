import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './pages/blog/blog.component';
import {BlogPostComponent} from "./pages/blog-post/blog-post.component";

const routes: Routes = [
  {path: 'posts', component: BlogComponent},
  {path: 'post/:id', component: BlogPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {
}
