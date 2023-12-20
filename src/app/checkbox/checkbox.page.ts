import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

   form:any = [
    {val: 'Pepperoni', isChecked: false},
    {val: 'Sausage', isChecked: false},
    {val: 'Mushroom', isChecked: false}
  ];

  constructor() { }

  ngOnInit() {
  }

  _ionChange(event: any){
    console.log(event);
  }

  _getSelectedItem(selectedItem: any){
    console.log(selectedItem.isChecked);
  }
}
