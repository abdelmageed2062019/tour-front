// app.routes.ts
import { Routes } from '@angular/router';

// Import your components
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { PlacesComponent } from './pages/places/places.component';
import { PlacesdetailComponent } from './pages/placesdetail/placesdetail.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { VipComponent } from './pages/vip/vip.component';
import { CairoComponent } from './pages/cairo/cairo.component';
import { BookingComponent } from './pages/booking/booking.component';

// Import your auth guard
import { AuthGuard } from './All_services/guards/auth.guard';

export const routes: Routes = [
     { path: 'login', component: LoginComponent },
     { path: 'signup', component: SignupComponent },
     {
          path: 'home',
          component: HomeComponent,
     },
     {
          path: 'places',
          component: PlacesComponent,

     },
     {
          path: 'details/:id',
          component: PlacesdetailComponent,
     },
     {
          path: 'gallery',
          component: GalleryComponent,
     },
     {
          path: 'vip',
          component: VipComponent,
     },
     {
          path: 'cairo',
          component: CairoComponent,
     },
     {
          path: 'booking/:id',
          component: BookingComponent,
          canActivate: [AuthGuard]
     },
     // Default route to Home
     { path: '', redirectTo: '/home', pathMatch: 'full' },
     // Wildcard route to Home if no route is matched
     { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

