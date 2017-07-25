import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero';
// service
import { HeroService } from '../../service/hero.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [HeroService]
})


export class MainComponent implements OnInit {
  hero: Hero;
  title: string;
  heroes: Hero[];
  selectedHero: Hero;
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) {
    this.title = 'Tour of Heroes';
    this.hero = {
      id: 1,
      name: 'Windstorm'
    };
  }
  ngOnInit() {
    this.getHeroes();
  }

}
