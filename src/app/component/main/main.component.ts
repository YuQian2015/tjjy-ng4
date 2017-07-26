import { Component, OnInit } from '@angular/core';

// interface
import { Hero } from '../../interface/hero';
// service
import { HeroService } from '../../service/hero.service';
import { PostService } from '../../service/post.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [HeroService,PostService]
})


export class MainComponent implements OnInit {
  page:number;
  pageSize:number;
  count:number;
  postList:object;
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
  constructor(private heroService: HeroService,private postService: PostService) {
    this.page = 1;
    this.pageSize = 10;
    this.title = 'Tour of Heroes';
    this.hero = {
      id: 1,
      name: 'Windstorm'
    };
  }
  ngOnInit() {
    this.getHeroes();

    //获取文章列表
    this.postService.getPostList(
      {
        page:this.page,
        pageSize:this.pageSize
      }
    ).subscribe(data => {
      if (data) {
        console.log(data);
        this.count = data.data.count;
        this.postList = data.data.result;
      }
    });
  }

}
