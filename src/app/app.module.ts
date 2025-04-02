import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { FeaturesComponent } from './components/features/features.component';
import { StatsComponent } from './components/stats/stats.component';
import { IntegrationsComponent } from './components/integrations/integrations.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageComponent } from './components/image/image.component';
import { IntersectionObserverDirective } from './shared/directives/intersection-observer.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    SummaryComponent,
    SnippetsComponent,
    FeaturesComponent,
    StatsComponent,
    IntegrationsComponent,
    CustomersComponent,
    ContactComponent,
    HomeComponent,
    ImageComponent,
    IntersectionObserverDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgChartsModule,
    FontAwesomeModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
