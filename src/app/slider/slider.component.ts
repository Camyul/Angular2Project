import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  public berries = require('../images/berries.jpg');
  public pizza = require('../images/pizza.jpg');
  public vegies = require('../images/vegies.jpg');

  constructor() { }

}
