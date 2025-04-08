import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Route pour la page d'accueil
  { path: 'posts', component: PostListComponent }, // Route pour la liste des produits
  { path: 'post/:id', component: PostDetailComponent }, // Route pour un produit spécifique
  { path: 'not-found', component: NotFoundComponent }, // Route pour un produit spécifique
  { path: '**', redirectTo: 'not-found' } // Route pour les pages non trouvées
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
