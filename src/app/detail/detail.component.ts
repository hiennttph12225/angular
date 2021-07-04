import { Component, Input, OnInit } from '@angular/core';
import { ProductType } from '../productType';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() product: ProductType;
  constructor() { }

  ngOnInit(): void {
  }


}
