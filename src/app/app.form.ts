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
import {MD_RADIO_DIRECTIVES, MdUniqueSelectionDispatcher} from '@angular2-material/radio';
import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-form',
  templateUrl: 'app.form.html',
  directives: [ROUTER_DIRECTIVES, MD_RADIO_DIRECTIVES, MD_CHECKBOX_DIRECTIVES, MD_SLIDE_TOGGLE_DIRECTIVES, MD_INPUT_DIRECTIVES, Dragula, MD_BUTTON_DIRECTIVES, MdIcon, MdToolbar, MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MD_PROGRESS_CIRCLE_DIRECTIVES],
  providers: [MdUniqueSelectionDispatcher, MdIconRegistry, DragulaService]
})
export class FormComponent {

  firstName: string;
  lastName: string;
  address: string;
  address2: string;
  toggle: boolean;
  checkbox: boolean;
  option: string;
  city: string;
  state: string;
  postalCode: string;
}
