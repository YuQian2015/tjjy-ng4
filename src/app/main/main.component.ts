import { Component, OnInit } from '@angular/core';

interface Hero {
    id: number;
    name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
    hero: Hero;
    title: string;
    heroes: Hero[];
    selectedHero: Hero;
  constructor() {
    this.title = 'Tour of Heroes';
    this.hero = {
      id: 1,
      name: 'Windstorm'
    };
    this.heroes = HEROES;
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit() {
  }

}
