import { Routes } from '@angular/router';
import { HomeComponent } from './Routing/home/home.component';
import { StudentComponent } from './Routing/student/student.component';
import { StudentDetailsComponent } from './Routing/student-details/student-details.component';
import { ProfileComponent } from './Routing/profile/profile.component';
import { ErrorComponent } from './Routing/error/error.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"Students",component:StudentComponent},
    {path:"Students/:id",component:StudentDetailsComponent},
    {path:"profile",component:ProfileComponent},
    {path:"**",component:ErrorComponent},
    
];
