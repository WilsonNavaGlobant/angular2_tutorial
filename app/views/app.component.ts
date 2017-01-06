import { Component } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ HeroService ]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[]; 
  selectedHero :Hero = null;
  imageUrl = 'http://www.wildwomanfundraising.com/wp-content/uploads/2012/04/puppet-gadget.jpg';

  //SERVICES
  constructor(private heroService: HeroService) { }

  //METHODS
  getHeroes(): void {
    this.heroService.getHeroes().then( (heroes) => {
      this.heroes = heroes
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //LIFE CYCLE
  ngOnInit(): void {
    this.getHeroes();
  }
}
