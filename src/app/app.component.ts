import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';
import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [Dragula, MD_BUTTON_DIRECTIVES,MdIcon,MdToolbar,MD_SIDENAV_DIRECTIVES,MD_LIST_DIRECTIVES,MD_CARD_DIRECTIVES,MD_PROGRESS_CIRCLE_DIRECTIVES],
  providers: [MdIconRegistry,DragulaService]
})
export class AppComponent {
  todos = [
    {'titulo':'Titulo 1', 'subtitulo':'Subititulo 1'},
    {'titulo':'Titulo 2', 'subtitulo':'Subititulo 2'},
    {'titulo':'Titulo 3', 'subtitulo':'Subititulo 3'},
    {'titulo':'Titulo 4', 'subtitulo':'Subititulo 4'}
  ];
}
