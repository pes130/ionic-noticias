import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  // Establecer a Ion-segment un valor por defecto
  @ViewChild(IonSegment, {static: false}) segment: IonSegment;
  
  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  categoria = "";

  
  constructor() {}

  ngOnInit(): void {
    this.segment.value = this.categorias[0];
  }

}
