import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ReactiveFromsExampleComponent } from './reactive-froms-example.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './hero.service';
import { MySuperControlComponent } from './my-super-control/my-super-control.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [HeroService],
  declarations: [ReactiveFromsExampleComponent, HeroDetailComponent, HeroListComponent, MySuperControlComponent],
  exports: [ReactiveFromsExampleComponent]
})
export class ReactiveFormsExampleModule { }
