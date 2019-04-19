import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
	  { id: 11, name: 'Mr. Angular' },
	  { id: 12, name: 'React' },
	  { id: 13, name: 'Vue' },
	  { id: 14, name: 'C Sharp' },
	  { id: 15, name: 'Javascript' },
	  { id: 16, name: 'Dr. Ts' },
	  { id: 17, name: 'Node Jr.' },
	  { id: 18, name: 'Dr. Git' },
	  { id: 19, name: 'Mozilla' },
	  { id: 20, name: 'Chrome' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}