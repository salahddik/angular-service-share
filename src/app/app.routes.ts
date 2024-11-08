import { Routes } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainAboutComponent } from './main-about/main-about.component';
import { MainContactComponent } from './main-contact/main-contact.component';
import { MainPnfComponent } from './main-pnf/main-pnf.component';

export const routes: Routes = [


    { path: '', component: MainHomeComponent,    title: "Home"
    },

    { path: 'about', component: MainAboutComponent,    title: "About" },

    { path: 'contact', component: MainContactComponent ,    title: "Contact"},
    { path: '**', component:MainPnfComponent,    title: "Page not found" }, 


];
