import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';


const routes: Routes = [
 // { path : 'plugins' , loadChildren : () => import('mfeEpfPlugins/Module').then(m => m.PluginsHomeModule)},
  {
    path: 'plugins',
    loadChildren: () =>
         loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            exposedModule: './Module'
        })
        .then(m => m.PluginsHomeModule)
        .catch(e => {
             return import('./epf-placeholder/epf-placeholder.module').then(m => m.EpfPlaceHolderModule);
        })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
