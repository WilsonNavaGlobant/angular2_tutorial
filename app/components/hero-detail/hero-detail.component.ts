import { Component, Input } from '@angular/core';
import { Hero } from '../../classes/hero';

@Component({
  selector: 'my-hero-detail',
  moduleId: module.id,
  templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent {
    myName: String = 'wilson';
    @Input()
     hero: Hero;
    
}