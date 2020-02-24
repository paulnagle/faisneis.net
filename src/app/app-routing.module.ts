import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  // { path: 'legislation', loadChildren: './legislation/legislation.module#LegislationPageModule' },
  {
    path: 'legislation',
    loadChildren: () => import('./legislation/legislation.module').then(m => m.LegislationPageModule)
  },

  { path: 'debates', loadChildren: './debates/debates.module#DebatesPageModule' },
  { path: 'constituencies', loadChildren: './constituencies/constituencies.module#ConstituenciesPageModule' },
  { path: 'parties', loadChildren: './parties/parties.module#PartiesPageModule' },
  { path: 'divisions', loadChildren: './divisions/divisions.module#DivisionsPageModule' },
  { path: 'questions', loadChildren: './questions/questions.module#QuestionsPageModule' },
  { path: 'houses', loadChildren: './houses/houses.module#HousesPageModule' },
  { path: 'members', loadChildren: './members/members.module#MembersPageModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
