import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property/add-property.component';
import { PropertyListComponent } from './property/property-list/property-list.component';


const routes: Routes = [
    {
        path:'add-property',
        component:AddPropertyComponent
    },
    {
        path:'',
        component:PropertyListComponent
    },
    {
        path:'rent-property',
        component:PropertyListComponent
    },
    {
        path:'buy-property',
        component:PropertyListComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }