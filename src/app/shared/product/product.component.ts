import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() title : string = '';

  @Input() image : string = '';

  @Input() rating : string = '';

  @Input() price : string = '';

  @Input() ratingCount : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
