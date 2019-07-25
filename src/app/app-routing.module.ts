import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule' },

  { path: 'features', loadChildren: './Pages/features/features.module#FeaturesPageModule' },
  { path: 'event-page', loadChildren: './Pages/event-page/event-page.module#EventPagePageModule' },
  { path: 'image', loadChildren: './Pages/image/image.module#ImagePageModule' },

  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'features', loadChildren: './Pages/features/features.module#FeaturesPageModule' },
  { path: 'userhome', loadChildren: './Pages/userhome/userhome.module#UserhomePageModule' },
  

  { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule' },
  { path: 'signuppage', loadChildren: './Pages/signuppage/signuppage.module#SignuppagePageModule' },

  { path: 'features', loadChildren: './Pages/features/features.module#FeaturesPageModule' },
 


  { path: 'features', loadChildren: './Pages/features/features.module#FeaturesPageModule' },
  { path: 'attendee', loadChildren: './Pages/attendee/attendee.module#AttendeePageModule' },
  { path: 'eventorg', loadChildren: './Pages/eventorg/eventorg.module#EventorgPageModule' },
  { path: 'orghome', loadChildren: './Pages/orghome/orghome.module#OrghomePageModule' },
 
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
