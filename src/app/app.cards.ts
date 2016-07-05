import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';
import {MD_SLIDE_TOGGLE_DIRECTIVES} from '@angular2-material/slide-toggle';
import {MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';
import {MD_RADIO_DIRECTIVES,MdUniqueSelectionDispatcher} from '@angular2-material/radio';
import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-cards',
  templateUrl: 'app.cards.html',
  directives: [ROUTER_DIRECTIVES,MD_RADIO_DIRECTIVES,MD_CHECKBOX_DIRECTIVES,MD_SLIDE_TOGGLE_DIRECTIVES,MD_INPUT_DIRECTIVES,Dragula, MD_BUTTON_DIRECTIVES,MdIcon,MdToolbar,MD_SIDENAV_DIRECTIVES,MD_LIST_DIRECTIVES,MD_CARD_DIRECTIVES,MD_PROGRESS_CIRCLE_DIRECTIVES],
  providers: [MdUniqueSelectionDispatcher,MdIconRegistry,DragulaService]
})
export class CardsComponent {
  message: string;
  setMessage() {
    this.message = 'OK';
  }
  todos = [
    {'titulo':'Titulo 1', 'subtitulo':'Subititulo 1'},
    {'titulo':'Titulo 2', 'subtitulo':'Subititulo 2'},
    {'titulo':'Titulo 3', 'subtitulo':'Subititulo 3'},
    {'titulo':'Titulo 4', 'subtitulo':'Subititulo 4'}
  ];

  doing = [
    {'titulo':'Doing 1', 'subtitulo':'Subititulo 1'},
    {'titulo':'Doing 2', 'subtitulo':'Subititulo 2'},
    {'titulo':'Doing 3', 'subtitulo':'Subititulo 3'},
    {'titulo':'Doing 4', 'subtitulo':'Subititulo 4'}
  ];

  done = [
    {'titulo':'Done 1', 'subtitulo':'Subititulo 1'},
    {'titulo':'Done 2', 'subtitulo':'Subititulo 2'},
    {'titulo':'Done 3', 'subtitulo':'Subititulo 3'},
    {'titulo':'Done 4', 'subtitulo':'Subititulo 4'}
  ];
  constructor(private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value) => {
      console.log(`drag: ${value[0]}`);
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      console.log(`over: ${value[0]}`);
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      console.log(`out: ${value[0]}`);
      this.onOut(value.slice(1));
    });
  }
  private onDrag(args) {
    let [e, el] = args;
    console.log(this.todos);
    console.log(this.doing);
    console.log(this.done);
  }

  private onDrop(args) {
    let [e, el] = args;
    // do something
  }

  private onOver(args) {
    let [e, el, container] = args;
    // do something
  }

  private onOut(args) {
    let [e, el, container] = args;
    // do something
  }
}
