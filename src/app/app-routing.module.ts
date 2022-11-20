import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConstituenciesPageModule } from './constituencies/constituencies.module';
import { DebatesPageModule } from './debates/debates.module';
import { DivisionsPageModule } from './divisions/divisions.module';
import { HousesPageModule } from './houses/houses.module';
import { MembersPageModule } from './members/members.module';
import { PartiesPageModule } from './parties/parties.module';
import { QuestionsPageModule } from './questions/questions.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'legislation', loadChildren: () => import('./legislation/legislation.module').then(m => m.LegislationPageModule) },
  { path: 'debates', loadChildren: () => import('./debates/debates.module').then(x => DebatesPageModule) },
  { path: 'constituencies', loadChildren: () => import('./constituencies/constituencies.module').then(x => ConstituenciesPageModule) },
  { path: 'parties', loadChildren: () => import('./parties/parties.module').then(x => PartiesPageModule) },
  { path: 'divisions', loadChildren: () => import('./divisions/divisions.module').then(x => DivisionsPageModule) },
  { path: 'questions', loadChildren: () => import('./questions/questions.module').then(x => QuestionsPageModule) },
  { path: 'houses', loadChildren: () => import('./houses/houses.module').then(x => HousesPageModule) },
  { path: 'members', loadChildren: () => import('./members/members.module').then(x => MembersPageModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
