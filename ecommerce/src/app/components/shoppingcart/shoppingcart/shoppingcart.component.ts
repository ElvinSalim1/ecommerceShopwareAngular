import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { ShoppingCartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService, private store: Store<IState>) { }  

  public shoppingcart = this.store.select(store => store.shoppingcart)
  
  ngOnInit(): void {
  }

  get totalAmount() {
    return this.shoppingCartService.getTotalAmount()
  }
}
