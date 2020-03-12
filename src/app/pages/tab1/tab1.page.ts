import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];

  ngOnInit(): void {
    this.noticiasService.getTopHeadlines()
      .subscribe( resp => {
        console.log('noticias', resp);
        // Los ... trata cada objeto del array como uno, para meterlo en el push
        this.noticias.push( ...resp.articles);
      })
  }

  constructor(private noticiasService:NoticiasService) {}

}
