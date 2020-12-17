import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ContactsI } from "./../../model/contact.interface";


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  contacts : Array<ContactsI>;

  constructor(
  	public dialog: MatDialog,
  ) {
    this.contacts = [];
  
   }


  ngOnInit() {
  
  }


 

}
