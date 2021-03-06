import { Component, Input } from '@angular/core';
import { Hero } from './classes/hero';

@Component({
  selector: 'my-hero-detail',
  template:  `
    <div *ngIf="hero">
        <h2>{{hero.name}} details!{{myName}}</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
    </div>
    `
})

export class HeroDetailComponent {
    myName: String = 'wilson';
    @Input()
     hero: Hero;
    
}